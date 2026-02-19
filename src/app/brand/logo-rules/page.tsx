import { PageHeader } from "@/components/page-header";

type RulePoint = {
  text: string;
  highlight?: string;
  after?: string;
  warn?: string;
  indent?: boolean;
};

type Rule = {
  name: string;
  points: RulePoint[];
};

const rules: Rule[] = [
  {
    name: "_ColorFlex",
    points: [
      {
        text: "The gradient underscore is preferred, but when that's not possible, use ",
        highlight: "Pulse_BoldCyan",
        after: " as a solid fallback.",
      },
      {
        text: "Always make sure Phase2_ has stronger contrast than whatever follows it. Underscore is anchor, not accent.",
      },
    ],
  },
  {
    name: "_TextBehavior",
    points: [
      {
        text: "In copy, bold Phase2_ mid-sentence. Let it flow naturally with how we talk.",
      },
      {
        text: "CamelCase all additions in the Rolodex style: Phase2_HasGrit, ",
        warn: "not Phase2_has_grit or Phase2 has grit.",
      },
    ],
  },
  {
    name: "_IconAlignment",
    points: [
      {
        text: "When using just the P2_ icon, center the text, not the whole block. The underscore throws off balance otherwise.",
      },
    ],
  },
  {
    name: "_FinalWord",
    points: [
      {
        text: 'If you\'re asking "Can I do this?" and the answer isn\'t obvious:',
      },
      { text: "Don't wing it.", indent: true },
      { text: "Then ask someone with taste.", indent: true },
    ],
  },
];

export default function LogoRulesPage() {
  return (
    <div>
      <PageHeader
        title="_Logo Rules"
        description="Rules, reminders, and reasonable rebellion. Yes, the Phase2_ logo is clean, flexible, and recognizable. Don't mess it up."
        status="ready"
      />

      <div className="space-y-20">
        {/* Intro */}
        <section>
          <div className="max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed text-coral font-semibold">
              Use the approved color combos, logos, marks, when you want to
              guarantee contrast and polish — think client decks, key documents,
              printed materials. These are the non-negotiables.
            </p>
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                But also...? This brand was built to move.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mt-3">
                When the moment calls for something bold — like an unexpected
                background, an unconventional layout, a one-off situation —
                trust your taste. (Assuming you have good taste.)
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Rules grid */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-10">
            _TheRules
          </h2>
          <div className="grid gap-12 sm:grid-cols-2">
            {rules.map((rule) => (
              <div key={rule.name}>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  {rule.name}<span className="text-cyan">_</span>
                </h3>
                <ul className="space-y-3">
                  {rule.points.map((point, i) => (
                    <li
                      key={i}
                      className={`text-sm leading-relaxed text-muted-foreground ${
                        point.indent ? "ml-5" : ""
                      }`}
                    >
                      {!point.indent && (
                        <span className="text-cyan mr-2">&#8226;</span>
                      )}
                      {point.indent && (
                        <span className="text-muted-foreground/50 mr-2">&#8212;</span>
                      )}
                      {point.text}
                      {point.highlight && (
                        <span className="font-bold text-cyan">
                          {point.highlight}
                        </span>
                      )}
                      {point.after && point.after}
                      {point.warn && (
                        <span className="text-coral">{point.warn}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Do / Don't visual examples */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-10">
            _QuickReference
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Do */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-abyss p-8 flex items-center justify-center min-h-[160px]">
                <span
                  className="inline-flex items-end"
                  style={{ gap: "0.127em", fontSize: "2rem" }}
                >
                  <span className="font-heading font-bold leading-none tracking-tight text-white">
                    Phase2
                  </span>
                  <span
                    className="inline-block shrink-0"
                    style={{
                      width: "0.605em",
                      height: "0.114em",
                      marginBottom: "-0.025em",
                      background:
                        "linear-gradient(90deg, #9AE4FF 21%, #14A3D6 51%, #1A386F 100%)",
                    }}
                  />
                  <span className="font-heading font-bold leading-none tracking-tight text-cyan">
                    HasGrit
                  </span>
                </span>
              </div>
              <div className="px-5 py-3 bg-pine/10">
                <p className="text-xs font-semibold text-pine">
                  Do — CamelCase, gradient underscore, strong contrast
                </p>
              </div>
            </div>

            {/* Don't */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-abyss p-8 flex items-center justify-center min-h-[160px]">
                <span className="font-heading text-[2rem] font-bold leading-none tracking-tight text-white/40">
                  Phase2_has_grit
                </span>
              </div>
              <div className="px-5 py-3 bg-coral/10">
                <p className="text-xs font-semibold text-coral">
                  Don&apos;t — snake_case, no gradient underscore, low contrast
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* JoJo's word */}
        <section>
          <p className="text-lg leading-relaxed text-coral italic max-w-2xl">
            &ldquo;I&apos;m not putting &lsquo;don&apos;t stretch the logo&rsquo; in here
            intentionally, because if anybody does that at our company I will
            personally come find them.&rdquo;
          </p>
          <p className="mt-4 font-heading text-lg font-bold text-foreground">
            JoJo<span className="text-cyan">_</span>
          </p>
        </section>
      </div>
    </div>
  );
}
