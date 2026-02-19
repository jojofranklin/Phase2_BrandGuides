import { PageHeader } from "@/components/page-header";
import { ColorPalette } from "@/components/brand/color-palette";
import { HueScale } from "@/components/brand/hue-scale";
import { GradientBuilder } from "@/components/brand/gradient-builder";

const hueScales = [
  {
    name: "Abyss_DeepNavy",
    description: "Our foundation. The trusted calm before action.",
    baseHex: "#00233A",
    baseIndex: 5,
    steps: [
      { hex: "#000F1A" },
      { hex: "#001320" },
      { hex: "#001726" },
      { hex: "#001B2C" },
      { hex: "#001F32" },
      { hex: "#00233A" },
      { hex: "#2E4D61" },
      { hex: "#5C7788" },
      { hex: "#8AA1AF" },
      { hex: "#B8CBD6" },
      { hex: "#E5F5FF" },
    ],
  },
  {
    name: "Blueprint_Indigo",
    description: "Design-led and deliberate.",
    baseHex: "#1A386F",
    baseIndex: 5,
    steps: [
      { hex: "#050A15" },
      { hex: "#091327" },
      { hex: "#0D1C39" },
      { hex: "#11254B" },
      { hex: "#152E5D" },
      { hex: "#1A386F" },
      { hex: "#445D8B" },
      { hex: "#6E82A7" },
      { hex: "#98A7C3" },
      { hex: "#C2CCDF" },
      { hex: "#EAF0FA" },
    ],
  },
  {
    name: "Pulse_BoldCyan",
    description: "Momentum in motion.",
    baseHex: "#14A3D6",
    baseIndex: 5,
    steps: [
      { hex: "#021217" },
      { hex: "#062F3D" },
      { hex: "#0A4C63" },
      { hex: "#0E6989" },
      { hex: "#1286AF" },
      { hex: "#14A3D6" },
      { hex: "#3EB4DE" },
      { hex: "#68C5E6" },
      { hex: "#92D6EE" },
      { hex: "#BCE7F6" },
      { hex: "#E8F7FD" },
    ],
  },
  {
    name: "Clarity_IceBlue",
    description: "Simple. Clean. Sharp.",
    baseHex: "#9AE4FF",
    baseIndex: 5,
    steps: [
      { hex: "#00131A" },
      { hex: "#1F3D48" },
      { hex: "#3E6776" },
      { hex: "#5D91A4" },
      { hex: "#7CBBD2" },
      { hex: "#9AE4FF" },
      { hex: "#A9E8FF" },
      { hex: "#B8ECFF" },
      { hex: "#C7F0FF" },
      { hex: "#D6F4FF" },
      { hex: "#E5F8FF" },
    ],
  },
  {
    name: "Drive_CoralRush",
    description: "Unapologetically bold.",
    baseHex: "#F5543A",
    baseIndex: 5,
    steps: [
      { hex: "#180401" },
      { hex: "#44140C" },
      { hex: "#702417" },
      { hex: "#9C3422" },
      { hex: "#C8442D" },
      { hex: "#F5543A" },
      { hex: "#F7725D" },
      { hex: "#F99080" },
      { hex: "#FBAEA3" },
      { hex: "#FDCCC6" },
      { hex: "#FEEAE7" },
    ],
  },
  {
    name: "Homage_Pine",
    description: "A subtle nod to our roots.",
    baseHex: "#1F4E52",
    baseIndex: 5,
    steps: [
      { hex: "#071212" },
      { hex: "#0C1E1F" },
      { hex: "#112A2C" },
      { hex: "#163639" },
      { hex: "#1B4246" },
      { hex: "#1F4E52" },
      { hex: "#487073" },
      { hex: "#719294" },
      { hex: "#9AB4B5" },
      { hex: "#C3D6D6" },
      { hex: "#EDF7F8" },
    ],
  },
];

const utilityColors = [
  { name: "_White", hex: "#00233A" },
  { name: "_Slate50", hex: "#F8FAFC" },
  { name: "_Slate100", hex: "#F1F5F9" },
  { name: "_Slate200", hex: "#E2E8F0" },
  { name: "_Slate300", hex: "#CBD5E1" },
  { name: "_Slate400", hex: "#94A3B8" },
  { name: "_Slate500", hex: "#64748B" },
  { name: "_Slate600", hex: "#475569" },
  { name: "_Slate700", hex: "#334155" },
  { name: "_Slate800", hex: "#1E293B" },
  { name: "_Slate900", hex: "#0F172A" },
  { name: "_Slate950", hex: "#020617" },
];

