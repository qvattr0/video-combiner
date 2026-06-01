#!/usr/bin/env python3
"""Video Combiner backend.

A tiny local web server (standard library only) that powers the Video Combiner
app. It serves the pre-built web UI and exposes a small JSON API used to pick a
folder of clips and merge them into one video using ffmpeg.

No third-party Python packages are required. ffmpeg/ffprobe are looked up in the
bundled ./bin directory first (installed by the launcher on first run), then on
the system PATH.
"""

import json
import os
import re
import shutil
import socket
import subprocess
import tempfile
import threading
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

APP_DIR = os.path.dirname(os.path.abspath(__file__))
WEB_DIR = os.path.join(APP_DIR, "web")
BIN_DIR = os.path.join(APP_DIR, "bin")

VIDEO_EXTS = (".mp4", ".mov", ".m4v", ".avi", ".mkv")

# ---------------------------------------------------------------------------
# Shared job state (one combine job at a time)
# ---------------------------------------------------------------------------
_state_lock = threading.Lock()
_job = {
    "state": "idle",        # idle | running | done | error
    "percent": 0.0,
    "message": "",
    "output": "",
}


def set_job(**kwargs):
    with _state_lock:
        _job.update(kwargs)


def get_job():
    with _state_lock:
        return dict(_job)


# ---------------------------------------------------------------------------
# Tool resolution
# ---------------------------------------------------------------------------
def tool(name):
    """Return a path to ffmpeg/ffprobe, preferring the bundled ./bin copy."""
    local = os.path.join(BIN_DIR, name)
    if os.path.isfile(local) and os.access(local, os.X_OK):
        return local
    found = shutil.which(name)
    return found or name


# ---------------------------------------------------------------------------
# ffprobe helpers
# ---------------------------------------------------------------------------
def probe(path):
    """Return dict with vcodec, width, height, has_audio, acodec, duration."""
    cmd = [
        tool("ffprobe"), "-v", "error",
        "-print_format", "json",
        "-show_streams", "-show_format", path,
    ]
    out = subprocess.run(cmd, capture_output=True, text=True)
    if out.returncode != 0:
        raise RuntimeError(f"Could not read '{os.path.basename(path)}'.")
    data = json.loads(out.stdout or "{}")
    info = {
        "vcodec": None, "width": None, "height": None,
        "has_audio": False, "acodec": None, "duration": 0.0,
    }
    for s in data.get("streams", []):
        if s.get("codec_type") == "video" and info["vcodec"] is None:
            info["vcodec"] = s.get("codec_name")
            info["width"] = s.get("width")
            info["height"] = s.get("height")
        elif s.get("codec_type") == "audio" and not info["has_audio"]:
            info["has_audio"] = True
            info["acodec"] = s.get("codec_name")
    try:
        info["duration"] = float(data.get("format", {}).get("duration", 0.0))
    except (TypeError, ValueError):
        info["duration"] = 0.0
    return info


_TIME_RE = re.compile(r"out_time=(\d+):(\d+):(\d+\.\d+)")


def run_ffmpeg(cmd, total_seconds, base_percent, span_percent, on_processed=0.0):
    """Run ffmpeg with -progress on stdout and update job percent as it goes.

    base_percent..base_percent+span_percent is the slice of the overall progress
    bar this command represents. on_processed is seconds already done before this
    clip (used when normalizing many clips).
    """
    proc = subprocess.Popen(
        cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, bufsize=1
    )
    stderr_tail = []

    def drain_stderr():
        for line in proc.stderr:
            stderr_tail.append(line)
            if len(stderr_tail) > 40:
                del stderr_tail[0]

    t = threading.Thread(target=drain_stderr, daemon=True)
    t.start()

    for line in proc.stdout:
        m = _TIME_RE.search(line)
        if m and total_seconds > 0:
            h, mnt, sec = int(m.group(1)), int(m.group(2)), float(m.group(3))
            cur = h * 3600 + mnt * 60 + sec
            done = min(total_seconds, on_processed + cur)
            pct = base_percent + (done / total_seconds) * span_percent
            set_job(percent=round(min(pct, base_percent + span_percent), 1))

    proc.wait()
    t.join(timeout=1)
    if proc.returncode != 0:
        tail = "".join(stderr_tail).strip().splitlines()
        msg = tail[-1] if tail else "ffmpeg failed."
        raise RuntimeError(msg)


