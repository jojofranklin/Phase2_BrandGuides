import { PageHeader } from "@/components/page-header";

const socialExamples = [
  {
    platform: "LinkedIn — Recruitment",
    description:
      "Rolodex carousel on Indigo background with Phase2_ wordmark and cycling culture words. Bottom bar with CTA.",
    specs: "1080 x 1080px, Indigo (#1A386F) background",
    elements: [
      "Phase2_ wordmark with gradient underscore",
      "Rolodex cycling: Connected, Solves, GivesASh*t, Builds, Thinks",
      "Gradient fade masks at top/bottom for seamless loop",
      "CTA bar: \"Explore careers at Phase2_\"",
    ],
  },
  {
    platform: "LinkedIn — Capabilities",
    description:
      "Bold typographic hero image with large display text and close-up photography. Clean, confident, no clutter.",
    specs: "1200 x 627px, Photography + bold overlay type",
    elements: [
      "Large Manrope Bold display text",
      "Phase2_ icon mark (P2_) in top corner",
      "CTA bar: \"Discover how your systems can work smarter.\"",
      "Photography: high-quality, human-focused imagery",
    ],
  },
];

const presentationExample = {
  title: "Template Slide",
  description:
    "Standard capability presentation slide. Phase2_ wordmark centered at top, large Manrope SemiBold headline on the left, service icons stacked on the right.",
  specs: "16:9 (1920 x 1080px), Abyss background",
  headline: "Built to solve big challenges, every time.",
  subhead:
    "We are big enough to deliver on complex, enterprise-scale initiatives, and focused enough to care deeply about every relationship.",
  services: [
    "AI Integration & Automation",
    "Enterprise Software Development",
    "Strategic Technology Consulting",
    "100% Onshore Talent",
  ],
};

const websiteExample = {
  title: "Website Homepage",
  description:
    "Full-width hero with Phase2_ rolodex in the nav, bold headline over photography, and trusted-by logo bar at the bottom.",
  specs: "Responsive, Abyss background",
  elements: [
    "Phase2_ rolodex wordmark in top-left nav",
    "Navigation: Capabilities, Approach, Team, Blog, Labs",
    "Hero: Full-bleed photography with typographic overlay",
    "Headline: \"Phase2_ is built to evolve.\"",
    "Trust bar: Fortune 500 client logos",
  ],
};

export default function InUsePage() {
  return (
    <div>
      <PageHeader
        title="_In Use"
        description="See the Phase2_ brand in action across social media, presentations, websites, and more. These examples show how our system flexes across contexts while staying unmistakably Phase2_."
        status="ready"
      />

      <div className="space-y-20">
        {/* Social */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Social
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl">
            LinkedIn is our primary social channel. Posts use bold typography,
            brand colors, and the rolodex pattern to stand out in the feed.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {socialExamples.map((example) => (
              <div
                key={example.platform}
                className="rounded-xl border border-border overflow-hidden"
              >
                {/* Preview area */}
                <div className="bg-indigo p-8 min-h-[240px] flex items-center justify-center">
                  <div className="text-center">
                    <span
                      className="inline-flex items-end"
                      style={{ gap: "0.127em", fontSize: "2.25rem" }}
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
                    </span>
                    <p className="text-xs text-ice/60 font-mono mt-4">
                      {example.specs}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-foreground mb-1">
                    {example.platform}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {example.description}
                  </p>
                  <ul className="space-y-1.5">
                    {example.elements.map((el, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground"
                      >
                        <span className="text-cyan mr-1.5">&#8226;</span>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Presentations */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Presentations
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl">
            Slides follow the same typographic principles — big type, brand
            colors, deliberate white space. Let the content do the work.
          </p>

          <div className="rounded-xl border border-border overflow-hidden">
            {/* Slide preview */}
            <div
              className="bg-abyss p-10 flex gap-8"
              style={{ aspectRatio: "16 / 9" }}
            >
              {/* Left side — headline */}
              <div className="flex-1 flex flex-col justify-center">
                <div
                  className="inline-block shrink-0 mb-6"
                  style={{
                    width: "48px",
                    height: "6px",
                    background:
                      "linear-gradient(90deg, #9AE4FF 21%, #14A3D6 51%, #1A386F 100%)",
                  }}
                />
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight mb-4">
                  {presentationExample.headline}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                  {presentationExample.subhead}
                </p>
              </div>

              {/* Right side — services */}
              <div className="hidden sm:flex flex-col justify-center w-1/3 space-y-0">
                {presentationExample.services.map((service) => (
                  <div
                    key={service}
                    className="border-t border-white/10 py-4"
                  >
                    <p className="font-heading text-sm font-semibold text-white">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide details */}
            <div className="p-5">
              <h3 className="font-heading text-base font-bold text-foreground mb-1">
                {presentationExample.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {presentationExample.description}
              </p>
              <p className="text-xs text-muted-foreground font-mono mt-2">
                {presentationExample.specs}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Website */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _Website
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl">
            The web expression of Phase2_ — full-bleed imagery, typographic
            heroes, and the rolodex pattern right in the navigation.
          </p>

          <div className="rounded-xl border border-border overflow-hidden">
            {/* Website preview */}
            <div className="bg-abyss">
              {/* Nav bar */}
              <div className="flex items-center justify-between px-8 py-4 border-b border-white/10">
                <span
                  className="inline-flex items-end"
                  style={{ gap: "0.08em", fontSize: "1rem" }}
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
                  <span className="font-heading font-bold leading-none tracking-tight text-cyan text-sm">
                    GivesASh*t
                  </span>
                </span>
                <div className="hidden sm:flex items-center gap-5 text-xs text-white/60">
                  {["Capabilities", "Approach", "Team", "Blog", "Labs"].map(
                    (item) => (
                      <span
                        key={item}
                        className="hover:text-white transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Hero */}
              <div className="px-8 py-16 sm:py-24 text-center">
                <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Phase2<span className="text-cyan">_</span> is built to
                  evolve.
                </p>
                <p className="text-xs text-ice/40 mt-6">
                  Trusted by Fortune 500s and mission-critical teams
                </p>
              </div>

              {/* Trust bar */}
              <div className="flex items-center justify-center gap-10 px-8 py-6 border-t border-white/10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-5 w-16 rounded bg-white/10"
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="p-5">
              <h3 className="font-heading text-base font-bold text-foreground mb-1">
                {websiteExample.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {websiteExample.description}
              </p>
              <ul className="space-y-1.5">
                {websiteExample.elements.map((el, i) => (
                  <li key={i} className="text-xs text-muted-foreground">
                    <span className="text-cyan mr-1.5">&#8226;</span>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Guidelines reminder */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _WhenInDoubt
          </h2>
          <p className="font-heading text-2xl font-medium tracking-tight leading-snug text-foreground max-w-2xl">
            Every touchpoint is a signal. Keep it confident, keep it clean, and
            when the moment calls for something bold — trust your taste
            <span className="text-cyan">_</span>
          </p>
        </section>
      </div>
    </div>
  );
}
