import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export default function IntroductionPage() {
  return (
    <div>
      <PageHeader
        title="_Introduction"
        description="For many, it's a logo, a color, a tagline. But at Phase2_, our brand isn't static. It's a prompt. A starting point."
      />

      {/* Brand Manifesto */}
      <div className="mb-12 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          It&apos;s how the world experiences us: in every line of code, every
          conversation, every choice.
        </p>
        <p>
          Every interaction is an underscore. A moment to define what comes
          next. Over time, those moments build into something lasting — trust,
          clarity, and connection that show up again and again, by design.
        </p>
        <p>
          This guide exists to help us protect and evolve that system. It
          outlines how we show up visually, verbally, consistently — in ways
          that align with who we are and who we&apos;re becoming.
        </p>
        <p className="text-foreground font-medium">
          Use it well.
          <br />
          Because Phase2_ is only as strong as what we type after the cursor.
        </p>
      </div>

      {/* Quick Links */}
      <section>
        <h2 className="font-heading text-xl font-semibold mb-4">
          _WhatsInside
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "_Brand Strategy",
              description: "Vision, mission, values, and the framework behind who we are.",
              href: "/brand/strategy",
            },
            {
              title: "_Color",
              description: "Primary and secondary palettes with tokens, hex values, and usage.",
              href: "/brand/color",
            },
            {
              title: "_Typography",
              description: "Manrope + Sora — our type system for headlines and body.",
              href: "/brand/typography",
            },
            {
              title: "_Logo",
              description: "The wordmark, icon, color combos, and how to use them.",
              href: "/brand/logo",
            },
            {
              title: "_Iconography",
              description: "Custom icon set for capabilities, values, and services.",
              href: "/brand/iconography",
            },
            {
              title: "_Photography",
              description: "Photo guidelines, categories, and visual integrity standards.",
              href: "/brand/photography",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-cyan hover:shadow-sm"
            >
              <h3 className="font-heading text-sm font-semibold group-hover:text-cyan">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 rounded-lg border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          For questions or information regarding the Phase2_ brand, please
          contact{" "}
          <span className="font-medium text-foreground">Kalynn Pierce</span>{" "}
          —{" "}
          <a
            href="mailto:kalynnp@phase2online.com"
            className="text-cyan hover:underline"
          >
            kalynnp@phase2online.com
          </a>
        </p>
      </section>
    </div>
  );
}
