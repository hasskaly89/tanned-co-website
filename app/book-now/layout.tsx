import type { Metadata } from "next";
import { SITE_URL } from "@/lib/locations";
import { CASUAL, formatAud } from "@/lib/pricing";

const OG_IMAGE =
  "/images/two-women-white-swimwear.jpg";

export const metadata: Metadata = {
  title: "Book Your Tan",
  description:
    `Book an automated spray tan online at one of 5 Tanned Co. studios across Sydney. Casual tans ${formatAud(CASUAL.price)}. Open 7 days, 6am to midnight.`,
  alternates: { canonical: `${SITE_URL}/book-now` },
  openGraph: {
    title: "Book Your Tan | Tanned Co.",
    description:
      `Book a spray tan online in under a minute. 5 Sydney studios. Casual tans ${formatAud(CASUAL.price)}.`,
    url: `${SITE_URL}/book-now`,
    images: [{ url: OG_IMAGE, width: 1200, height: 800 }],
  },
};

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
