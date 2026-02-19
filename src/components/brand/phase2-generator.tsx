"use client";

import { useState, useRef, useCallback } from "react";
import { Download } from "lucide-react";

type BgOption = {
  label: string;
  value: string;
  textColor: string;
  underscoreWhite?: boolean;
};

const backgrounds: BgOption[] = [
  { label: "Abyss", value: "#00233A", textColor: "#FFFFFF" },
  { label: "White", value: "#FFFFFF", textColor: "#00233A" },
  { label: "Slate", value: "#F1F5F9", textColor: "#00233A" },
  { label: "Indigo", value: "#1A3B6F", textColor: "#FFFFFF" },
  { label: "Gradient", value: "gradient", textColor: "#FFFFFF", underscoreWhite: true },
  { label: "Transparent", value: "transparent", textColor: "#00233A" },
];

function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9\s*]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Underscore proportions derived from Figma (node 1520:1421):
// At 228px font-size: underscore 137.88×26.016, gap ~29px, drop ~5.7px
const UNDERSCORE = {
  height: "0.114em",
  width: "0.605em",
  gap: "0.127em",
  drop: "0.025em",
};

const GRADIENT = "linear-gradient(90deg, #9AE4FF 21%, #14A3D6 51%, #1A386F 100%)";

export function Phase2Generator() {
  const [suffix, setSuffix] = useState("HasGrit");
  const [bgIndex, setBgIndex] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const bg = backgrounds[bgIndex];
  const camelSuffix = suffix ? toCamelCase(suffix) : "";
  const isTransparent = bg.value === "transparent";

  const backgroundStyle =
    bg.value === "gradient"
      ? { background: "linear-gradient(135deg, #9AE4FF, #14A3D6, #1A386F)" }
      : bg.value === "transparent"
        ? { background: "transparent" }
        : { backgroundColor: bg.value };

  const exportPng = useCallback(async () => {
    if (!previewRef.current) return;
    setIsExporting(true);
    try {
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(previewRef.current, {
        pixelRatio: 3,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `Phase2_${camelSuffix || "Custom"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setIsExporting(false);
    }
  }, [camelSuffix]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <input
          type="text"
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
          placeholder="Type a word..."
          className="flex-1 min-w-[200px] rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyan/50"
        />

        <div className="flex flex-wrap rounded-lg bg-secondary p-1">
          {backgrounds.map((b, i) => (
            <button
              key={b.label}
              onClick={() => setBgIndex(i)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
                bgIndex === i
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* Live preview — outer wrapper for checkerboard on transparent */}
      <div
        className="rounded-xl border border-border overflow-hidden"
        style={
          isTransparent
            ? {
                backgroundImage:
                  "linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
              }
            : undefined
        }
      >
        <div
          ref={previewRef}
          className="flex items-center justify-center p-12"
          style={{ ...backgroundStyle, aspectRatio: "16 / 9" }}
        >
          {/* Wordmark lockup */}
          <span className="inline-flex items-end" style={{ gap: UNDERSCORE.gap, fontSize: "3rem" }}>
            {/* Phase2 text */}
            <span
              className="font-heading font-bold leading-none tracking-tight"
              style={{ color: bg.textColor }}
            >
              Phase2
            </span>

            {/* Gradient underscore bar */}
            <span
              className="inline-block shrink-0"
              style={{
                width: UNDERSCORE.width,
                height: UNDERSCORE.height,
                marginBottom: `-${UNDERSCORE.drop}`,
                background: bg.underscoreWhite ? "#FFFFFF" : GRADIENT,
              }}
            />

            {/* Suffix */}
            {camelSuffix && (
              <span
                className="font-heading font-bold leading-none tracking-tight"
                style={{ color: "#14A3D6" }}
              >
                {camelSuffix}
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Export */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground font-mono">
          Phase2_{camelSuffix || "___"}
        </p>
        <button
          onClick={exportPng}
          disabled={isExporting}
          className="flex items-center gap-2 rounded-lg bg-abyss px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          {isExporting ? "Exporting..." : "Export PNG"}
        </button>
      </div>
    </div>
  );
}
