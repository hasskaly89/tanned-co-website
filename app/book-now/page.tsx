"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookNow() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/book-now" />

      {/* PAGE HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg"
          alt="Book your tan at Tanned Co."
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Tanned Co.</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Book Your Tan</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Private. Automated. Flawless. Choose your location and time below.
          </p>
        </div>
      </section>

      {/* BOOK ONLINE */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Book Online</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">Choose Your Location & Time</h2>
          <p className="text-[#5a4a3a] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book your session online in seconds. Select your preferred Sydney location, pick a time that suits you, and walk in ready to glow.
          </p>
          <a
            href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1a1a1a] hover:bg-[#3a2e24] text-white text-base font-bold uppercase tracking-widest px-12 py-4 rounded-full transition-colors shadow-md"
          >
            Book Now →
          </a>
        </div>
      </section>

      {/* LOCATIONS STRIP */}
      <section className="py-14 bg-white border-y border-[#e8d9c3]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-6 text-center">Our Sydney Locations</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Caringbah",
              "Edensor Park",
              "Kings Park",
              "Smeaton Grange",
              "Woollahra",
            ].map((loc) => (
              <div key={loc} className="bg-[#fdf6ec] rounded-2xl px-4 py-5 text-center border border-[#e8d9c3]">
                <p className="text-sm font-bold uppercase tracking-wide text-[#1a1a1a]">{loc}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#a46746] mt-1">Open 7 days</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">On Your Phone</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">Download the App</h2>
          <p className="text-[#5a4a3a] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Booking a casual session or using your membership is easy with the Tanned Co. app. Tap the links below to go straight to the booking page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/tannedco/id1659547172"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a] hover:bg-[#3a2e24] text-white text-sm font-bold uppercase tracking-widest px-10 py-4 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.treshna.memberportal.tannedco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a] hover:bg-[#3a2e24] text-white text-sm font-bold uppercase tracking-widest px-10 py-4 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.54-3.54L3.18 23.76zM20.65 10.24l-2.71-1.56-3.84 3.84 3.84 3.84 2.73-1.58c.78-.45.78-1.54-.02-2zM2.01 1.36c-.06.19-.01.4.13.56l10.59 10.59L9.19 16.05 2.01 1.36zM12.73 12.51l2.54-2.54-10.6-6.12 8.06 8.66z"/>
              </svg>
              Google Play Store
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
