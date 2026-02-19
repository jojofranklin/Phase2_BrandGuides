"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { Download, Plus, X, Play, Pause } from "lucide-react";

const WORD_H = 72; // height per word slot
const VISIBLE = 3; // show 3 words at a time (prev, current, next)
const TRANSITION_MS = 400; // slide duration in ms

function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9\s*]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Underscore proportions from Figma (matching phase2-generator)
const UNDERSCORE = {
  height: "0.114em",
  width: "0.605em",
  gap: "0.127em",
  drop: "0.025em",
};

const GRADIENT = "linear-gradient(90deg, #9AE4FF 21%, #14A3D6 51%, #1A386F 100%)";

const defaultWords = ["HasGrit", "ShipsWork", "GivesAShit", "BuildsTrust", "MakesItReal"];

const bgOptions = [
  { label: "Abyss", value: "#00233A" },
  { label: "Indigo", value: "#1A3B6F" },
  { label: "Pine", value: "#1F4E52" },
];

export function RolodexBuilder() {
  const [words, setWords] = useState<string[]>(defaultWords);
  const [input, setInput] = useState("");
  const [speed, setSpeed] = useState(1.5); // seconds per word (pause)
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [bgColor, setBgColor] = useState("#00233A");
  const previewRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Animation state
  const [step, setStep] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  const addWord = useCallback(() => {
    const camel = toCamelCase(input);
    if (camel && !words.includes(camel)) {
      setWords((prev) => [...prev, camel]);
      setInput("");
    }
  }, [input, words]);

  const removeWord = useCallback(
    (index: number) => {
      setWords((prev) => prev.filter((_, i) => i !== index));
      setStep(0);
    },
    []
  );

  // Build display list: prepend last word + append first two words for seamless loop
  // This ensures we always have words above and below the current one
  const displayWords = useMemo(() => {
    if (words.length < 2) return words;
    return [words[words.length - 1], ...words, words[0], words[1]];
  }, [words]);

  // Auto-advance timer
  useEffect(() => {
    if (!isPlaying || words.length < 2) return;
    const id = setInterval(() => {
      setStep((prev) => prev + 1);
    }, speed * 1000);
    return () => clearInterval(id);
  }, [isPlaying, speed, words.length]);

  // Seamless loop reset: when step reaches words.length, we're showing the
  // appended duplicate of word[0]. Snap back to step=0 without transition.
  useEffect(() => {
    if (step < words.length || words.length < 2) return;
    const timeout = setTimeout(() => {
      setEnableTransition(false);
      setStep(0);
      // Re-enable transition after browser paints the reset position
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }, TRANSITION_MS + 50);
    return () => clearTimeout(timeout);
  }, [step, words.length]);

  // translateY: center the current word in the viewport.
  // displayWords[0] = last word (dup), displayWords[1] = words[0], etc.
  // For step=0, we want displayWords[1] (words[0]) in the CENTER slot.
  // The center slot is at y = 1 * WORD_H from the viewport top.
  // displayWords[step + 1] should be at y = WORD_H.
  // Its natural y = (step + 1) * WORD_H.
  // So translateY = WORD_H - (step + 1) * WORD_H = -(step * WORD_H)
  const translateY = -(step * WORD_H);
  const viewportH = VISIBLE * WORD_H;

  // GIF export
  const exportGif = useCallback(async () => {
    if (!previewRef.current || !trackRef.current || words.length < 2) return;
    setIsExporting(true);
    setIsPlaying(false);

    try {
      const { toPng } = await import("html-to-image");
      const GifJs = (await import("gif.js")).default;

      const el = previewRef.current;
      const track = trackRef.current;

      const gif = new GifJs({
        workers: 2,
        quality: 10,
        width: el.offsetWidth * 2,
        height: el.offsetHeight * 2,
        workerScript: "/gif.worker.js",
      });

      // Save original styles
      const origTransition = track.style.transition;
      const origTransform = track.style.transform;
      track.style.transition = "none";

      const framesPerWord = 10; // 7 hold + 3 slide
      const holdFrames = 7;

      for (let w = 0; w < words.length; w++) {
        for (let f = 0; f < framesPerWord; f++) {
          let ty: number;
          if (f < holdFrames) {
            // Hold on current word
            ty = -(w * WORD_H);
          } else {
            // Slide to next word
            const t = (f - holdFrames) / (framesPerWord - holdFrames);
            ty = -(w * WORD_H) - t * WORD_H;
          }
          track.style.transform = `translateY(${ty}px)`;

          await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

          const dataUrl = await toPng(el, { pixelRatio: 2, cacheBust: true });
          const img = new Image();
          await new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.src = dataUrl;
          });

          gif.addFrame(img, {
            delay: f < holdFrames
              ? Math.round((speed * 1000) / holdFrames)
              : Math.round(TRANSITION_MS / (framesPerWord - holdFrames)),
            copy: true,
          });
        }
      }

      // Restore styles
      track.style.transition = origTransition;
      track.style.transform = origTransform;

      const blob: Blob = await new Promise((resolve) => {
        gif.on("finished", resolve);
        gif.render();
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "Phase2_Rolodex.gif";
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("GIF export failed:", err);
    } finally {
      setIsExporting(false);
      setIsPlaying(true);
    }
  }, [words, speed]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 space-y-4">
        {/* Add word input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addWord()}
            placeholder="Add a word..."
            className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyan/50"
          />
          <button
            onClick={addWord}
            className="flex items-center gap-1 rounded-md bg-cyan px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan/80"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>

        {/* Word chips */}
        <div className="flex flex-wrap gap-2">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground"
            >
              {word}
              <button
                onClick={() => removeWord(i)}
                className="rounded-full p-0.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>

        {/* Speed, BG, play/pause */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">
              Speed
            </label>
            <input
              type="range"
              min={0.5}
              max={3}
              step={0.25}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-24 accent-cyan"
            />
            <span className="text-xs text-muted-foreground font-mono w-10">
              {speed}s
            </span>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground">BG</label>
            <div className="flex rounded-lg bg-secondary p-1">
              {bgOptions.map((b) => (
                <button
                  key={b.value}
                  onClick={() => setBgColor(b.value)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                    bgColor === b.value
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
          >
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      {/* Preview — 16:9 aspect ratio */}
      <div
        ref={previewRef}
        className="relative rounded-xl border border-border overflow-hidden"
        style={{ backgroundColor: bgColor, aspectRatio: "16 / 9" }}
      >
        {/* Centered lockup */}
        <div className="absolute inset-0 flex items-center justify-center px-10">
          {/* Phase2 + underscore (fixed) */}
          <span
            className="inline-flex items-end shrink-0"
            style={{ gap: UNDERSCORE.gap, fontSize: "3rem" }}
          >
            <span className="font-heading font-bold leading-none tracking-tight text-white">
              Phase2
            </span>
            <span
              className="inline-block shrink-0"
              style={{
                width: UNDERSCORE.width,
                height: UNDERSCORE.height,
                marginBottom: `-${UNDERSCORE.drop}`,
                background: GRADIENT,
              }}
            />
          </span>

          {/* Rolodex viewport */}
          <div
            className="relative overflow-hidden ml-1"
            style={{ height: viewportH, width: "auto", maxWidth: "60%" }}
          >
            {/* Top gradient mask */}
            <div
              className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
              style={{
                height: WORD_H,
                background: `linear-gradient(to bottom, ${bgColor}, ${bgColor}00)`,
              }}
            />
            {/* Bottom gradient mask */}
            <div
              className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
              style={{
                height: WORD_H,
                background: `linear-gradient(to top, ${bgColor}, ${bgColor}00)`,
              }}
            />

            {/* Scrolling track */}
            <div
              ref={trackRef}
              style={{
                transform: `translateY(${translateY}px)`,
                transition: enableTransition
                  ? `transform ${TRANSITION_MS}ms ease-in-out`
                  : "none",
              }}
            >
              {displayWords.map((word, i) => (
                <div
                  key={`${word}-${i}`}
                  className="flex items-center"
                  style={{ height: WORD_H }}
                >
                  <span
                    className="font-heading text-5xl font-bold leading-none tracking-tight whitespace-nowrap"
                    style={{ color: "#14A3D6" }}
                  >
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Export */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {words.length} word{words.length !== 1 ? "s" : ""} &middot;{" "}
          {(words.length * speed).toFixed(1)}s per cycle
        </p>
        <button
          onClick={exportGif}
          disabled={isExporting || words.length < 2}
          className="flex items-center gap-2 rounded-lg bg-abyss px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          {isExporting ? "Rendering GIF..." : "Export GIF"}
        </button>
      </div>
    </div>
  );
}
