import { PageHeader } from "@/components/page-header";

export default function StrategyPage() {
  return (
    <div>
      <PageHeader
        title="_Brand Strategy"
        description="The strategic framework behind how Phase2_ positions itself — our mission, vision, values, and brand pillars."
      />

      <div className="space-y-16">
        {/* Vision — this is the north star, let it breathe */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _Vision
          </h2>
          <p className="font-heading text-4xl font-bold tracking-tight leading-[1.15] text-foreground">
            To build a future where smart technology empowers people,
            strengthens organizations and solves problems that matter
            <span className="text-cyan"> —</span> while creating lasting
            opportunity for those who build it.
          </p>
        </section>

        {/* Mission — almost as big, paired with Vision */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _Mission
          </h2>
          <p className="font-heading text-3xl font-medium tracking-tight leading-[1.2] text-foreground">
            To partner with organizations to design and build tailored
            technology solutions — often powered by AI — that solve complex
            problems and earn trust through every interaction, improving lives.
          </p>
        </section>

        <hr className="border-border" />

        {/* Values — these are mantras, not a list */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
            _Values
          </h2>
          <div className="space-y-3">
            {[
              "Have grit",
              "Be a leader",
              "Be an adult",
              "Give a shit",
              "Focus on service",
            ].map((value) => (
              <p
                key={value}
                className="font-heading text-2xl font-semibold tracking-tight text-foreground"
              >
                {value}<span className="text-cyan">.</span>
              </p>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Position — a step down in scale, supporting statement */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _Position
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
            We are a software engineering and AI consultancy that designs and
            builds tailored software and systems to solve complex enterprise
            problems with clarity, care and the kind of reliability you
            don&apos;t have to think twice about.
          </p>
        </section>

        <hr className="border-border" />

        {/* Personality & Voice — side by side, medium weight */}
        <div className="grid gap-16 sm:grid-cols-2">
          <section>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
              _Personality
            </h2>
            <ul className="space-y-3">
              {[
                "Compassionate",
                "Expert",
                "Fun",
                "Visionary",
                "Bold",
                "Grounded",
                "Trustworthy",
              ].map((trait) => (
                <li
                  key={trait}
                  className="font-heading text-lg font-medium text-foreground"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
              _Voice
            </h2>
            <ul className="space-y-3">
              {[
                "Clear",
                "Empathetic",
                "Grounded",
                "Direct",
                "Pragmatic",
                "Accessible",
              ].map((trait) => (
                <li
                  key={trait}
                  className="font-heading text-lg font-medium text-foreground"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <hr className="border-border" />

        {/* Value Proposition — second-tier hero statement */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _ValueProposition
          </h2>
          <p className="font-heading text-2xl font-medium tracking-tight leading-snug text-foreground max-w-3xl">
            Phase2 has been solving hard problems for decades, the right way —
            every time. We are big enough to deliver on complex,
            enterprise-scale initiatives and focused enough to care deeply about
            every relationship.
          </p>
        </section>

        <hr className="border-border" />

        {/* Reasons to Believe — proof points, smaller, earned */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _ReasonsToBelieve
          </h2>
          <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {[
              "100% onshore",
              "Exceptional talent",
              "ESOP organization",
              "Committed to our respective communities",
              "Longstanding partnerships",
              "Rigorous hiring and values-first culture",
              "Proven delivery",
              "Deep trust and repeat business",
              "Advanced AI capabilities",
            ].map((reason) => (
              <p
                key={reason}
                className="text-base text-muted-foreground"
              >
                <span className="text-pine mr-2">&#8212;</span>
                {reason}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
