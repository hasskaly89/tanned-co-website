"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const locations = [
  {
    name: "Caringbah",
    address: "349B Kingsway, Caringbah NSW",
    maps: "https://www.google.com/maps/search/?api=1&query=349B+Kingsway+Caringbah+NSW",
  },
  {
    name: "Edensor Park",
    address: "Shop 6/207 Edensor Rd, Edensor Park NSW",
    maps: "https://www.google.com/maps/search/?api=1&query=Shop+6%2F207+Edensor+Rd+Edensor+Park+NSW",
  },
  {
    name: "Kings Park",
    address: "6/2 Garling Rd, Kings Park NSW",
    maps: "https://www.google.com/maps/search/?api=1&query=6%2F2+Garling+Rd+Kings+Park+NSW",
  },
  {
    name: "Smeaton Grange",
    address: "1/73-77 Anderson Rd, Smeaton Grange NSW",
    maps: "https://www.google.com/maps/search/?api=1&query=1%2F73-77+Anderson+Rd+Smeaton+Grange+NSW",
  },
  {
    name: "Woollahra",
    address: "8 Oxford St, Woollahra NSW",
    maps: "https://www.google.com/maps/search/?api=1&query=8+Oxford+St+Woollahra+NSW",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry from Tanned Co Website");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:hello@tannedco.com.au?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/contact" />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg"
          alt="Tanned Co. studio location"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Find Us</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Find Us</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            5 convenient Sydney locations, open 7 days a week.
          </p>
        </div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Our Studios</p>
          <h2 className="text-4xl font-black uppercase text-center mb-14">Our Locations</h2>

          {/* First 3 locations */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {locations.slice(0, 3).map((loc) => (
              <div key={loc.name} className="bg-white rounded-2xl p-7 border border-[#e8d9c3] shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#a46746] text-xl">📍</span>
                  <h3 className="font-black uppercase tracking-wide text-[#1a1a1a]">{loc.name}</h3>
                </div>
                <p className="text-[#5a4a3a] text-sm mb-2">{loc.address}</p>
                <p className="text-xs text-[#a46746] font-semibold uppercase tracking-wider mb-5">Open 7 days a week</p>
                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>

          {/* Last 2 locations centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {locations.slice(3).map((loc) => (
              <div key={loc.name} className="bg-white rounded-2xl p-7 border border-[#e8d9c3] shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#a46746] text-xl">📍</span>
                  <h3 className="font-black uppercase tracking-wide text-[#1a1a1a]">{loc.name}</h3>
                </div>
                <p className="text-[#5a4a3a] text-sm mb-2">{loc.address}</p>
                <p className="text-xs text-[#a46746] font-semibold uppercase tracking-wider mb-5">Open 7 days a week</p>
                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          {/* Left: contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Contact Info</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">Get In Touch</h2>
              <div className="space-y-4">
                <a href="mailto:hello@tannedco.com.au" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-base">
                  <span className="text-[#a46746]">✉</span> hello@tannedco.com.au
                </a>
                <a href="tel:1300826633" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-base">
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
                  className="text-white/70 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider border border-white/20 rounded-full px-4 py-2 hover:border-[#a46746] hover:text-[#a46746]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@tannedco_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider border border-white/20 rounded-full px-4 py-2 hover:border-[#a46746] hover:text-[#a46746]"
                >
                  TikTok
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100086326464692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider border border-white/20 rounded-full px-4 py-2 hover:border-[#a46746] hover:text-[#a46746]"
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
          </div>

          {/* Right: contact form */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-[#a46746]">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#a46746] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#a46746] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#a46746] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#a46746] hover:bg-[#7d4e33] text-white py-4 rounded-full font-semibold uppercase tracking-widest transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
