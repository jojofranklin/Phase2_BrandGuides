import { PageHeader } from "@/components/page-header";

type DownloadGroup = {
  name: string;
  description: string;
  items: { label: string; file: string }[];
  path: string;
};

type TokenGroup = {
  name: string;
  description: string;
  items: { label: string; value: string }[];
};

type AssetGroup = DownloadGroup | TokenGroup;

function isDownloadGroup(g: AssetGroup): g is DownloadGroup {
  return "path" in g;
}

const assetGroups: AssetGroup[] = [
  {
    name: "_Logos",
    description:
      "Full wordmark, compact icon, and approved color variants. SVGs with outlined text for guaranteed accuracy.",
    items: [
      { label: "Wordmark — Gradient on Light BG", file: "Phase2_WordmarkGradientLightBG.svg" },
      { label: "Wordmark — Gradient on Dark BG", file: "Phase2_WordmarkGradientDarkBG.svg" },
      { label: "Wordmark — Gradient on Indigo", file: "Phase2_WordmarkGradientIndigo.svg" },
      { label: "Wordmark — White on Gradient", file: "Phase2_WordmarkWhiteOnGradient.svg" },
      { label: "Icon — Dark", file: "Phase2_IconDark.svg" },
      { label: "Icon — Light", file: "Phase2_IconLight.svg" },
    ],
    path: "/logos",
  },
  {
    name: "_ColorTokens",
    description:
      "Brand color values in multiple formats. Reference the Color page for full tints, shades, and usage guidance.",
    items: [
      { label: "Abyss_DeepNavy", value: "#00233A" },
      { label: "Blueprint_Indigo", value: "#1A3B6F" },
      { label: "Pulse_BoldCyan", value: "#14A3D6" },
      { label: "Clarity_IceBlue", value: "#9AE4FF" },
      { label: "Drive_CoralRush", value: "#F5543A" },
      { label: "Homage_Pine", value: "#1F4E52" },
    ],
  },
  {
    name: "_Typography",
    description:
      "Manrope for headings and display. Sora for body text. Both available from Google Fonts.",
    items: [
      { label: "Manrope", value: "fonts.google.com/specimen/Manrope" },
      { label: "Sora", value: "fonts.google.com/specimen/Sora" },
    ],
  },
];

const quickLinks = [
  {
    label: "Logo System",
    description: "Download all logo variants, use the generator, build a rolodex.",
    href: "/brand/logo",
  },
  {
    label: "Color Palette",
    description: "Full palette with tints, shades, gradient builder, and usage notes.",
    href: "/brand/color",
  },
  {
    label: "Typography",
    description: "Type scale, font pairings, and specimen examples.",
    href: "/brand/typography",
  },
  {
    label: "Logo Rules",
    description: "Dos, don'ts, and the reasoning behind our logo guidelines.",
    href: "/brand/logo-rules",
  },
  {
    label: "Voice & Messaging",
    description: "Key messages, tone of voice, and copywriting patterns.",
    href: "/brand/messaging",
  },
  {
    label: "Brand In Use",
    description: "See how the brand shows up across social, presentations, and web.",
    href: "/brand/in-use",
  },
];

export default function AssetsPage() {
  return (
    <div>
      <PageHeader
        title="_Asset Downloads"
        description="Everything you need to represent Phase2_ correctly. Logos, colors, typography, and quick links to every section of the guide."
        status="ready"
      />

      <div className="space-y-20">
        {/* Asset groups */}
        {assetGroups.map((group, gi) => (
          <section key={group.name}>
            {gi > 0 && <hr className="border-border mb-20" />}
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
              {group.name}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl">
              {group.description}
            </p>

            {isDownloadGroup(group) ? (
              /* Downloadable files */
              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={`${group.path}/${item.file}`}
                    download
                    className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:bg-secondary"
                  >
                    <span className="text-foreground font-medium">
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      SVG
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              /* Token reference */
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
                  >
                    {item.value.startsWith("#") && (
                      <span
                        className="shrink-0 w-5 h-5 rounded border border-border"
                        style={{ backgroundColor: item.value }}
                      />
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <hr className="border-border" />

        {/* Quick links to other guide pages */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _QuickLinks
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl">
            Jump to any section of the brand guide for full details, interactive
            tools, and usage guidance.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group rounded-xl border border-border p-5 transition-colors hover:border-cyan/30 hover:bg-cyan/5"
              >
                <h3 className="font-heading text-base font-bold text-foreground mb-1">
                  {link.label}<span className="text-cyan">_</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Figma source */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">
            _FigmaSource
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-6 max-w-2xl">
            The canonical source file for the Phase2_ brand system. All assets,
            components, and design tokens live here.
          </p>
          <a
            href="https://www.figma.com/design/8oYFQIumBhFSRcl00YfqMj/Phase2_BrandGuidelines"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-abyss px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo"
          >
            Open in Figma
            <span className="text-xs opacity-60">&#8599;</span>
          </a>
        </section>
      </div>
    </div>
  );
}
