import { PageHeader } from "@/components/page-header";
import { PhotoCarousel } from "@/components/brand/photo-carousel";

export default function PhotographyPage() {
  return (
    <div>
      <PageHeader
        title="_Photography"
        description="Photography is more than decoration. It should feel like it belongs here. Choose visuals that reflect who we are, not just what looks good."
      />

      <div className="space-y-20">
        {/* Carousel */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _PhotoLibrary
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            Real moments from the Phase2_ team — conferences, collaboration,
            culture, and the energy of building things that matter.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Drag to scroll. Hover to download individual images.
          </p>

          <PhotoCarousel />
        </section>

        <hr className="border-border" />

        {/* Photography Types */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Types
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl">
            Photography can be captured by doing custom shoots and sourced
            from stock photo websites. Phase2 utilizes four categories.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                type: "People & Technology",
                detail:
                  "People living better lives with Phase2 technology solutions. Human-centered, optimistic, real.",
              },
              {
                type: "Industry-Focused",
                detail:
                  "Imagery that reflects the industries we serve — government, healthcare, education, nonprofits.",
              },
              {
                type: "Company Culture",
                detail:
                  "Our people, our events, our spaces. Warm, candid, authentic. Never staged or stock-feeling.",
              },
              {
                type: "Abstract Closeups",
                detail:
                  "Texture, pattern, light. Conceptual imagery for backgrounds, section breaks, and visual rhythm.",
              },
            ].map((item) => (
              <div
                key={item.type}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.type}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Visual Integrity */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
            _VisualIntegrity
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-3">
                No AI-generated portraits<span className="text-cyan">.</span>
              </h3>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                To represent Phase2_ employees — real people only. AI imagery
                is acceptable for abstract or conceptual shots, never for
                representing our team.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-3">
                Tone matters<span className="text-cyan">.</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Warm, golden light
                  </p>
                  <p className="text-xs text-muted-foreground">
                    For human moments and cultural context.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Cooler hues
                  </p>
                  <p className="text-xs text-muted-foreground">
                    For abstract, technological, or conceptual shots.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-3">
                Color sync<span className="text-cyan">.</span>
              </h3>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                Whenever possible, select images that harmonize with our brand
                palette — deep navy, bold cyan, pine green, and coral. The
                image should feel like it was made for the palette, even when
                it wasn&apos;t.
              </p>
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
                context: "Hero sections",
                guidance:
                  "Full-bleed or contained with rounded corners. Use culture or abstract shots. Apply a subtle brand-color overlay if contrast is needed.",
              },
              {
                context: "Case studies & testimonials",
                guidance:
                  "Real client work and real people. Pair with warm lighting. Never use stock when you have the real thing.",
              },
              {
                context: "Presentations",
                guidance:
                  "One strong image per slide. Let it breathe. Abstract closeups work well as background textures at low opacity.",
              },
              {
                context: "Social media",
                guidance:
                  "Culture photography for engagement. Crop tight, keep energy high. Pair with bold typography overlays.",
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
