import Link from "next/link";
import { PageHeader } from "@/components/page-header";

const sections = [
  {
    title: "_Buttons",
    href: "/ui/buttons",
    description: "Primary, secondary, destructive, outline, ghost, and link variants in multiple sizes.",
  },
  {
    title: "_Cards",
    href: "/ui/cards",
    description: "Content containers with headers, footers, and composable layouts.",
  },
  {
    title: "_Forms",
    href: "/ui/forms",
    description: "Input, textarea, select, checkbox, radio, switch, slider, and label components.",
  },
  {
    title: "_Data Display",
    href: "/ui/data-display",
    description: "Badge, avatar, progress bar, and separator for presenting information.",
  },
  {
    title: "_Feedback",
    href: "/ui/feedback",
    description: "Alert, dialog, and tooltip for communicating status and actions.",
  },
  {
    title: "_Layout",
    href: "/ui/layout-components",
    description: "Tabs, accordion, and separator for organizing content.",
  },
];

export default function UIOverviewPage() {
  return (
    <div>
      <PageHeader
        title="_Overview"
        description="The Phase2_ component library — shadcn/ui components themed with our brand tokens. Copy them into your project, they're yours."
        status="ready"
      />

      <div className="space-y-12">
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _WhatThisIs
          </h2>
          <div className="space-y-4 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              This is a themed component reference built on{" "}
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan underline underline-offset-2"
              >
                shadcn/ui
              </a>{" "}
              + Tailwind CSS. Every component uses Phase2_ colors, typography, and
              spacing out of the box.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The theme is defined as CSS variables — swap them in and your components
              are branded. Dark mode included.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _QuickStart
          </h2>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="p-5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-cyan text-white text-xs font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="text-sm font-medium text-foreground">Init shadcn in your project</p>
                  <code className="text-xs text-muted-foreground font-mono">npx shadcn@latest init</code>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-cyan text-white text-xs font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="text-sm font-medium text-foreground">Copy the Phase2_ theme</p>
                  <p className="text-xs text-muted-foreground">
                    Grab the CSS variables from the{" "}
                    <Link href="/ui/theme" className="text-cyan underline underline-offset-2">
                      Theme page
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-cyan text-white text-xs font-bold flex items-center justify-center">3</span>
                <div>
                  <p className="text-sm font-medium text-foreground">Add components</p>
                  <code className="text-xs text-muted-foreground font-mono">npx shadcn@latest add button card input</code>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            See the full{" "}
            <Link href="/ui/installation" className="text-cyan underline underline-offset-2">
              Installation guide
            </Link>{" "}
            for details.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-6">
            _Components
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-xl border border-border p-5 transition-colors hover:border-cyan/30 hover:bg-cyan/5"
              >
                <h3 className="font-heading text-sm font-bold text-foreground mb-1">
                  {s.title}<span className="text-cyan">_</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
