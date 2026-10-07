"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { categories } from "./faq-data";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FAQClient() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath="/faq" />

      <PageHero
        eyebrow="Got questions?"
        title="FAQs."
        intro="Everything you need to know before your first tan."
        image="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/2b8046e0-e9f5-424e-9f55-58d06dc9689f/DSCF3275.jpg"
        imageAlt="A Tanned Co. glow result"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
          {/* Category jump links */}
          <nav aria-label="FAQ categories" className="lg:sticky lg:top-28 self-start">
            <p className="eyebrow mb-4">Jump to</p>
            <ul className="flex flex-wrap lg:flex-col gap-2.5">
              {categories.map((cat) => (
                <li key={cat.title}>
                  <a
                    href={`#${slugify(cat.title)}`}
                    className="inline-block text-sm font-medium text-body hover:text-bronze-text border border-line lg:border-0 rounded-full px-4 py-2 lg:p-0 bg-white lg:bg-transparent transition-colors"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16 max-w-3xl">
            {categories.map((cat) => (
              <div key={cat.title} id={slugify(cat.title)} className="scroll-mt-28">
                <h2 className="display-md mb-6">{cat.title}</h2>
                <FaqAccordion
                  items={cat.faqs}
                  renderAnswer={
                    cat.title === "Before You Book"
                      ? (faq) => (
                          <>
                            {faq.a}{" "}
                            <Link href="/book-now" className="text-link">Book your session</Link>
                          </>
                        )
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        source="faq_cta"
        eyebrow="We're here to help"
        title="Still have questions?"
        text="Can't find what you're looking for? Reach out to our team. We're happy to help."
      >
        <Link href="/contact" className="btn btn-light">Get in touch</Link>
        <Link href="/book-now" className="btn btn-outline-light">Book your tan</Link>
      </CtaBand>

      <Footer />
    </div>
  );
}
