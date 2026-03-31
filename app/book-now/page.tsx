"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMGS = {
  hero: "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg",
};

export default function BookNow() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
      <Navbar activePath="/book-now" />

      {/* FULL-SCREEN HERO WITH BACKGROUND IMAGE */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        {/* Background image */}
        <img
          src={IMGS.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content overlay */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 pt-28">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-none tracking-tight text-white drop-shadow-lg text-center">
            Book Your Glow at
          </h1>
          {/* Tanned Co logo replacing text */}
          <img src="/logo_transparent.png" alt="Tanned Co." className="w-full max-w-2xl brightness-0 invert" />

          {/* Subtitle */}
          <p className="text-xl md:text-3xl font-light tracking-widest text-white/90">
            Private. Automated. Flawless.
          </p>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-[#a46746] my-4" />

          {/* Choose location heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Choose Your Location & Time
          </h2>

          {/* BOOK NOW button */}
          <a
            href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center bg-[#a46746] hover:bg-[#7d4e33] text-white text-lg md:text-xl font-bold uppercase tracking-widest px-16 py-5 rounded-sm transition-colors min-w-[320px] shadow-xl"
          >
            Book Now
          </a>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-white/30 my-6" />

          {/* Download App */}
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white drop-shadow-lg">
            Download App
          </h2>

          {/* App buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://apps.apple.com/us/app/tannedco/id1659547172"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#a46746] hover:bg-[#7d4e33] text-white text-lg font-bold uppercase tracking-widest px-12 py-5 rounded-sm transition-colors min-w-[260px] shadow-xl"
            >
              Apple App
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.treshna.memberportal.tannedco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#a46746] hover:bg-[#7d4e33] text-white text-lg font-bold uppercase tracking-widest px-12 py-5 rounded-sm transition-colors min-w-[260px] shadow-xl"
            >
              Android App
            </a>
          </div>

          {/* App description text */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mt-6 mb-16 leading-relaxed font-light">
            Booking a casual session or using your membership is easy, just use the Tanned Co. app. Tap the links to go straight to the booking page.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
