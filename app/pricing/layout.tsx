import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent spray tan pricing at Tanned Co. Casual sessions from $39 with no commitment, a 10-pack for $360, or Glow Club membership at $89 a month.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing | Tanned Co.",
    description: "Spray tan sessions from $39. 10-pack $360. Glow Club $89 a month.",
    url: `${SITE_URL}/pricing`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
