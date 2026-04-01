import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileCTA from "@/components/MobileCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tanned Co. | Sydney's Automated Spray Tan Studio",
    template: "%s | Tanned Co.",
  },
  description:
    "Sydney's first automated spray tanning studio. Private booths, flawless results, 5 locations open 7 days a week — Caringbah, Woollahra, Kings Park, Edensor Park & Smeaton Grange.",
  openGraph: {
    siteName: "Tanned Co.",
    locale: "en_AU",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        {children}
        <MobileCTA />
      </body>
    </html>
  );
}
