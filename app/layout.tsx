import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MobileCTA from "@/components/MobileCTA";
import ExitIntent from "@/components/ExitIntent";
import PageViewTracker from "@/components/PageViewTracker";
import { GA_ID } from "@/lib/analytics";
import { SITE_URL } from "@/lib/locations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg";

export const metadata: Metadata = {
  title: {
    default: "Tanned Co. | Sydney's Automated Spray Tan Studio",
    template: "%s | Tanned Co.",
  },
  description:
    "Sydney's first automated spray tanning studio. Private booths, flawless results, 5 locations open 7 days a week Caringbah, Woollahra, Kings Park, Edensor Park & Smeaton Grange.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    siteName: "Tanned Co.",
    locale: "en_AU",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Tanned Co. Sydney's Automated Spray Tan Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
    icons: {
          icon: "/logo.png",
          apple: "/logo.png",
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
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        <PageViewTracker />
        {children}
        <MobileCTA />
        <ExitIntent />
      </body>
    </html>
  );
}
