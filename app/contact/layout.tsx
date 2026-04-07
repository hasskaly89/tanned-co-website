import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg";

export const metadata: Metadata = {
  title: "Contact & Locations",
  description:
    "Find your nearest Tanned Co. studio across 5 Sydney locations Caringbah, Woollahra, Kings Park, Edensor Park and Smeaton Grange. Open 7 days a week. Call 1300 826 633.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact & Locations | Tanned Co.",
    description: "5 Sydney spray tan locations, open 7 days. Find us near you.",
    url: `${SITE_URL}/contact`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
