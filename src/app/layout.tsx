import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { DesignSystemShell } from "@/components/layout/design-system-shell";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Phase2_ Design System",
  description:
    "Brand guidelines and UI/UX component library for Phase2_",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sora.variable} antialiased`}
      >
        <DesignSystemShell>{children}</DesignSystemShell>
      </body>
    </html>
  );
}