# ---------------------------------------------------------------------------
# Combine logic
# ---------------------------------------------------------------------------
def list_videos(folder):
    items = [
        f for f in os.listdir(folder)
        if f.lower().endswith(VIDEO_EXTS) and not f.startswith(".")
        and not f.lower().startswith("combined")
    ]
    return sorted(items, key=str.lower)


def unique_output(folder):
    base = os.path.join(folder, "combined.mp4")
    if not os.path.exists(base):
        return base
    i = 1
    while True:
        cand = os.path.join(folder, f"combined-{i}.mp4")
        if not os.path.exists(cand):
            return cand
        i += 1


def write_concat_list(paths, list_path):
    with open(list_path, "w") as fh:
        for p in paths:
            safe = p.replace("'", "'\\''")
            fh.write(f"file '{safe}'\n")


def do_combine(folder):
    try:
        set_job(state="running", percent=0.0, message="Scanning videos…", output="")
        names = list_videos(folder)
        if not names:
            raise RuntimeError("No video files were found in that folder.")
        paths = [os.path.join(folder, n) for n in names]

        set_job(message="Reading video details…")
        infos = [probe(p) for p in paths]
        total = sum(i["duration"] for i in infos) or 1.0

        first = infos[0]
        uniform = all(
            i["vcodec"] == first["vcodec"]
            and i["width"] == first["width"]
            and i["height"] == first["height"]
            and i["has_audio"] == first["has_audio"]
            for i in infos
        )

        output = unique_output(folder)

        with tempfile.TemporaryDirectory() as tmp:
            if uniform:
                set_job(message=f"Joining {len(paths)} clips (fast, lossless)…")
                list_path = os.path.join(tmp, "list.txt")
                write_concat_list(paths, list_path)
                cmd = [
                    tool("ffmpeg"), "-y", "-f", "concat", "-safe", "0",
                    "-i", list_path, "-c", "copy", "-movflags", "+faststart",
                    "-progress", "pipe:1", "-nostats", output,
                ]
                run_ffmpeg(cmd, total, 0.0, 100.0)
            else:
                # Mixed formats: normalize each clip, then concat-copy.
                target_w = max(i["width"] or 1280 for i in infos)
                target_h = max(i["height"] or 720 for i in infos)
                if target_w % 2:
                    target_w += 1
                if target_h % 2:
                    target_h += 1
                fps = 30
                vf = (
                    f"scale={target_w}:{target_h}:force_original_aspect_ratio=decrease,"
                    f"pad={target_w}:{target_h}:-1:-1:color=black,setsar=1,fps={fps}"
                )
                norm_paths = []
                processed = 0.0
                for idx, (p, info) in enumerate(zip(paths, infos), start=1):
                    set_job(message=f"Converting clip {idx} of {len(paths)}…")
                    norm = os.path.join(tmp, f"norm_{idx:04d}.mp4")
                    cmd = [tool("ffmpeg"), "-y", "-i", p]
                    if not info["has_audio"]:
                        cmd += [
                            "-f", "lavfi", "-i",
                            "anullsrc=channel_layout=stereo:sample_rate=48000",
                        ]
                    cmd += [
                        "-vf", vf,
                        "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
                        "-pix_fmt", "yuv420p",
                        "-c:a", "aac", "-ar", "48000", "-ac", "2",
                        "-shortest", "-movflags", "+faststart",
                        "-progress", "pipe:1", "-nostats", norm,
                    ]
                    run_ffmpeg(cmd, total, 0.0, 90.0, on_processed=processed)
                    processed += info["duration"]
                    norm_paths.append(norm)

                set_job(message="Finalizing…", percent=90.0)
                list_path = os.path.join(tmp, "list.txt")
                write_concat_list(norm_paths, list_path)
                cmd = [
                    tool("ffmpeg"), "-y", "-f", "concat", "-safe", "0",
                    "-i", list_path, "-c", "copy", "-movflags", "+faststart",
                    "-progress", "pipe:1", "-nostats", output,
                ]
                run_ffmpeg(cmd, total, 90.0, 10.0)

        set_job(state="done", percent=100.0, message="Done", output=output)
    except Exception as exc:  # noqa: BLE001 - surface message to UI
        set_job(state="error", message=str(exc))


