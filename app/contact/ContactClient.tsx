"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import PageHero from "@/components/PageHero";
import { MailIcon, PhoneIcon, InstagramIcon, TikTokIcon, FacebookIcon } from "@/components/Icons";
import { trackEvent } from "@/lib/analytics";
import { IS_PREVIEW, PREVIEW_FORM_MESSAGE } from "@/lib/preview";

const enquiryTypes = [
  "General Enquiry",
  "Booking Help",
  "Product / Tan Question",
  "Franchise Information",
  "Partnership / Collaboration",
  "Other",
];

const locations = [
  "Caringbah",
  "Edensor Park",
  "Kings Park",
  "Smeaton Grange",
  "Woollahra",
  "Not location specific / General",
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/tannedco_", icon: <InstagramIcon className="w-4 h-4" /> },
  { label: "TikTok", href: "https://www.tiktok.com/@tannedco_", icon: <TikTokIcon className="w-4 h-4" /> },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100086326464692", icon: <FacebookIcon className="w-4 h-4" /> },
];

const labelClass = "block text-sm font-medium text-ink mb-2";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    location: "",
    message: "",
    website: "", // honeypot, left empty by real visitors
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", enquiryType: "", location: "", message: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <LocalBusinessSchema />
      <Navbar activePath="/contact" />

      <PageHero
        eyebrow="We'd love to hear from you"
        title="Contact us."
        intro="Got a question, franchise enquiry, or just want to say hi? Drop us a message."
        image="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg"
        imageAlt="Tanned Co. studio"
      />

      <section className="py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.15fr] gap-14 md:gap-20">
          {/* Contact info */}
          <div>
            <p className="eyebrow mb-4">Contact info</p>
            <h2 className="display-lg mb-8">Get in touch.</h2>
            <div className="space-y-4 mb-10">
              <a
                href="mailto:hello@tannedco.com.au"
                onClick={() => trackEvent("email_click", { source: "contact_page" })}
                className="flex items-center gap-3 text-lg text-ink hover:text-bronze-text transition-colors"
              >
                <MailIcon className="w-5 h-5 text-bronze" /> hello@tannedco.com.au
              </a>
              <a
                href="tel:1300826633"
                onClick={() => trackEvent("phone_click", { source: "contact_page" })}
                className="flex items-center gap-3 text-lg text-ink hover:text-bronze-text transition-colors"
              >
                <PhoneIcon className="w-5 h-5 text-bronze" /> 1300 826 633
              </a>
            </div>

            <div className="border-t border-line py-7">
              <h3 className="eyebrow mb-4">Follow us</h3>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-body bg-white border border-line rounded-full px-4 py-2.5 hover:border-bronze hover:text-bronze-text transition-colors"
                  >
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-line py-7">
              <h3 className="eyebrow mb-4">Quick links</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-now" className="btn btn-dark">Book your tan</Link>
                <Link href="/locations" className="btn btn-outline">View all studios</Link>
              </div>
            </div>

            <p className="text-body text-sm border-t border-line pt-7">
              Looking for a quick answer? <Link href="/faq" className="text-link">Check the FAQ</Link>
            </p>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-[28px] border border-line p-7 md:p-10">
            <h3 className="display-md mb-7">Send us a message.</h3>

            {status === "success" ? (
              <div role="status" className="bg-sand border border-line rounded-3xl p-8 text-center">
                <h4 className="font-display font-medium text-3xl mb-2">Message sent.</h4>
                <p className="text-body mb-6">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                <button onClick={() => setStatus("idle")} className="text-link cursor-pointer">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} className="hidden" />
                <div>
                  <label htmlFor="name" className={labelClass}>Your name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="field !bg-cream"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="field !bg-cream"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Mobile number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0400 000 000"
                      className="field !bg-cream"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enquiryType" className={labelClass}>Enquiry type</label>
                    <select
                      id="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="field !bg-cream cursor-pointer"
                    >
                      <option value="" disabled>Select an option...</option>
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className={labelClass}>Location</label>
                    <select
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="field !bg-cream cursor-pointer"
                    >
                      <option value="" disabled>Select a location...</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="field !bg-cream resize-none"
                  />
                </div>
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-700">
                    Something went wrong. Please try again or email us directly at hello@tannedco.com.au
                  </p>
                )}
                <button type="submit" disabled={status === "loading" || IS_PREVIEW} className="btn btn-dark w-full !py-4">
                  {status === "loading" ? "Sending..." : "Send message"}
                </button>
                {IS_PREVIEW && <p className="text-muted text-xs text-center">{PREVIEW_FORM_MESSAGE}</p>}
                <p className="text-xs text-muted text-center">
                  We use your details only to reply to your enquiry. See our <Link href="/privacy-policy" className="text-link">privacy policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
