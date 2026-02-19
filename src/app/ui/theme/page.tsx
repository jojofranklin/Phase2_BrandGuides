"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="rounded-md bg-cyan px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan/90"
    >
      {copied ? "Copied!" : "Copy CSS"}
    </button>
  );
}

const brandTokens = [
  { name: "--abyss", value: "#00233A", label: "Abyss" },
  { name: "--indigo", value: "#1A3B6F", label: "Indigo" },
  { name: "--cyan", value: "#16A3D6", label: "Cyan" },
  { name: "--ice", value: "#9AE4FF", label: "Ice" },
  { name: "--coral", value: "#F5543A", label: "Coral" },
  { name: "--pine", value: "#1F4E52", label: "Pine" },
];

const semanticTokens = [
  { name: "--background", light: "#FAFBFC", dark: "#001220" },
  { name: "--foreground", light: "#00233A", dark: "#E8F4FA" },
  { name: "--card", light: "#FFFFFF", dark: "#00233A" },
  { name: "--card-foreground", light: "#00233A", dark: "#E8F4FA" },
  { name: "--primary", light: "#00233A", dark: "#9AE4FF" },
  { name: "--primary-foreground", light: "#FFFFFF", dark: "#00233A" },
  { name: "--secondary", light: "#F0F4F8", dark: "#0A2E47" },
  { name: "--secondary-foreground", light: "#00233A", dark: "#E8F4FA" },
  { name: "--muted", light: "#F0F4F8", dark: "#0A2E47" },
  { name: "--muted-foreground", light: "#5A6B7B", dark: "#7BA3BE" },
  { name: "--accent", light: "#16A3D6", dark: "#16A3D6" },
  { name: "--accent-foreground", light: "#FFFFFF", dark: "#FFFFFF" },
  { name: "--destructive", light: "#F5543A", dark: "#F5543A" },
  { name: "--border", light: "#E2E8F0", dark: "#143350" },
  { name: "--input", light: "#E2E8F0", dark: "#143350" },
  { name: "--ring", light: "#16A3D6", dark: "#16A3D6" },
];

const fullThemeCSS = `:root {
  --abyss: #00233A;
  --indigo: #1A3B6F;
  --cyan: #16A3D6;
  --ice: #9AE4FF;
  --coral: #F5543A;
  --pine: #1F4E52;

  --radius: 0.625rem;
  --background: #FAFBFC;
  --foreground: #00233A;
  --card: #FFFFFF;
  --card-foreground: #00233A;
  --popover: #FFFFFF;
  --popover-foreground: #00233A;
  --primary: #00233A;
  --primary-foreground: #FFFFFF;
  --secondary: #F0F4F8;
  --secondary-foreground: #00233A;
  --muted: #F0F4F8;
  --muted-foreground: #5A6B7B;
  --accent: #16A3D6;
  --accent-foreground: #FFFFFF;
  --destructive: #F5543A;
  --border: #E2E8F0;
  --input: #E2E8F0;
  --ring: #16A3D6;
  --chart-1: #16A3D6;
  --chart-2: #1A3B6F;
  --chart-3: #1F4E52;
  --chart-4: #F5543A;
  --chart-5: #9AE4FF;
}

.dark {
  --background: #001220;
  --foreground: #E8F4FA;
  --card: #00233A;
  --card-foreground: #E8F4FA;
  --popover: #00233A;
  --popover-foreground: #E8F4FA;
  --primary: #9AE4FF;
  --primary-foreground: #00233A;
  --secondary: #0A2E47;
  --secondary-foreground: #E8F4FA;
  --muted: #0A2E47;
  --muted-foreground: #7BA3BE;
  --accent: #16A3D6;
  --accent-foreground: #FFFFFF;
  --destructive: #F5543A;
  --border: #143350;
  --input: #143350;
  --ring: #16A3D6;
  --chart-1: #16A3D6;
  --chart-2: #9AE4FF;
  --chart-3: #1F4E52;
  --chart-4: #F5543A;
  --chart-5: #1A3B6F;
}`;

