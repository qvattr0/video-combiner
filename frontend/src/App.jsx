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

  const canCombine = folder && folder.count > 0 && status !== STATUS.COMBINING;

  return (
    <div className="min-h-full bg-gradient-to-b from-background to-background-secondary flex items-center justify-center p-6 text-foreground">
      <div className="w-full max-w-xl">
        <header className="flex flex-col items-center text-center gap-3 mb-8">
          <div className="size-16 rounded-3xl bg-accent-soft text-accent flex items-center justify-center shadow-sm">
            <Clapperboard className="size-8" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Video Combiner</h1>
            <p className="text-muted mt-1">
              Merge a folder of clips into one video — in one click.
            </p>
          </div>
        </header>

        <Card className="shadow-lg">
          <Card.Content className="flex flex-col gap-6 p-6">
            {/* Step 1: choose a folder */}
            <section className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="size-6 rounded-full bg-surface-secondary flex items-center justify-center text-xs font-semibold">
                  1
                </span>
                Choose a folder of videos
              </div>

              <Button
                variant="outline"
                size="lg"
                onPress={chooseFolder}
                isDisabled={status === STATUS.COMBINING || status === STATUS.PICKING}
                className="justify-start h-auto py-4"
              >
                {status === STATUS.PICKING ? (
                  <Loader2 className="size-5 shrink-0 animate-spin" />
                ) : (
                  <FolderOpen className="size-5 shrink-0" />
                )}
                <span className="flex flex-col items-start text-left">
                  <span className="font-medium">
                    {folder ? folder.name : "Select folder…"}
                  </span>
                  <span className="text-xs text-muted font-normal truncate max-w-[22rem]">
                    {folder
                      ? folder.path
                      : "Pick the folder that holds your .mp4 clips"}
                  </span>
                </span>
              </Button>

              {folder && folder.count > 0 && (
                <div className="flex items-center gap-2">
                  <Chip color="success" variant="soft" size="sm">
                    <Film className="size-3.5" />
                    <Chip.Label>
                      {folder.count} video{folder.count === 1 ? "" : "s"} found
                    </Chip.Label>
                  </Chip>
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
            </section>

            <div className="h-px bg-separator" />

            {/* Step 2: combine */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="size-6 rounded-full bg-surface-secondary flex items-center justify-center text-xs font-semibold">
                  2
                </span>
                Combine into one video
              </div>

              {status === STATUS.COMBINING ? (
                <div className="flex flex-col gap-3">
                  <ProgressBar value={progress} aria-label="Combining progress" color="accent">
                    <ProgressBar.Track>
                      <ProgressBar.Fill />
                    </ProgressBar.Track>
                  </ProgressBar>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Loader2 className="size-4 animate-spin" />
                    <span>{message || "Working…"}</span>
                    <span className="ml-auto tabular-nums font-medium text-foreground">
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>
              ) : status === STATUS.DONE ? (
                <div className="flex flex-col gap-4">
                  <Alert status="success">
                    <Alert.Indicator>
                      <CheckCircle2 className="size-4" />
                    </Alert.Indicator>
                    <Alert.Content>
                      <Alert.Title>Your video is ready</Alert.Title>
                      <Alert.Description className="break-all">
                        {outputPath}
                      </Alert.Description>
                    </Alert.Content>
                  </Alert>
                  <div className="flex gap-3">
                    <Button variant="primary" size="lg" onPress={reveal} className="flex-1">
                      <FolderSearch className="size-5" />
                      Show in Finder
                    </Button>
                    <Button variant="outline" size="lg" onPress={resetResult}>
                      <RotateCcw className="size-5" />
                      Start over
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
                  onPress={combine}
                  isDisabled={!canCombine}
                  className="h-14 text-base"
                >
                  <Sparkles className="size-5" />
                  Combine videos
                </Button>
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
            </section>
          </Card.Content>
        </Card>

        <p className="text-center text-xs text-muted mt-6">
          Clips are joined in filename order. The combined file is saved inside the
          same folder.
        </p>
      </div>
    </div>
  );
}
