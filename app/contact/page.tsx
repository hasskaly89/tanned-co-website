"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const enquiryTypes = [
  "General Enquiry",
  "Booking Help",
  "Product / Tan Question",
  "Franchise Information",
  "Partnership / Collaboration",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "",
    message: "",
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
        setFormData({ name: "", email: "", enquiryType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <LocalBusinessSchema />
      <Navbar activePath="/contact" />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg"
          alt="Tanned Co. studio"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">We&apos;d Love to Hear From You</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Got a question, franchise enquiry, or just want to say hi? Drop us a message.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 md:py-28 bg-white text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          {/* Left: contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Contact Info</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">Get In Touch</h2>
              <div className="space-y-4">
                <a href="mailto:hello@tannedco.com.au" className="flex items-center gap-3 text-[#3a2e24] hover:text-[#1a1a1a] transition-colors text-base">
                  <span className="text-[#a46746]">✉</span> hello@tannedco.com.au
                </a>
                <a href="tel:1300826633" className="flex items-center gap-3 text-[#3a2e24] hover:text-[#1a1a1a] transition-colors text-base">
                  <span className="text-[#a46746]">☎</span> 1300 826 633
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#a46746]">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="http://instagram.com/tannedco_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5a4a3a] hover:text-[#1a1a1a] transition-colors font-medium text-sm uppercase tracking-wider border border-[#e8d9c3] rounded-full px-4 py-2 hover:border-[#a46746] hover:text-[#a46746]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@tannedco_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5a4a3a] hover:text-[#1a1a1a] transition-colors font-medium text-sm uppercase tracking-wider border border-[#e8d9c3] rounded-full px-4 py-2 hover:border-[#a46746] hover:text-[#a46746]"
                >
                  TikTok
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100086326464692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5a4a3a] hover:text-[#1a1a1a] transition-colors font-medium text-sm uppercase tracking-wider border border-[#e8d9c3] rounded-full px-4 py-2 hover:border-[#a46746] hover:text-[#a46746]"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#a46746]">Book Now</h3>
              <Link
                href="/book-now"
                className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-7 py-3 rounded-full font-semibold transition-colors text-sm"
              >
                Book Your Tan →
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#a46746]">Our Locations</h3>
              <Link
                href="/locations"
                className="inline-flex items-center border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-7 py-3 rounded-full font-semibold transition-colors text-sm"
              >
                View All Studios →
              </Link>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-[#a46746]">Send Us a Message</h3>

            {status === "success" ? (
              <div className="bg-[#fdf0d5] border border-[#e8d9c3] rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-black uppercase text-[#1a1a1a] mb-2">Message Sent!</h4>
                <p className="text-[#5a4a3a] mb-6">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-semibold text-[#a46746] hover:text-[#7d4e33] underline transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#7a6a5a] mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full bg-[#fdf6ec] border border-[#e8d9c3] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder-[#9a8a7a] focus:outline-none focus:border-[#a46746] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#7a6a5a] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full bg-[#fdf6ec] border border-[#e8d9c3] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder-[#9a8a7a] focus:outline-none focus:border-[#a46746] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="enquiryType" className="block text-xs font-bold uppercase tracking-widest text-[#7a6a5a] mb-2">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full bg-[#fdf6ec] border border-[#e8d9c3] rounded-xl px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#a46746] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select an option...</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#7a6a5a] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full bg-[#fdf6ec] border border-[#e8d9c3] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder-[#9a8a7a] focus:outline-none focus:border-[#a46746] transition-colors resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly at hello@tannedco.com.au</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#a46746] hover:bg-[#7d4e33] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-full font-semibold uppercase tracking-widest transition-colors"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
