import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";

const OG_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg";

export const metadata: Metadata = {
  title: "Book Your Tan",
  description:
    "Book your automated spray tan at Tanned Co. online in seconds. Choose from 5 Sydney locations — Caringbah, Woollahra, Kings Park, Edensor Park or Smeaton Grange. Sessions from $35.",
  alternates: { canonical: `${SITE_URL}/book-now` },
  openGraph: {
    title: "Book Your Tan | Tanned Co.",
    description:
      "Book your spray tan online in seconds. 5 Sydney locations, sessions from $35.",
    url: `${SITE_URL}/book-now`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
