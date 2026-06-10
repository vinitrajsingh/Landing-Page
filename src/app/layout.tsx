import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Preloader } from "@/components/providers/preloader";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://creme-studio.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Creme — AI Product Studio for Startups",
    template: "%s · Creme Studio",
  },
  description:
    "We turn your idea into a launch-ready MVP in two weeks. An AI-native product studio trusted by 80+ founders — design, engineering and growth, no contracts.",
  keywords: [
    "AI product studio",
    "MVP development",
    "startup product design",
    "Next.js agency",
    "AI development",
  ],
  authors: [{ name: "Creme Studio" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Creme — AI Product Studio for Startups",
    description:
      "From idea to launch-ready MVP in two weeks. Trusted by 80+ founders.",
    siteName: "Creme Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creme — AI Product Studio for Startups",
    description: "From idea to launch-ready MVP in two weeks.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="bg-ink-950 text-cream antialiased">
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
