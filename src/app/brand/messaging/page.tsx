import { PageHeader } from "@/components/page-header";

type Message = {
  headline: string;
  body: string;
  supportingPoints: string[];
  whyItMatters: string;
};

const clientMessages: Message[] = [
  {
    headline: "Built to solve big challenges, every time.",
    body: "Clients come to us with huge, complex challenges. And we solve them, every time, with a blend of discipline, enterprise-scale capabilities and unmatched expertise. That's how we earned our reputation for always delivering and the trust of leading companies.",
    supportingPoints: [
      "Proven process for uncovering root problems and defining success.",
      "Longstanding track record of dependable, enterprise-grade delivery.",
      "Trusted by Fortune 500s, public agencies and mission-critical teams.",
    ],
    whyItMatters:
      "Clients want confidence, not just capability. This message addresses their anxiety around risk, misalignment or failed delivery and shows that Phase2 is a partner who gets it right.",
  },
  {
    headline: "Using technology's power to serve people.",
    body: "We know AI and modern technology like no one else. We know the power and immense potential. But we believe technology should serve people, so the solutions we deliver are human-centered — thoughtful, practical, useful and designed to create serious impact.",
    supportingPoints: [
      "Expertise in AI integration, automation and enterprise systems.",
      "Human-centered design and accessibility built into the process.",
      "Collaborative discovery with client stakeholders and end users.",
    ],
    whyItMatters:
      "Tech leaders want innovation that's responsible and user focused. This positions Phase2 as not just technical, but thoughtful — blending cutting-edge tools with real-world empathy.",
  },
  {
    headline: "Big enough to deliver. Focused enough to care.",
    body: "Success takes more than skills and expertise. It takes collaboration. So we take a responsive, relationship-driven approach to each project. And we don't just build what's asked for, we help you define what you really need and we deliver solutions that actually work.",
    supportingPoints: [
      "Cross-functional teams that flex to project needs.",
      "Direct access to senior talent throughout the engagement.",
      "Long-term relationships with clients who stay with us for years.",
    ],
    whyItMatters:
      "This addresses the tension many clients feel between boutique firms (who care but can't scale) and large consultancies (who can scale but don't care). Phase2 bridges that gap.",
  },
];

const talentMessages: Message[] = [
  {
    headline: "Problems that matter. Solutions that have an impact.",
    body: "Clients come to us with complex challenges, and each project is a chance to deliver something big: a brilliant-but-practical solution that can create an impact, drive business success and truly improve how people work and live.",
    supportingPoints: [
      "Real-world challenges across healthcare, energy, public service, and beyond.",
      "Opportunities to shape systems that drive real change.",
      "Work that serves both clients and our communities.",
    ],
    whyItMatters:
      "Purpose-driven professionals want to work on something significant. This message reinforces that Phase2's work has substance and impact, not just speed and sprints.",
  },
  {
    headline: "You'll take ownership. We mean it.",
    body: "Phase2 is an employee-owned company. Here, you'll have full autonomy and plenty of responsibility, plus countless opportunities to lead and to grow as a professional. We'll set you up to succeed because success is shared by us all.",
    supportingPoints: [
      "Ownership mindset is not just a phrase — it's a structure (ESOP).",
      "Leaders at every level: no gatekeeping, no micromanaging.",
      "Clear expectations, real accountability and respect.",
    ],
    whyItMatters:
      "This speaks to a culture of trust, self-direction, and shared success — key to attracting entrepreneurial, experienced talent who want to do the best work of their careers without corporate red tape.",
  },
  {
    headline: "You'll love the energy and the people.",
    body: "At Phase2, our culture is everything, and every employee contributes to it. We collaborate, speak up and step up. We always have each other's backs. We take our work seriously, but not ourselves. There's an energy here that brings out the very best in people.",
    supportingPoints: [
      '"Give a shit" mindset — care for the craft, client and one another.',
      "Candid, curious and collaborative culture.",
      "Fun, friendly energy that makes work feel more human.",
    ],
    whyItMatters:
      "Culture is often the tipping point for high-quality candidates. This message emphasizes that beyond talent and execution, Phase2 is a place where people want to show up and belong.",
  },
];

function MessageCard({ message }: { message: Message }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="font-heading text-xl font-bold tracking-tight text-foreground mb-3">
        {message.headline}
      </h3>
      <p className="text-base leading-relaxed text-muted-foreground mb-5">
        {message.body}
      </p>

      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Supporting Points
        </p>
        <ul className="space-y-1.5">
          {message.supportingPoints.map((point, i) => (
            <li key={i} className="text-sm leading-relaxed text-cyan">
              <span className="text-cyan/50 mr-2">&#8226;</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Why It Matters
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {message.whyItMatters}
        </p>
      </div>
    </div>
  );
}

export default function MessagingPage() {
  return (
    <div>
      <PageHeader
        title="_Voice & Messaging"
        description="How Phase2_ speaks — our tone, key messages, and the language patterns that make us sound like us."
        status="ready"
      />

      <div className="space-y-20">
        {/* Client-Focused */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _ClientFocused
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl">
            Messages designed for prospects, partners, and decision-makers.
            These address the core anxieties and aspirations of the people who
            hire us.
          </p>
          <div className="grid gap-10 lg:grid-cols-3">
            {clientMessages.map((msg) => (
              <MessageCard key={msg.headline} message={msg} />
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Talent-Focused */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _TalentFocused
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl">
            Messages for the people we want to recruit and retain. These speak
            to purpose, ownership, and culture — the things that matter most to
            exceptional talent.
          </p>
          <div className="grid gap-10 lg:grid-cols-3">
            {talentMessages.map((msg) => (
              <MessageCard key={msg.headline} message={msg} />
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Tone Guidelines */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-8">
            _ToneOfVoice
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                label: "We sound like",
                items: [
                  "A sharp colleague who respects your time",
                  "Confident but never arrogant",
                  "Direct, clear, and warm",
                  "People who build things and ship things",
                ],
              },
              {
                label: "We never sound like",
                items: [
                  "A corporate press release",
                  "A startup trying too hard",
                  "Vague or buzzword-heavy",
                  "Cold, distant, or robotic",
                ],
              },
            ].map((col) => (
              <div key={col.label}>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  {col.label}<span className="text-cyan">_</span>
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-base text-muted-foreground"
                    >
                      <span className="text-pine mr-2">&#8212;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
