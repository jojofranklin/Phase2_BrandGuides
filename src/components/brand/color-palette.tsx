"use client";

import { useState } from "react";

type ColorInfo = {
  name: string;
  hex: string;
  token: string;
  cssVar: string;
  tailwind: string;
  description: string;
};

type ColorPaletteProps = {
  colors: ColorInfo[];
};

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {colors.map((color) => (
        <ColorCard key={color.token} color={color} />
      ))}
    </div>
  );
}

function ColorCard({ color }: { color: ColorInfo }) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const tokens = [
    { label: "HEX", value: color.hex },
    { label: "CSS Variable", value: `var(${color.cssVar})` },
    { label: "Tailwind", value: color.tailwind },
    { label: "Token", value: color.token },
  ];

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md">
      {/* Color Preview */}
      <div
        className="h-28 w-full"
        style={{ backgroundColor: color.hex }}
      />

      {/* Info */}
      <div className="p-4">
        <div className="mb-1 flex items-baseline justify-between">
          <h3 className="font-heading text-sm font-semibold">{color.name}</h3>
          <span className="text-xs text-muted-foreground">{color.hex}</span>
        </div>
        <p className="mb-3 text-xs text-muted-foreground">
          {color.description}
        </p>

        {/* Copyable Tokens */}
        <div className="space-y-1.5">
          {tokens.map((t) => (
            <button
              key={t.label}
              onClick={() => copyToClipboard(t.value, t.label)}
              className="flex w-full items-center justify-between rounded-md bg-secondary px-2.5 py-1.5 text-left text-xs transition-colors hover:bg-secondary/80"
            >
              <span className="text-muted-foreground">{t.label}</span>
              <span className="font-mono text-foreground">
                {copied === t.label ? "Copied!" : t.value}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
