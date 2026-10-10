import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";
import { CASUAL, GLOW_CLUB, TEN_PACK, formatAud } from "@/lib/pricing";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    `Simple, transparent spray tan pricing at Tanned Co. Casual sessions from ${formatAud(CASUAL.price)} with no commitment, a 10 pack for ${formatAud(TEN_PACK.price)}, or Glow Club membership at ${formatAud(GLOW_CLUB.monthly)} a month.`,
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing | Tanned Co.",
    description: `Spray tan sessions from ${formatAud(CASUAL.price)}. 10 pack ${formatAud(TEN_PACK.price)}. Glow Club ${formatAud(GLOW_CLUB.monthly)} a month.`,
    url: `${SITE_URL}/pricing`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
