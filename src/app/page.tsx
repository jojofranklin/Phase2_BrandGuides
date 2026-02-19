import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          Phase2<span className="text-cyan">_</span>Design System
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          The brand guidelines and UI/UX component library for Phase2_.
          Everything you need to build on-brand, consistent experiences.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/brand/introduction"
          className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-cyan hover:shadow-md"
        >
          <h2 className="font-heading text-lg font-semibold group-hover:text-cyan">
            _BrandGuidelines
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Color, typography, logo, iconography, photography, and voice.
            The foundation of how Phase2_ shows up in the world.
          </p>
        </Link>

        <Link
          href="/ui/overview"
          className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-cyan hover:shadow-md"
        >
          <h2 className="font-heading text-lg font-semibold group-hover:text-cyan">
            _UI/UX Library
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Components, patterns, and design tokens for building Phase2_
            digital products with consistency.
          </p>
        </Link>
      </div>
    </div>
  );
}
