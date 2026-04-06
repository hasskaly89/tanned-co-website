import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Tanned Co Locations | 5 Sydney Spray Tan Studios | Contact Us",
  description:
    "Find your nearest Tanned Co studio. 5 Sydney locations in Caringbah, Edensor Park, Kings Park, Smeaton Grange and Woollahra. Open 7 days.",
  alternates: { canonical: "https://www.tannedco.com.au/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
