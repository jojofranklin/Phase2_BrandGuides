"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-lg border border-border bg-abyss overflow-hidden">
      {label && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <span className="text-[10px] font-mono text-white/50">{label}</span>
          <button
            onClick={handleCopy}
            className="text-[10px] font-mono text-cyan hover:text-white transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm text-ice/80 font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const steps = [
  {
    title: "Prerequisites",
    description: "You'll need Node.js 18+ and a Next.js or Vite project.",
    code: null,
    codeLabel: undefined,
  },
  {
    title: "Initialize shadcn/ui",
    description:
      "Run the shadcn init command in your project root. When prompted, choose the \"new-york\" style.",
    code: "npx shadcn@latest init",
    codeLabel: "terminal",
  },
  {
    title: "Install fonts",
    description:
      "Phase2_ uses Manrope for headings and Sora for body text. Both are on Google Fonts.",
    code: `// app/layout.tsx
import { Manrope, Sora } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${manrope.variable} \${sora.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`,
    codeLabel: "app/layout.tsx",
  },
  {
    title: "Apply the Phase2_ theme",
    description:
      "Replace the default CSS variables in your globals.css with the Phase2_ tokens. Copy the full theme from the Theme page.",
    code: `:root {
  /* Phase2_ Brand Color Tokens */
  --abyss: #00233A;
  --indigo: #1A3B6F;
  --cyan: #16A3D6;
  --ice: #9AE4FF;
  --coral: #F5543A;
  --pine: #1F4E52;

  /* shadcn/ui semantic tokens */
  --radius: 0.625rem;
  --background: #FAFBFC;
  --foreground: #00233A;
  --card: #FFFFFF;
  --card-foreground: #00233A;
  --popover: #FFFFFF;
  --popover-foreground: #00233A;
  --primary: #00233A;
  --primary-foreground: #FFFFFF;
  --secondary: #F0F4F8;
  --secondary-foreground: #00233A;
  --muted: #F0F4F8;
  --muted-foreground: #5A6B7B;
  --accent: #16A3D6;
  --accent-foreground: #FFFFFF;
  --destructive: #F5543A;
  --border: #E2E8F0;
  --input: #E2E8F0;
  --ring: #16A3D6;
}`,
    codeLabel: "globals.css — light mode",
  },
  {
    title: "Add dark mode",
    description:
      "Add the .dark selector for dark mode support. Toggle by adding/removing the 'dark' class on <html>.",
    code: `.dark {
  --background: #001220;
  --foreground: #E8F4FA;
  --card: #00233A;
  --card-foreground: #E8F4FA;
  --popover: #00233A;
  --popover-foreground: #E8F4FA;
  --primary: #9AE4FF;
  --primary-foreground: #00233A;
  --secondary: #0A2E47;
  --secondary-foreground: #E8F4FA;
  --muted: #0A2E47;
  --muted-foreground: #7BA3BE;
  --accent: #16A3D6;
  --accent-foreground: #FFFFFF;
  --destructive: #F5543A;
  --border: #143350;
  --input: #143350;
  --ring: #16A3D6;
}`,
    codeLabel: "globals.css — dark mode",
  },
  {
    title: "Add components",
    description:
      "Install any component you need. They'll automatically use your Phase2_ theme.",
    code: "npx shadcn@latest add button card input badge tabs dialog",
    codeLabel: "terminal",
  },
];

export default function InstallationPage() {
  return (
    <div>
      <PageHeader
        title="_Installation"
        description="Get Phase2_ themed components into your project in under five minutes. shadcn/ui + Tailwind CSS + our brand tokens."
        status="ready"
      />

      <div className="space-y-12">
        {steps.map((step, i) => (
          <section key={step.title}>
            <div className="flex items-start gap-4 mb-4">
              <span className="shrink-0 w-7 h-7 rounded-full bg-abyss text-white text-xs font-bold flex items-center justify-center dark:bg-ice dark:text-abyss">
                {i + 1}
              </span>
              <div>
                <h2 className="font-heading text-lg font-bold text-foreground">
                  {step.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
            </div>
            {step.code && (
              <div className="ml-11">
                <CodeBlock code={step.code} label={step.codeLabel} />
              </div>
            )}
          </section>
        ))}

        <hr className="border-border" />

        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-4">
            _ThatIsIt
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Your project now has Phase2_ branded components. Browse the component
            pages to see what&apos;s available and how they look with the theme applied.
          </p>
        </section>
      </div>
    </div>
  );
}
