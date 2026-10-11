import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { categories } from "./faq-data";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Spray Tan FAQ | Tanned Co. Sydney" },
  description:
    "Answers about automated spray tanning at Tanned Co.: the booths, shades, aftercare, pricing and what to expect at our Sydney studios.",
  alternates: { canonical: "https://www.tannedco.com.au/faq" },
};


export default function FAQPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "FAQ", path: "/faq" }]), faqSchema(categories.flatMap((c) => c.faqs))]} />
      <FAQClient />
    </>
  );
}
