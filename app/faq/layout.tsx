import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";

const OG_IMAGE =
  "/images/tan-close-up-legs.jpg";

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
