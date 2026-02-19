"use client";

import { useState } from "react";

type Weight = {
  label: string;
  weight: string;
  className: string;
};

type TypeSpecimenProps = {
  fontClass: string;
  weights: Weight[];
};

export function TypeSpecimen({ fontClass, weights }: TypeSpecimenProps) {
  const [sampleText, setSampleText] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  const [activeSize, setActiveSize] = useState("text-4xl");

  const sizes = [
    { label: "SM", value: "text-lg" },
    { label: "MD", value: "text-2xl" },
    { label: "LG", value: "text-4xl" },
    { label: "XL", value: "text-6xl" },
  ];

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <input
          type="text"
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
          className="flex-1 min-w-[200px] rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyan/50"
          placeholder="Type to preview..."
        />
        <div className="flex rounded-lg bg-secondary p-1">
          {sizes.map((s) => (
            <button
              key={s.value}
              onClick={() => setActiveSize(s.value)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
                activeSize === s.value
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Weight specimens */}
      <div className="space-y-0">
        {weights.map((w) => (
          <div
            key={w.label}
            className="flex items-baseline gap-6 border-t border-border py-6"
          >
            <div className="w-28 shrink-0">
              <p className="text-xs font-semibold text-foreground">{w.label}</p>
              <p className="text-[10px] text-muted-foreground font-mono">{w.weight}</p>
            </div>
            <p
              className={`${fontClass} ${w.className} ${activeSize} tracking-tight leading-tight text-foreground truncate`}
            >
              {sampleText || "Phase2_"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