# ---------------------------------------------------------------------------
# Native folder picker (macOS)
# ---------------------------------------------------------------------------
def choose_folder():
    script = (
        'POSIX path of (choose folder with prompt '
        '"Select the folder that contains your videos")'
    )
    res = subprocess.run(
        ["osascript", "-e", script], capture_output=True, text=True
    )
    if res.returncode != 0:
        if "User canceled" in (res.stderr or "") or "-128" in (res.stderr or ""):
            return None
        raise RuntimeError(res.stderr.strip() or "Could not open the folder picker.")
    path = res.stdout.strip().rstrip("/")
    return path or None


# ---------------------------------------------------------------------------
# HTTP handler
# ---------------------------------------------------------------------------
class Handler(BaseHTTPRequestHandler):
    def log_message(self, *args):
        pass  # keep the terminal quiet for the user

    def _json(self, obj, code=200):
        body = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urlparse(self.path)
        route = parsed.path

        if route == "/api/choose-folder":
            try:
                path = choose_folder()
                if path is None:
                    return self._json({"cancelled": True})
                count = len(list_videos(path))
                return self._json({
                    "path": path,
                    "name": os.path.basename(path) or path,
                    "count": count,
                })
            except Exception as exc:  # noqa: BLE001
                return self._json({"error": str(exc)}, 500)

        if route == "/api/progress":
            return self._json(get_job())

        if route == "/api/reveal":
            qs = parse_qs(parsed.query)
            target = (qs.get("path") or [""])[0]
            if target and os.path.exists(target):
                subprocess.run(["open", "-R", target])
                return self._json({"ok": True})
            return self._json({"error": "File not found."}, 404)

        return self._serve_static(route)

    def do_POST(self):
        if urlparse(self.path).path == "/api/combine":
            length = int(self.headers.get("Content-Length", 0))
            raw = self.rfile.read(length) if length else b"{}"
            try:
                folder = (json.loads(raw or b"{}") or {}).get("folder")
            except json.JSONDecodeError:
                folder = None
            if not folder or not os.path.isdir(folder):
                return self._json({"error": "That folder no longer exists."}, 400)
            if get_job()["state"] == "running":
                return self._json({"error": "A video is already being combined."}, 409)
            set_job(state="running", percent=0.0, message="Starting…", output="")
            threading.Thread(target=do_combine, args=(folder,), daemon=True).start()
            return self._json({"started": True})

        return self._json({"error": "Not found"}, 404)

    def _serve_static(self, route):
        rel = "index.html" if route in ("", "/") else route.lstrip("/")
        full = os.path.normpath(os.path.join(WEB_DIR, rel))
        if not full.startswith(WEB_DIR) or not os.path.isfile(full):
            full = os.path.join(WEB_DIR, "index.html")
        if not os.path.isfile(full):
            self.send_error(404, "UI not built")
            return
        ctype = {
            ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
            ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon",
            ".json": "application/json", ".woff2": "font/woff2",
        }.get(os.path.splitext(full)[1], "application/octet-stream")
        with open(full, "rb") as fh:
            body = fh.read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def find_port(preferred=8765):
    for port in range(preferred, preferred + 20):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(("127.0.0.1", port))
                return port
            except OSError:
                continue
    return 0  # let the OS choose


def main():
    if not os.path.isfile(os.path.join(WEB_DIR, "index.html")):
        print("The web UI is missing (web/index.html). Build the frontend first.")
        return
    port = find_port()
    httpd = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    port = httpd.server_address[1]
    url = f"http://127.0.0.1:{port}"
    print(f"Video Combiner is running at {url}")
    print("Keep this window open while you use the app. Close it when you're done.")
    threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down. You can close this window.")
        httpd.shutdown()


if __name__ == "__main__":
    main()
