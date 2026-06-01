#!/bin/bash
# Video Combiner — double-click launcher for macOS.
# On first run this installs the tools it needs (ffmpeg/ffprobe), then it starts
# a small local app and opens it in your web browser. Later runs start instantly.

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR" || exit 1

BIN="$DIR/bin"
mkdir -p "$BIN"

clear
echo "============================================"
echo "            🎬  Video Combiner"
echo "============================================"
echo

pause_and_exit() {
  echo
  read -r -p "Press Return to close this window…" _
  exit "${1:-1}"
}

# 1) Make sure python3 is available (ships with Apple's developer tools).
if ! command -v python3 >/dev/null 2>&1; then
  echo "One-time setup: installing Apple developer tools…"
  echo "A macOS window may pop up. Click \"Install\" and wait for it to finish."
  xcode-select --install >/dev/null 2>&1 || true
  echo
  echo "When the installer is done, please open this app again."
  pause_and_exit 1
fi

# 2) Make sure ffmpeg + ffprobe are available (downloaded once into ./bin).
case "$(uname -m)" in
  arm64)  RARCH="arm64" ;;
  x86_64) RARCH="amd64" ;;
  *)      RARCH="amd64" ;;
esac

install_tool() {
  local name="$1"
  [ -x "$BIN/$name" ] && return 0

  echo "One-time setup: downloading $name (about 30 MB)…"
  local url="https://ffmpeg.martin-riedl.de/redirect/latest/macos/$RARCH/release/$name.zip"
  local tmp
  tmp="$(mktemp -d)"

  if curl -fsSL -o "$tmp/$name.zip" "$url" && unzip -oq "$tmp/$name.zip" -d "$tmp" && [ -f "$tmp/$name" ]; then
    mv "$tmp/$name" "$BIN/$name"
    chmod +x "$BIN/$name"
    xattr -c "$BIN/$name" 2>/dev/null || true
    codesign -s - -f "$BIN/$name" >/dev/null 2>&1 || true
  fi
  rm -rf "$tmp"

  if [ ! -x "$BIN/$name" ]; then
    if command -v "$name" >/dev/null 2>&1; then
      echo "Using the $name already installed on this Mac."
      return 0
    fi
    echo
    echo "Couldn't download $name. Please check your internet connection and try again."
    pause_and_exit 1
  fi
}

install_tool ffmpeg
install_tool ffprobe

# 3) Launch the app (this opens your browser automatically).
echo
echo "Starting the app… your browser will open in a moment."
echo "Keep this window open while you use Video Combiner."
echo
exec python3 "$DIR/server.py"
