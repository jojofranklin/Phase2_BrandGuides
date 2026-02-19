"use client";

import { useState } from "react";

type HueStep = {
  hex: string;
  label?: string;
};

type HueScaleProps = {
  name: string;
  description: string;
  baseHex: string;
  steps: HueStep[];
  baseIndex: number;
};

export function HueScale({ name, description, baseHex, steps, baseIndex }: HueScaleProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1200);
  };

  return (
    <div>
      {/* Header row: swatch + name */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-10 h-10 rounded-lg border border-border shrink-0"
          style={{ backgroundColor: baseHex }}
        />
        <div>
          <p className="font-heading text-sm font-semibold text-foreground">
            {name}
          </p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Hue strip */}
      <div className="grid grid-cols-11 gap-0.5">
        {steps.map((step, i) => (
          <button
            key={step.hex + i}
            onClick={() => handleCopy(step.hex)}
            className="group relative"
            title={`Copy ${step.hex}`}
          >
            <div
              className={`h-10 rounded-sm transition-transform group-hover:scale-y-125 ${
                i === baseIndex ? "ring-2 ring-cyan ring-offset-1 ring-offset-background" : ""
              }`}
              style={{ backgroundColor: step.hex }}
            />
            <p className={`mt-1.5 text-[9px] font-mono text-center truncate ${
              i === baseIndex
                ? "font-bold text-foreground"
                : "text-muted-foreground"
            }`}>
              {copiedHex === step.hex
                ? "Copied!"
                : i === baseIndex
                  ? "BASE"
                  : step.hex.toUpperCase()}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