const radiusSteps = [
  { name: "sm", value: "calc(0.625rem - 4px)", px: "6px" },
  { name: "md", value: "calc(0.625rem - 2px)", px: "8px" },
  { name: "lg", value: "0.625rem", px: "10px" },
  { name: "xl", value: "calc(0.625rem + 4px)", px: "14px" },
  { name: "2xl", value: "calc(0.625rem + 8px)", px: "18px" },
];

export default function ThemePage() {
  return (
    <div>
      <PageHeader
        title="_Theme"
        description="The Phase2_ theme as CSS variables. Copy them into your globals.css and every shadcn component is branded."
        status="ready"
      />

      <div className="space-y-16">
        {/* Copy full theme */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              _FullTheme
            </h2>
            <CopyButton text={fullThemeCSS} />
          </div>
          <div className="rounded-lg border border-border bg-abyss overflow-hidden">
            <pre className="p-4 overflow-x-auto text-xs text-ice/70 font-mono leading-relaxed max-h-[400px] overflow-y-auto">
              <code>{fullThemeCSS}</code>
            </pre>
          </div>
        </section>

        <hr className="border-border" />

        {/* Brand color tokens */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _BrandColors
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brandTokens.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
              >
                <span
                  className="shrink-0 w-10 h-10 rounded-md border border-border"
                  style={{ backgroundColor: t.value }}
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.label}</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {t.name}: {t.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Semantic tokens — light vs dark */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _SemanticTokens
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            These map brand colors to component roles. Light and dark values
            shown side by side.
          </p>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-[1fr_100px_100px] text-xs font-mono bg-secondary px-4 py-2 border-b border-border">
              <span className="text-muted-foreground font-sans font-medium">Token</span>
              <span className="text-muted-foreground font-sans font-medium">Light</span>
              <span className="text-muted-foreground font-sans font-medium">Dark</span>
            </div>
            {semanticTokens.map((t) => (
              <div
                key={t.name}
                className="grid grid-cols-[1fr_100px_100px] items-center px-4 py-2 border-b border-border last:border-0 text-xs"
              >
                <span className="font-mono text-foreground">{t.name}</span>
                <div className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-sm border border-border shrink-0"
                    style={{ backgroundColor: t.light }}
                  />
                  <span className="font-mono text-muted-foreground">{t.light}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-sm border border-border shrink-0"
                    style={{ backgroundColor: t.dark }}
                  />
                  <span className="font-mono text-muted-foreground">{t.dark}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Radius scale */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _RadiusScale
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Base radius: <code className="text-foreground">0.625rem (10px)</code>. All
            other sizes derived from it.
          </p>
          <div className="flex flex-wrap items-end gap-4">
            {radiusSteps.map((r) => (
              <div key={r.name} className="text-center">
                <div
                  className="w-16 h-16 border-2 border-cyan bg-cyan/10 mb-2"
                  style={{ borderRadius: r.px }}
                />
                <p className="text-xs font-medium text-foreground">{r.name}</p>
                <p className="text-[10px] text-muted-foreground font-mono">{r.px}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Typography */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _Typography
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-6">
              <p className="font-heading text-3xl font-bold tracking-tight text-foreground mb-2">
                Manrope
              </p>
              <p className="text-xs text-muted-foreground font-mono mb-4">
                --font-heading / font-heading
              </p>
              <p className="text-sm text-muted-foreground">
                Headings, display text, labels. Geometric, confident. Weights
                400&ndash;800.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <p className="text-3xl font-semibold tracking-tight text-foreground mb-2">
                Sora
              </p>
              <p className="text-xs text-muted-foreground font-mono mb-4">
                --font-sans / font-sans
              </p>
              <p className="text-sm text-muted-foreground">
                Body copy, UI text, descriptions. Legible, warm. Weights
                300&ndash;700.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