export default function ColorPage() {
  return (
    <div>
      <PageHeader
        title="_Color"
        description="These are the backbone of our visual identity — strong, clear, and full of intent. Each color is chosen to support the way Phase2_ shows up in the world."
      />

      <div className="space-y-20">
        {/* Primary */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Primary
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl">
            Use these consistently when creating key brand materials:
            presentations, marketing collateral, external documents, and web
            elements that carry high brand visibility.
          </p>
          <ColorPalette
            colors={[
              {
                name: "Abyss_DeepNavy",
                hex: "#00233A",
                token: "abyss",
                cssVar: "--abyss",
                tailwind: "bg-abyss",
                description: "Our foundation. The trusted calm before action.",
              },
              {
                name: "Blueprint_Indigo",
                hex: "#1A3B6F",
                token: "indigo",
                cssVar: "--indigo",
                tailwind: "bg-indigo",
                description: "Design-led and deliberate.",
              },
              {
                name: "Pulse_BoldCyan",
                hex: "#16A3D6",
                token: "cyan",
                cssVar: "--cyan",
                tailwind: "bg-cyan",
                description: "Momentum in motion.",
              },
              {
                name: "Clarity_IceBlue",
                hex: "#9AE4FF",
                token: "ice",
                cssVar: "--ice",
                tailwind: "bg-ice",
                description: "Simple. Clean. Sharp.",
              },
            ]}
          />
        </section>

        {/* Secondary */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Secondary
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl">
            Accent colors for emphasis, status indicators, and moments that need
            a different energy.
          </p>
          <ColorPalette
            colors={[
              {
                name: "Drive_CoralRush",
                hex: "#F5543A",
                token: "coral",
                cssVar: "--coral",
                tailwind: "bg-coral",
                description: "Unapologetically bold.",
              },
              {
                name: "Homage_Pine",
                hex: "#1F4E52",
                token: "pine",
                cssVar: "--pine",
                tailwind: "bg-pine",
                description: "A subtle nod to our roots.",
              },
            ]}
          />
        </section>

        <hr className="border-border" />

        {/* Tints & Shades */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _TintsAndShades
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            Extended hue scales for each brand color — five darker shades and
            five lighter tints radiating from the base.
          </p>
          <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
            Click any swatch to copy its hex value. The highlighted center
            swatch is the base brand color.
          </p>

          <div className="space-y-10">
            {hueScales.map((scale) => (
              <HueScale key={scale.name} {...scale} />
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Gradient */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Gradient
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            Signal_BlueGradient is the official brand gradient — the
            underscore in motion. Use it for hero moments, loading states,
            and anywhere the brand needs kinetic energy.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Flows from Clarity through Pulse to Blueprint — light to deep,
            open to focused.
          </p>

          {/* Official Signal gradient */}
          <div className="mb-4">
            <div
              className="h-16 w-full rounded-xl border border-border"
              style={{
                background:
                  "linear-gradient(90deg, #9AE4FF, #14A3D6, #1A386F)",
              }}
            />
            <div className="mt-3 flex items-start justify-between">
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">
                  Signal_BlueGradient
                </p>
                <p className="text-xs text-muted-foreground">
                  The underscore in motion.
                </p>
              </div>
              <code className="rounded-md border border-border bg-card px-3 py-1.5 text-[11px] font-mono text-muted-foreground">
                #9AE4FF → #14A3D6 → #1A386F
              </code>
            </div>
          </div>

          <hr className="border-border my-10" />

          {/* Gradient builder */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
              Gradient Builder<span className="text-cyan">_</span>
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Mix brand colors into custom gradients. Pick colors, choose a
              direction, copy the CSS.
            </p>
            <GradientBuilder />
          </div>
        </section>

        <hr className="border-border" />

        {/* Utility */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Utility
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            These aren&apos;t here to grab attention — they&apos;re here to make
            everything else shine. Utility colors provide the neutral foundation
            needed to organize, support, and guide without distraction.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Slate for body text, borders, lines, and subtle UI elements. White
            and off-white backgrounds for breathing room. Grays for dividers,
            footers, and legible contrast.
          </p>

          <div className="grid grid-cols-6 gap-2">
            {utilityColors.map((color) => (
              <div key={color.name} className="group">
                <div
                  className="aspect-square rounded-lg border border-border transition-transform group-hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="mt-2 text-[10px] font-semibold text-foreground truncate">
                  {color.name}
                </p>
                <p className="text-[10px] text-muted-foreground font-mono">
                  {color.hex}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Usage */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
            _Usage
          </h2>
          <div className="space-y-6">
            {[
              {
                context: "Presentations",
                guidance:
                  "Use primary palette. Deep Navy backgrounds with Cyan or Ice Blue accents.",
              },
              {
                context: "Marketing collateral",
                guidance:
                  "Primary palette for hero sections. Secondary for call-to-action moments.",
              },
              {
                context: "External documents",
                guidance:
                  "Keep it clean. Deep Navy + white with Cyan highlights.",
              },
              {
                context: "Web & digital",
                guidance:
                  "Full palette available. Ensure contrast ratios meet WCAG AA standards. Use utility Slate scale for UI chrome.",
              },
            ].map((item) => (
              <div key={item.context} className="border-t border-border pt-4">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {item.context}
                </h3>
                <p className="text-base text-muted-foreground">
                  {item.guidance}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
