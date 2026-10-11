import type { Metadata } from "next";
import { Geist, Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MobileCTA from "@/components/MobileCTA";
import ExitIntent from "@/components/ExitIntent";
import BronzeBot from "@/components/BronzeBot";
import PageViewTracker from "@/components/PageViewTracker";
import PreviewRibbon from "@/components/PreviewRibbon";
import ScrollReveal from "@/components/ScrollReveal";
import { IS_PREVIEW, isPreviewRequest } from "@/lib/preview";
import { GA_ID } from "@/lib/analytics";
import { SITE_URL } from "@/lib/locations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Heading typeface, chosen to match the Tanned Co. logo lettering.
const displayFont = Jost({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg";

// Analytics only load on production builds that are not Vercel preview deployments,
// so local runs and partner previews don't pollute GA. Same VERCEL_ENV=preview check
// as lib/preview.ts (build-time NEXT_PUBLIC_VERCEL_ENV, plus server VERCEL_ENV).
const ANALYTICS_ENABLED = process.env.NODE_ENV === "production" && !IS_PREVIEW && !isPreviewRequest();

export const metadata: Metadata = {
  title: {
    default: "Tanned Co. | Sydney's Automated Spray Tan Studio",
    template: "%s | Tanned Co.",
  },
  description:
    "Sydney's first automated spray tanning studio. Private booths, even results, 5 locations open 7 days a week: Caringbah, Woollahra, Kings Park, Edensor Park & Smeaton Grange.",
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
      // Lets Next.js switch smooth scrolling off during page changes, so new pages open at the top
      // while in-page anchor links still scroll smoothly (globals.css sets scroll-behavior: smooth).
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${displayFont.variable} h-full antialiased`}
    >
      {ANALYTICS_ENABLED && (
        <>
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
        </>
      )}
      <body className="min-h-full flex flex-col pb-[72px] md:pb-0">
        <PageViewTracker />
        {children}
        <ScrollReveal />
        <MobileCTA />
        <ExitIntent />
        <BronzeBot />
        <PreviewRibbon />
      </body>
    </html>
  );
}
