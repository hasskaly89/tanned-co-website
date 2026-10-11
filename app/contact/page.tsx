import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, studioListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Contact Tanned Co. | 5 Sydney Spray Tan Studios" },
  description:
    "Contact Tanned Co. Call 1300 826 633 or email us. 5 Sydney studios in Caringbah, Edensor Park, Kings Park, Smeaton Grange and Woollahra.",
  alternates: { canonical: "https://www.tannedco.com.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Contact", path: "/contact" }]), studioListSchema()]} />
      <ContactClient />
    </>
  );
}
