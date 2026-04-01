import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Locations",
  description:
    "Find your nearest Tanned Co. studio across 5 Sydney locations — Caringbah, Woollahra, Kings Park, Edensor Park and Smeaton Grange. Open 7 days a week.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
