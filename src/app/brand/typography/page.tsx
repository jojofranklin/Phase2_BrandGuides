import { PageHeader } from "@/components/page-header";
import { TypeScale } from "@/components/brand/type-scale";
import { TypeSpecimen } from "@/components/brand/type-specimen";

export default function TypographyPage() {
  return (
    <div>
      <PageHeader
        title="_Typography"
        description="Manrope for headlines and display. Sora for body and UI. Two typefaces that balance geometric elegance with everyday legibility."
      />

      {/* Hero specimen — show both fonts at scale */}
      <section className="mb-20">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-4">
              Primary Typeface
            </p>
            <p className="font-heading text-7xl font-bold tracking-tighter leading-none text-foreground">
              Manrope
            </p>
            <p className="mt-3 text-base text-muted-foreground max-w-xl">
              Used for logo lockups, headlines, display copy, and titles. Its
              geometric elegance and modern structure reflect the confidence and
              clarity of our brand voice.
            </p>
            <a
              href="https://fonts.google.com/specimen/Manrope"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-cyan hover:underline"
            >
              Download Manrope on Google Fonts &#8250;
            </a>
          </div>

          <hr className="border-border" />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-4">
              Secondary Typeface
            </p>
            <p className="font-sans text-7xl font-bold tracking-tighter leading-none text-foreground">
              Sora
            </p>
            <p className="mt-3 text-base text-muted-foreground max-w-xl">
              Used for body copy, supporting UI text, and long-form content. It
              balances legibility with personality, maintaining a cohesive tone
              across applications.
            </p>
            <a
              href="https://fonts.google.com/specimen/Sora"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-cyan hover:underline"
            >
              Download Sora on Google Fonts &#8250;
            </a>
          </div>
        </div>
      </section>

      {/* Type Scale */}
      <section className="mb-20">
        <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
          _TypeScale
        </h2>
        <TypeScale />
      </section>

      {/* Weight Specimens */}
      <section className="mb-20">
        <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
          _ManropeWeights
        </h2>
        <TypeSpecimen
          fontClass="font-heading"
          weights={[
            { label: "Light", weight: "300", className: "font-light" },
            { label: "Regular", weight: "400", className: "font-normal" },
            { label: "Medium", weight: "500", className: "font-medium" },
            { label: "SemiBold", weight: "600", className: "font-semibold" },
            { label: "Bold", weight: "700", className: "font-bold" },
            { label: "ExtraBold", weight: "800", className: "font-extrabold" },
          ]}
        />
      </section>

      <section className="mb-20">
        <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
          _SoraWeights
        </h2>
        <TypeSpecimen
          fontClass="font-sans"
          weights={[
            { label: "Light", weight: "300", className: "font-light" },
            { label: "Regular", weight: "400", className: "font-normal" },
            { label: "Medium", weight: "500", className: "font-medium" },
            { label: "SemiBold", weight: "600", className: "font-semibold" },
            { label: "Bold", weight: "700", className: "font-bold" },
          ]}
        />
      </section>

      {/* Usage Guidelines */}
      <section className="mb-20">
        <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
          _Usage
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="font-heading text-2xl font-semibold tracking-tight mb-3">
              Manrope<span className="text-cyan">_</span>
            </h3>
            <div className="space-y-2 text-base leading-relaxed text-muted-foreground">
              <p>Headlines, page titles, section headers, display text, and the logo wordmark.</p>
              <p>Use SemiBold or Bold for headlines. Medium for subheadings. Light for oversized display moments where the type itself is the design.</p>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-2xl font-semibold tracking-tight mb-3">
              Sora<span className="text-cyan">_</span>
            </h3>
            <div className="space-y-2 text-base leading-relaxed text-muted-foreground">
              <p>Body copy, UI labels, form inputs, navigation, captions, and metadata.</p>
              <p>Use Regular for body text. Medium for emphasis within paragraphs. Bold sparingly — only for inline callouts like <strong>Phase2_</strong> in running text.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Font Stack / Tokens */}
      <section>
        <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
          _Tokens
        </h2>
        <div className="space-y-3">
          {[
            {
              label: "Headings",
              cssVar: "var(--font-manrope)",
              tailwind: "font-heading",
              stack: "'Manrope', sans-serif",
            },
            {
              label: "Body / UI",
              cssVar: "var(--font-sora)",
              tailwind: "font-sans",
              stack: "'Sora', sans-serif",
            },
            {
              label: "Code",
              cssVar: "var(--font-mono)",
              tailwind: "font-mono",
              stack: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            },
          ].map((token) => (
            <div
              key={token.label}
              className="flex items-start justify-between rounded-lg border border-border bg-card p-4"
            >
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">
                  {token.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground font-mono">
                  {token.stack}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">
                  CSS: <span className="font-mono text-foreground">{token.cssVar}</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tailwind: <span className="font-mono text-foreground">{token.tailwind}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
