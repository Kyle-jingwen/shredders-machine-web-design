import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveChat } from "@/components/layout/LiveChat";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | Industrial Shredder & Dewatering Screw Press`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "industrial shredder",
    "dewatering screw press",
    "two shaft shredder",
    "food waste depackaging machine",
    "medical waste shredder",
    "waste recycling equipment",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.brand} | Industrial Shredder & Dewatering Screw Press`,
    description: site.description,
    siteName: site.brand,
    images: [{ url: "/images/hero/banner-1.jpg", width: 1920, height: 800, alt: site.brand }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans">
        <Navbar />
        <main className="pt-[var(--nav-h,88px)]">{children}</main>
        <Footer />
        <LiveChat />
        <Analytics />
      </body>
    </html>
  );
}
