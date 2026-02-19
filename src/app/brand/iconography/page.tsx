import { PageHeader } from "@/components/page-header";
import { IconGrid } from "@/components/brand/icon-grid";

export default function IconographyPage() {
  return (
    <div>
      <PageHeader
        title="_Iconography"
        description="Icons for Phase2 serve as visual cues — helping audiences navigate, scan content quickly and understand actions at a glance. They should feel friendly, simple and purposeful."
      />

      <div className="space-y-20">
        {/* Primary Icons */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _PrimaryIcons
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            Custom geometric icons built for the Phase2_ brand. Each pairs
            with a core process step, value, or capability.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Click any icon to download it as SVG. Consistent geometry, line
            work, and an abstract style — designed to extend, not decorate.
          </p>

          <IconGrid />
        </section>

        <hr className="border-border" />

        {/* Principles */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
            _Principles
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Geometric & Abstract",
                detail:
                  "Icons use consistent geometry and line work. They communicate through shape, not literal illustration.",
              },
              {
                title: "Brand-Colored",
                detail:
                  "Primary icons render in Pulse Cyan by default. They can be set to Abyss, Blueprint, or white depending on background.",
              },
              {
                title: "Scalable",
                detail:
                  "Built as clean SVGs with no raster dependencies. They work at 16px navigation size or 120px hero size.",
              },
              {
                title: "Extensible",
                detail:
                  "Build upon this library with icons that follow the same style: consistent stroke weights, geometric forms, abstract intent.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Utility Icons */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _UtilityIcons
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            When a primary icon isn&apos;t available — or when you&apos;re
            building something internal, functional, or UI-heavy — reach for
            the Utility Icon Library.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            We&apos;ve standardized on IconPark, a flexible, scalable, and
            developer-friendly icon system that fits seamlessly into our
            brutalist-minimal aesthetic. Every icon supports adjustable stroke
            widths and can be styled to match our brand palette.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-heading text-base font-semibold text-foreground">
                    IconPark
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground max-w-lg">
                    2400+ high-quality icons with consistent style. Supports
                    React, Vue, and SVG. Adjustable stroke width, color, and
                    size.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Recommended
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://iconpark.oceanengine.com/official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-cyan/90"
                >
                  Browse IconPark &#8250;
                </a>
                <a
                  href="https://www.figma.com/community/plugin/735098390272716754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Figma Plugin &#8250;
                </a>
              </div>
            </div>
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
                context: "Website UI components",
                guidance:
                  "Use primary icons for hero sections and feature callouts. Utility icons for navigation, buttons, and form elements.",
              },
              {
                context: "Product dashboards",
                guidance:
                  "Utility icons for all UI chrome. Primary icons only for branded moments like empty states or onboarding.",
              },
              {
                context: "Presentations",
                guidance:
                  "Primary icons at large scale (80–120px) to anchor slides. Use Pulse Cyan on dark backgrounds, Abyss on light.",
              },
              {
                context: "Internal tooling",
                guidance:
                  "Default to utility icons. Keep stroke width consistent at 1.5–2px. Style with brand palette colors.",
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
