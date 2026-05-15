import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const hanzi = Noto_Serif_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-hanzi",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Starlight Mandarin · Let's Learn Mandarin Together",
  description:
    "Expert native tutors, interactive curriculum, and flexible schedules for kids, adults, and business professionals. Master Mandarin and unlock a new world.",
  openGraph: {
    title: "Starlight Mandarin · 一起学中文",
    description:
      "Mandarin learning center and private tutoring — HSK preparation, conversational classes, and cultural immersion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${hanzi.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
