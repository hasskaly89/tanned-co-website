import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";
import { GLOW_CLUB, GLOW_CLUB_PER_TAN_UNDER, formatAud } from "@/lib/pricing";

const PER_MONTH = `${GLOW_CLUB.tansPerMonth} spray tans a month for ${formatAud(GLOW_CLUB.monthly)}, under ${formatAud(GLOW_CLUB_PER_TAN_UNDER)} a tan`;

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg";

export const metadata: Metadata = {
  title: "Glow Club Membership",
  description:
    `Join Glow Club: ${PER_MONTH}. Access to all 5 Sydney studios through the app, a birthday tan on us and more.`,
  alternates: { canonical: `${SITE_URL}/glow-club` },
  openGraph: {
    title: "Glow Club Membership | Tanned Co.",
    description: `${PER_MONTH}. Founding member perks.`,
    url: `${SITE_URL}/glow-club`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function GlowClubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
