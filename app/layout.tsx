import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Geist_Mono,
  Newsreader,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f9f7f1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "SAHIL K. CHHATBAR — Full-Stack Software Engineer",
    template: "%s | SAHIL K. CHHATBAR",
  },
  description:
    "Portfolio of Sahil K. Chhatbar. Full-Stack Software Developer specializing in Next.js, React, TypeScript, Node.js, and modern web architectures.",
  keywords: [
    "Sahil K. Chhatbar",
    "Sahil Chhatbar",
    "Software Developer",
    "Engineer",
    "Full-Stack Engineer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Frontend Developer",
    "Lamda Logs",
  ],
  authors: [
    { name: "Sahil K. Chhatbar", url: "https://github.com/SahilChhatbar" },
  ],
  creator: "Sahil K. Chhatbar",
  publisher: "Sahil K. Chhatbar",
  metadataBase: new URL("https://sahilchhatbar.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahilchhatbar.dev",
    title: "SAHIL K. CHHATBAR — Full-Stack Software Engineer",
    description:
      "Portfolio showcasing projects, experience, skills, and full-stack software development by Sahil K. Chhatbar.",
    siteName: "Sahil Chhatbar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAHIL K. CHHATBAR — Full-Stack Software Engineer",
    description:
      "Portfolio showcasing projects, experience, skills, and full-stack software development by Sahil K. Chhatbar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${newsreader.variable} ${cinzel.variable} ${geistMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-paper-bg text-ink-black selection:bg-ink-primary selection:text-paper-bg"
      >
        {/* Outer Broadsheet Paper Container */}
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 flex-1 flex flex-col">
          {/* Header Area */}
          <Header />

          {/* Navigation Ribbon */}
          <Navigation />

          {/* Main Portfolio Content */}
          <main className="flex-1 w-full my-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
