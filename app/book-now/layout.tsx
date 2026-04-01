import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Tan",
  description:
    "Book your automated spray tan session at Tanned Co. online in seconds. Choose from 5 Sydney locations — Caringbah, Woollahra, Kings Park, Edensor Park or Smeaton Grange.",
};

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
