import { PageHeader } from "@/components/page-header";
import { LogoDownloads } from "@/components/brand/logo-downloads";
import { Phase2Generator } from "@/components/brand/phase2-generator";
import { RolodexBuilder } from "@/components/brand/rolodex-builder";

const logoRules = [
  {
    name: "ColorFlex",
    rule: "The wordmark adapts to four approved combos: dark on light, light on dark, light on indigo, and white on gradient. The underscore is always the Signal_BlueGradient — except on a gradient background, where it flips to solid white.",
  },
  {
    name: "TextBehavior",
    rule: 'Font weight ranges from Semibold to Bold depending on size and context. The underscore weight must always match the text weight. "Phase2" is locked — never retype, respace, or alter the wordmark.',
  },
  {
    name: "IconAlignment",
    rule: "The P2_ icon lives in a rounded-rectangle container (60px radius). Dark and light variants follow the same color rules as the full wordmark. Use for avatars, favicons, and compact UI placements.",
  },
  {
    name: "FinalWord",
    rule: '"The logo is not decoration. It\'s a signal. Every time it shows up, it should mean something." — JoJo Franklin, Creative Director',
  },
];

export default function LogoPage() {
  return (
    <div>
      <PageHeader
        title="_Logo"
        description="The Phase2_ logo is a wordmark designed to express forward momentum, adaptability, and clarity. Not a stamp — a signal. Built for motion, modularity, and meaning."
        status="ready"
      />

      <div className="space-y-20">
        {/* Logo System */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _LogoSystem
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            The wordmark is pure type — Manrope Bold with a separate gradient
            underscore that signals what comes next. No ornamentation, just confidence.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Click any card to download the SVG. Each variant is built for its
            intended context — light backgrounds, dark backgrounds, compact spaces.
          </p>
          <LogoDownloads />
        </section>

        <hr className="border-border" />

        {/* Approved Color Combos */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _ApprovedCombos
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Four approved background pairings. The gradient underscore is the default —
            on a gradient background, the underscore flips to solid white.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { bg: "#F1F5F9", text: "#00233A", label: "Slate_100", underscore: "gradient" },
              { bg: "#00233A", text: "#FFFFFF", label: "Abyss_DeepNavy", underscore: "gradient" },
              { bg: "#1A386F", text: "#FFFFFF", label: "Blueprint_Indigo", underscore: "gradient" },
              { bg: "linear-gradient(135deg, #9AE4FF, #14A3D6, #1A386F)", text: "#FFFFFF", label: "Signal_BlueGradient", underscore: "white" },
            ].map((combo) => (
              <div
                key={combo.label}
                className="flex flex-col items-center justify-center rounded-xl border border-border p-8 min-h-[120px]"
                style={{ background: combo.bg }}
              >
                <span
                  className="inline-flex items-end"
                  style={{ gap: "0.127em", fontSize: "1.875rem" }}
                >
                  <span
                    className="font-heading font-bold leading-none tracking-tight"
                    style={{ color: combo.text }}
                  >
                    Phase2
                  </span>
                  <span
                    className="inline-block shrink-0"
                    style={{
                      width: "0.605em",
                      height: "0.114em",
                      marginBottom: "-0.025em",
                      background:
                        combo.underscore === "white"
                          ? "#FFFFFF"
                          : "linear-gradient(90deg, #9AE4FF 21%, #14A3D6 51%, #1A386F 100%)",
                    }}
                  />
                </span>
                <p
                  className="text-[10px] font-mono mt-3 opacity-60"
                  style={{ color: combo.text }}
                >
                  {combo.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Generator */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Generator
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            Phase2_FillInTheBlank — the underscore holds space for beliefs,
            teams, and ambitions. Type a word, see it in context, export the
            wordmark.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Suffix renders in CamelCase at lighter weight per brand convention. Think
            Phase2_HasGrit, Phase2_ShipsWork, Phase2_BuildsTrust.
          </p>
          <Phase2Generator />
        </section>

        <hr className="border-border" />

        {/* Rolodex */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Rolodex
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-3 max-w-2xl">
            A vertical word carousel that cycles through your values after
            Phase2_. Add words, set the pace, export as GIF for presentations
            and social.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Gradient fade at top and bottom dissolves words into the background for
            a seamless infinite loop.
          </p>
          <RolodexBuilder />
        </section>

        <hr className="border-border" />

        {/* Rules */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
            _Rules
          </h2>
          <div className="space-y-6">
            {logoRules.map((item) => (
              <div key={item.name} className="border-t border-border pt-4">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {item.name}<span className="text-cyan">_</span>
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.rule}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
