# 🎬 Video Combiner

A dead-simple macOS app that merges a folder of video clips (e.g. lots of 10‑second
`.mp4` files) into one single video. Built for non‑technical users: **double‑click,
pick a folder, click one button.**

## How to use it

1. **Double‑click `Combine Videos.command`.**
   - The first time, it spends a moment installing what it needs (no passwords
     required). After that it starts instantly.
   - Your web browser opens automatically to the app.
2. Click **Select folder…** and choose the folder that holds your videos.
3. Click **Combine videos** and wait for the progress bar to finish.
4. Click **Show in Finder** to find the result — a file named `combined.mp4`
   saved inside the same folder.

That's it. You can close the small Terminal window when you're done.

> First launch only: macOS may show a dialog asking to install "developer tools"
> (this provides Python). Click **Install**, let it finish, then open the app again.

## What it does under the hood

- **Frontend:** a small React UI built with [HeroUI v3](https://www.heroui.com/)
  and [Lucide](https://lucide.dev/) icons. It's pre‑built into `web/`, so nothing
  needs to be installed to run it.
- **Backend:** `server.py`, a tiny local web server using only the Python
  standard library. It uses a native macOS folder picker and runs `ffmpeg`.
- **Combining:**
  - If every clip shares the same format/resolution, it joins them **losslessly**
    in seconds (no re‑encoding).
  - If the clips differ, it automatically re‑encodes them to a common format so
    the result always plays. Clips are joined in filename order.
- **ffmpeg/ffprobe:** static builds are downloaded once into `bin/` on first run
  (Apple Silicon or Intel detected automatically). If you already have ffmpeg
  installed, that's used instead.

## For developers

The UI source lives in `frontend/`. To change it:

```bash
cd frontend
npm install
npm run dev      # live preview at http://localhost:5173 (API calls need the server running)
npm run build    # rebuilds ../web that the app serves
```

To run the backend directly:

```bash
python3 server.py
```

### Project layout

```
Combine Videos.command   # double-click launcher (installs tools, starts server)
server.py                # local web server + ffmpeg logic (stdlib only)
web/                      # pre-built UI served by the server (committed)
frontend/                 # React + HeroUI v3 source for the UI
bin/                      # ffmpeg/ffprobe, downloaded on first run (gitignored)
```

## Requirements

- macOS (Apple Silicon or Intel)
- An internet connection on first launch (to fetch ffmpeg)
