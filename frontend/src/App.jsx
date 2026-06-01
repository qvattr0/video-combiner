import { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Chip, ProgressBar } from "@heroui/react";
import {
  Clapperboard,
  FolderOpen,
  Film,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  FolderSearch,
  Sparkles,
  RotateCcw,
} from "lucide-react";

const STATUS = {
  IDLE: "idle",
  PICKING: "picking",
  COMBINING: "combining",
  DONE: "done",
  ERROR: "error",
};

async function api(path, options) {
  const res = await fetch(path, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}

export default function App() {
  const [folder, setFolder] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [outputPath, setOutputPath] = useState("");
  const [error, setError] = useState("");
  const pollRef = useRef(null);

  useEffect(() => () => clearInterval(pollRef.current), []);

  const resetResult = () => {
    setStatus(STATUS.IDLE);
    setProgress(0);
    setMessage("");
    setOutputPath("");
    setError("");
  };

  async function chooseFolder() {
    setError("");
    setStatus(STATUS.PICKING);
    try {
      const data = await api("/api/choose-folder");
      if (data.cancelled) {
        setStatus(STATUS.IDLE);
        return;
      }
      setFolder({ path: data.path, name: data.name, count: data.count });
      setStatus(STATUS.IDLE);
      setProgress(0);
      setOutputPath("");
    } catch (e) {
      setError(e.message);
      setStatus(STATUS.ERROR);
    }
  }

  function startPolling() {
    clearInterval(pollRef.current);
    pollRef.current = setInterval(async () => {
      try {
        const p = await api("/api/progress");
        setProgress(p.percent ?? 0);
        if (p.message) setMessage(p.message);
        if (p.state === "done") {
          clearInterval(pollRef.current);
          setProgress(100);
          setOutputPath(p.output || "");
          setStatus(STATUS.DONE);
        } else if (p.state === "error") {
          clearInterval(pollRef.current);
          setError(p.message || "Something went wrong while combining.");
          setStatus(STATUS.ERROR);
        }
      } catch (e) {
        clearInterval(pollRef.current);
        setError(e.message);
        setStatus(STATUS.ERROR);
      }
    }, 500);
  }

  async function combine() {
    if (!folder) return;
    setError("");
    setProgress(0);
    setMessage("Preparing…");
    setStatus(STATUS.COMBINING);
    try {
      await api("/api/combine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folder: folder.path }),
      });
      startPolling();
    } catch (e) {
      setError(e.message);
      setStatus(STATUS.ERROR);
    }
  }

  async function reveal() {
    try {
      await api(`/api/reveal?path=${encodeURIComponent(outputPath)}`);
    } catch (e) {
      setError(e.message);
    }
  }

  const isCombining = status === STATUS.COMBINING;
  const canCombine = folder && folder.count > 0 && !isCombining;

  return (
    <div className="relative min-h-full overflow-hidden flex items-center justify-center p-6">
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <main className="relative z-10 w-full max-w-xl">
        <header
          className="reveal flex flex-col items-center text-center gap-4 mb-8"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="brand-mark size-[4.5rem] rounded-2xl bg-accent-soft text-accent flex items-center justify-center">
            <Clapperboard className="size-9" strokeWidth={1.6} />
          </div>
          <div className="space-y-2">
            <h1 className="font-display text-[2.75rem] leading-none font-extrabold tracking-tight bg-gradient-to-b from-foreground to-foreground/55 bg-clip-text text-transparent">
              Video Combiner
            </h1>
            <p className="text-muted">Merge a folder of clips into one video.</p>
          </div>
        </header>

        <Card
          className="vc-card reveal rounded-2xl overflow-hidden"
          style={{ animationDelay: "0.18s" }}
        >
          <Card.Content className="flex flex-col gap-5 p-7">
            {/* Primary actions: pick a folder, then combine */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                onPress={chooseFolder}
                isDisabled={isCombining || status === STATUS.PICKING}
                className="flex-1 justify-start min-w-0"
                title={folder ? folder.path : undefined}
              >
                {status === STATUS.PICKING ? (
                  <Loader2 className="size-5 shrink-0 animate-spin text-accent" />
                ) : (
                  <FolderOpen className="size-5 shrink-0 text-accent" />
                )}
                <span className="truncate font-medium">
                  {folder ? folder.name : "Select folder"}
                </span>
              </Button>

              <Button
                variant="primary"
                size="lg"
                onPress={combine}
                isDisabled={!canCombine}
                className="btn-glow shrink-0 font-semibold"
              >
                {isCombining ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <Sparkles className="size-5" />
                )}
                {isCombining ? "Combining…" : "Combine videos"}
              </Button>
            </div>

            {/* Selected-folder summary */}
            {folder && folder.count > 0 && !isCombining && status !== STATUS.DONE && (
              <div className="flex items-center gap-3 min-w-0">
                <Chip color="success" variant="soft" size="sm">
                  <Film className="size-3.5" />
                  <Chip.Label className="font-mono tracking-wide">
                    {folder.count} clip{folder.count === 1 ? "" : "s"}
                  </Chip.Label>
                </Chip>
                <span className="font-mono text-xs text-muted truncate">
                  {folder.path}
                </span>
              </div>
            )}

            {folder && folder.count === 0 && (
              <Alert status="warning">
                <Alert.Indicator>
                  <AlertTriangle className="size-4" />
                </Alert.Indicator>
                <Alert.Content>
                  <Alert.Title>No videos in this folder</Alert.Title>
                  <Alert.Description>
                    Choose a folder that contains .mp4 files.
                  </Alert.Description>
                </Alert.Content>
              </Alert>
            )}

            {/* Progress while combining */}
            {isCombining && (
              <div className="flex flex-col gap-3">
                <div className="flex items-end justify-between">
                  <span className="text-sm text-muted">{message || "Working…"}</span>
                  <span className="font-mono text-2xl font-semibold tabular-nums text-accent leading-none">
                    {String(Math.round(progress)).padStart(2, "0")}
                    <span className="text-base text-muted">%</span>
                  </span>
                </div>
                <ProgressBar value={progress} aria-label="Combining progress">
                  <ProgressBar.Track className="vc-track">
                    <ProgressBar.Fill className="vc-fill" />
                  </ProgressBar.Track>
                </ProgressBar>
              </div>
            )}

            {/* Result */}
            {status === STATUS.DONE && (
              <div className="flex flex-col gap-4">
                <Alert status="success">
                  <Alert.Indicator>
                    <CheckCircle2 className="size-4" />
                  </Alert.Indicator>
                  <Alert.Content>
                    <Alert.Title>Your video is ready</Alert.Title>
                    <Alert.Description className="font-mono text-xs break-all">
                      {outputPath}
                    </Alert.Description>
                  </Alert.Content>
                </Alert>
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onPress={reveal}
                    className="btn-glow flex-1"
                  >
                    <FolderSearch className="size-5" />
                    Show in Finder
                  </Button>
                  <Button variant="outline" size="lg" onPress={resetResult}>
                    <RotateCcw className="size-5" />
                    Start over
                  </Button>
                </div>
              </div>
            )}

            {status === STATUS.ERROR && error && (
              <Alert status="danger">
                <Alert.Indicator>
                  <AlertTriangle className="size-4" />
                </Alert.Indicator>
                <Alert.Content>
                  <Alert.Title>Couldn’t finish</Alert.Title>
                  <Alert.Description className="break-words">{error}</Alert.Description>
                </Alert.Content>
              </Alert>
            )}
          </Card.Content>
        </Card>

        <p
          className="reveal text-center text-xs text-muted/70 mt-6"
          style={{ animationDelay: "0.3s" }}
        >
          Clips are joined in filename order and saved beside the originals.
        </p>
      </main>
    </div>
  );
}
