import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Rubik } from "next/font/google";
import "./globals.css";

// Base soft font for the entire interface.
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-rubik"
});

// Accent font for background/semi-transparent labels.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter"
});

// Elegant serif font for headings.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: "Lefevralov Store",
  description: "Authentic clothing only.",
  metadataBase: new URL("https://lefevralov-store.vercel.app"),
  openGraph: {
    title: "Lefevralov Store",
    description: "Authentic clothing only.",
    type: "website",
    url: "https://lefevralov-store.vercel.app"
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/ic.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0b0b10" };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${cormorant.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`${rubik.className} bg-brand-navy text-white`}>
        {/* Hidden link for quick keyboard navigation to content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-brand-gold focus:text-slate-900"
        >
          Skip to main content
        </a>
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 z-0 page-noise" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}


