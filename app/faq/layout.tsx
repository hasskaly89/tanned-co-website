import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/2b8046e0-e9f5-424e-9f55-58d06dc9689f/DSCF3275.jpg";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Got questions about automated spray tanning? Answers about how booths work, how long to leave your tan on, what to wear, safety, aftercare, Rapid Venetian, Malibu and Monterey shades.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "FAQs | Tanned Co.",
    description: "Everything you need to know before your first automated spray tan.",
    url: `${SITE_URL}/faq`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
