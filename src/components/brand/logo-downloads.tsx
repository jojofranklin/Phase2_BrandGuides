"use client";

import { Download } from "lucide-react";

const GRADIENT = "linear-gradient(90deg, #9AE4FF 21%, #14A3D6 51%, #1A386F 100%)";

// Underscore proportions from Figma
const U = {
  height: "0.114em",
  width: "0.605em",
  gap: "0.127em",
  drop: "0.025em",
};

type LogoVariant = {
  name: string;
  file: string;
  description: string;
  darkCard: boolean;
  textColor: string;
  underscoreFill: string;
  isIcon?: boolean;
};

const wordmarks: LogoVariant[] = [
  {
    name: "Gradient — Light BG",
    file: "Phase2_WordmarkGradientLightBG.svg",
    description: "Gradient underscore on light backgrounds",
    darkCard: false,
    textColor: "#00233A",
    underscoreFill: GRADIENT,
  },
  {
    name: "Gradient — Dark BG",
    file: "Phase2_WordmarkGradientDarkBG.svg",
    description: "Gradient underscore on dark backgrounds",
    darkCard: true,
    textColor: "#FFFFFF",
    underscoreFill: GRADIENT,
  },
  {
    name: "Solid Cyan — Light BG",
    file: "Phase2_WordmarkSolidCyanLightBG.svg",
    description: "Pulse_BoldCyan flat underscore, light",
    darkCard: false,
    textColor: "#00233A",
    underscoreFill: "#14A3D6",
  },
  {
    name: "Solid Cyan — Dark BG",
    file: "Phase2_WordmarkSolidCyanDarkBG.svg",
    description: "Pulse_BoldCyan flat underscore, dark",
    darkCard: true,
    textColor: "#FFFFFF",
    underscoreFill: "#14A3D6",
  },
  {
    name: "Mono — Light BG",
    file: "Phase2_WordmarkMonoLightBG.svg",
    description: "Single-color wordmark, light",
    darkCard: false,
    textColor: "#00233A",
    underscoreFill: "#00233A",
  },
  {
    name: "Mono — Dark BG",
    file: "Phase2_WordmarkMonoDarkBG.svg",
    description: "Single-color wordmark, dark",
    darkCard: true,
    textColor: "#FFFFFF",
    underscoreFill: "#FFFFFF",
  },
];

const icons: LogoVariant[] = [
  {
    name: "Icon Gradient — Light",
    file: "Phase2_IconGradientLightBG.svg",
    description: "P2_ compact mark, gradient, light",
    darkCard: false,
    textColor: "#00233A",
    underscoreFill: GRADIENT,
    isIcon: true,
  },
  {
    name: "Icon Gradient — Dark",
    file: "Phase2_IconGradientDarkBG.svg",
    description: "P2_ compact mark, gradient, dark",
    darkCard: true,
    textColor: "#FFFFFF",
    underscoreFill: GRADIENT,
    isIcon: true,
  },
  {
    name: "Icon Cyan — Light",
    file: "Phase2_IconSolidCyanLightBG.svg",
    description: "P2_ compact mark, solid cyan, light",
    darkCard: false,
    textColor: "#00233A",
    underscoreFill: "#14A3D6",
    isIcon: true,
  },
  {
    name: "Icon Cyan — Dark",
    file: "Phase2_IconSolidCyanDarkBG.svg",
    description: "P2_ compact mark, solid cyan, dark",
    darkCard: true,
    textColor: "#FFFFFF",
    underscoreFill: "#14A3D6",
    isIcon: true,
  },
  {
    name: "Icon Mono — Light",
    file: "Phase2_IconMonoLightBG.svg",
    description: "P2_ compact mark, mono, light",
    darkCard: false,
    textColor: "#00233A",
    underscoreFill: "#00233A",
    isIcon: true,
  },
  {
    name: "Icon Mono — Dark",
    file: "Phase2_IconMonoDarkBG.svg",
    description: "P2_ compact mark, mono, dark",
    darkCard: true,
    textColor: "#FFFFFF",
    underscoreFill: "#FFFFFF",
    isIcon: true,
  },
];

function downloadFile(filename: string) {
  const link = document.createElement("a");
  link.href = `/logos/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadAll() {
  [...wordmarks, ...icons].forEach((logo, i) => {
    setTimeout(() => downloadFile(logo.file), i * 200);
  });
}

function LogoPreview({ logo }: { logo: LogoVariant }) {
  const text = logo.isIcon ? "P2" : "Phase2";
  const fontSize = logo.isIcon ? "1.75rem" : "1.5rem";

  return (
    <span
      className="inline-flex items-end"
      style={{ gap: U.gap, fontSize }}
    >
      <span
        className="font-heading font-bold leading-none tracking-tight"
        style={{ color: logo.textColor }}
      >
        {text}
      </span>
      <span
        className="inline-block shrink-0"
        style={{
          width: U.width,
          height: U.height,
          marginBottom: `-${U.drop}`,
          background: logo.underscoreFill,
        }}
      />
    </span>
  );
}

function LogoCard({ logo }: { logo: LogoVariant }) {
  return (
    <button
      onClick={() => downloadFile(logo.file)}
      className="group relative rounded-xl border border-border overflow-hidden text-left transition-all hover:border-cyan/50 hover:shadow-lg"
    >
      {/* CSS-rendered preview */}
      <div
        className={`flex items-center justify-center p-6 h-32 ${
          logo.darkCard ? "bg-abyss" : "bg-secondary"
        }`}
      >
        <LogoPreview logo={logo} />
      </div>

      {/* Info */}
      <div className="p-3 bg-card">
        <div className="flex items-center justify-between">
          <p className="font-heading text-xs font-semibold text-foreground">
            {logo.name}
          </p>
          <Download className="h-3.5 w-3.5 text-muted-foreground group-hover:text-cyan transition-colors" />
        </div>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          {logo.description}
        </p>
      </div>
    </button>
  );
}

export function LogoDownloads() {
  return (
    <div>
      {/* Wordmarks */}
      <h3 className="font-heading text-sm font-semibold text-foreground mb-4">
        Wordmark<span className="text-cyan">_</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {wordmarks.map((logo) => (
          <LogoCard key={logo.file} logo={logo} />
        ))}
      </div>

      {/* Icons */}
      <h3 className="font-heading text-sm font-semibold text-foreground mb-4">
        Icon P2<span className="text-cyan">_</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {icons.map((logo) => (
          <LogoCard key={logo.file} logo={logo} />
        ))}
      </div>

      {/* Download All */}
      <button
        onClick={downloadAll}
        className="flex items-center gap-2 rounded-lg bg-abyss px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo"
      >
        <Download className="h-4 w-4" />
        Download All SVGs
      </button>

      <p className="mt-3 text-xs text-muted-foreground">
        Export SVGs from Figma and drop them into{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-mono">
          /public/logos/
        </code>{" "}
        using the naming convention above.
      </p>
    </div>
  );
}
