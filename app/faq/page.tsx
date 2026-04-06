import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { categories } from "./faq-data";

export const metadata: Metadata = {
  title: "Spray Tan FAQ | Common Questions Answered | Tanned Co Sydney",
  description:
    "Got questions about automated spray tanning? Find answers about our booths, tan colours, aftercare, pricing, and what to expect at Tanned Co Sydney.",
  alternates: { canonical: "https://www.tannedco.com.au/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
