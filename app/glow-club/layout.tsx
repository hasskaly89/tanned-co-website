import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg";

export const metadata: Metadata = {
  title: "Glow Club Membership",
  description:
    "Join Glow Club: 3 spray tans a month for $89, under $30 a tan. Founding members get a Glow Key to all 5 Sydney locations, a birthday tan on us and more. Limited founding spots.",
  alternates: { canonical: `${SITE_URL}/glow-club` },
  openGraph: {
    title: "Glow Club Membership | Tanned Co.",
    description: "3 tans a month for $89, under $30 a tan. Founding member perks. Limited spots.",
    url: `${SITE_URL}/glow-club`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function GlowClubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
