import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";
import { CASUAL, GLOW_CLUB, TEN_PACK, formatAud } from "@/lib/pricing";

const OG_IMAGE =
  "/images/two-women-white-swimwear.jpg";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    `Simple, transparent spray tan pricing at Tanned Co. Casual tans ${formatAud(CASUAL.price)} with no commitment, a 10 pack for ${formatAud(TEN_PACK.price)}, or Glow Club membership at ${formatAud(GLOW_CLUB.monthly)} a month.`,
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing | Tanned Co.",
    description: `Casual tans ${formatAud(CASUAL.price)}. 10 pack ${formatAud(TEN_PACK.price)}. Glow Club ${formatAud(GLOW_CLUB.monthly)} a month.`,
    url: `${SITE_URL}/pricing`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
