export type NavItem = {
  title: string;
  href: string;
  icon?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export type TabConfig = {
  id: string;
  label: string;
  groups: NavGroup[];
};

export const navigation: TabConfig[] = [
  {
    id: "brand",
    label: "_BrandGuidelines",
    groups: [
      {
        title: "Getting Started",
        items: [
          { title: "_Introduction", href: "/brand/introduction" },
          { title: "_Brand Strategy", href: "/brand/strategy" },
        ],
      },
      {
        title: "Foundation",
        items: [
          { title: "_Color", href: "/brand/color" },
          { title: "_Typography", href: "/brand/typography" },
          { title: "_Iconography", href: "/brand/iconography" },
          { title: "_Photography", href: "/brand/photography" },
        ],
      },
      {
        title: "Identity",
        items: [
          { title: "_Logo", href: "/brand/logo" },
          { title: "_Logo Rules", href: "/brand/logo-rules" },
          { title: "_Voice & Messaging", href: "/brand/messaging" },
        ],
      },
      {
        title: "Resources",
        items: [
          { title: "_Asset Downloads", href: "/brand/assets" },
          { title: "_In Use", href: "/brand/in-use" },
        ],
      },
    ],
  },
  {
    id: "ui",
    label: "_UI/UX Library",
    groups: [
      {
        title: "How to Use",
        items: [
          { title: "_Overview", href: "/ui/overview" },
          { title: "_Installation", href: "/ui/installation" },
          { title: "_Theme", href: "/ui/theme" },
        ],
      },
      {
        title: "Components",
        items: [
          { title: "_Buttons", href: "/ui/buttons" },
          { title: "_Cards", href: "/ui/cards" },
          { title: "_Forms", href: "/ui/forms" },
          { title: "_Data Display", href: "/ui/data-display" },
          { title: "_Feedback", href: "/ui/feedback" },
          { title: "_Layout", href: "/ui/layout-components" },
        ],
      },
    ],
  },
];
