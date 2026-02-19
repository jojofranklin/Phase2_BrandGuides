"use client";

import { useState, useRef, useCallback } from "react";
import { Download } from "lucide-react";

const brandColors = [
  { name: "Abyss", hex: "#00233A" },
  { name: "Blueprint", hex: "#1A386F" },
  { name: "Pulse", hex: "#14A3D6" },
  { name: "Clarity", hex: "#9AE4FF" },
  { name: "Coral", hex: "#F5543A" },
  { name: "Pine", hex: "#1F4E52" },
];

const directions = [
  { label: "→", value: "to right", css: "90deg" },
  { label: "←", value: "to left", css: "270deg" },
  { label: "↓", value: "to bottom", css: "180deg" },
  { label: "↗", value: "to top right", css: "45deg" },
  { label: "↘", value: "to bottom right", css: "135deg" },
  { label: "◎", value: "radial", css: "radial" },
];

export function GradientBuilder() {
  const [selected, setSelected] = useState<string[]>(["#00233A", "#14A3D6", "#9AE4FF"]);
  const [direction, setDirection] = useState(directions[0]);
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const toggleColor = (hex: string) => {
    if (selected.includes(hex)) {
      if (selected.length > 2) {
        setSelected(selected.filter((c) => c !== hex));
      }
    } else {
      if (selected.length < 4) {
        setSelected([...selected, hex]);
      }
    }
  };

  const gradientCSS =
    direction.css === "radial"
      ? `radial-gradient(circle, ${selected.join(", ")})`
      : `linear-gradient(${direction.css}, ${selected.join(", ")})`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`background: ${gradientCSS};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
      link.download = "Phase2_Gradient.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setIsExporting(false);
    }
  }, []);

  return (
    <div>
      {/* Live preview — 16:9 */}
      <div
        ref={previewRef}
        className="w-full rounded-xl border border-border transition-all duration-300"
        style={{ background: gradientCSS, aspectRatio: "16 / 9" }}
      />

      {/* Controls */}
      <div className="mt-6 flex flex-wrap gap-6">
        {/* Color picker */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Colors (pick 2–4)
          </p>
          <div className="flex gap-2">
            {brandColors.map((c) => (
              <button
                key={c.hex}
                onClick={() => toggleColor(c.hex)}
                className={`group relative w-10 h-10 rounded-lg border-2 transition-all ${
                  selected.includes(c.hex)
                    ? "border-foreground scale-110 shadow-md"
                    : "border-border opacity-50 hover:opacity-80"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              >
                {selected.includes(c.hex) && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[8px] font-bold text-background">
                    {selected.indexOf(c.hex) + 1}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Direction picker */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Direction
          </p>
          <div className="flex gap-1">
            {directions.map((d) => (
              <button
                key={d.value}
                onClick={() => setDirection(d)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                  direction.value === d.value
                    ? "bg-card text-foreground shadow-sm border border-border"
                    : "text-muted-foreground hover:text-foreground bg-secondary"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CSS output + export */}
      <div className="mt-6 flex items-center gap-3">
        <code className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-xs font-mono text-foreground overflow-x-auto">
          background: {gradientCSS};
        </code>
        <button
          onClick={handleCopy}
          className="shrink-0 rounded-lg bg-cyan px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-cyan/90"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <button
          onClick={exportPng}
          disabled={isExporting}
          className="flex items-center gap-1.5 shrink-0 rounded-lg bg-abyss px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-indigo disabled:opacity-50"
        >
          <Download className="h-3.5 w-3.5" />
          {isExporting ? "Exporting..." : "PNG"}
        </button>
      </div>
    </div>
  );
}
