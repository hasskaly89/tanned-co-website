"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookNow() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath="/book-now" />

      {/* PAGE HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg"
          alt="Book your tan at Tanned Co."
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">Tanned Co.</p>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight text-white mb-4">Book Your Tan</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Private. Automated. Flawless. Choose your location and time below.
          </p>
        </div>
      </section>

      {/* BOOKING STEPS */}
      <section className="py-14 bg-white border-b border-[#e8d9c3]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 md:gap-4 text-xs font-bold uppercase tracking-wider">
            {[
              { n: "1", label: "Choose Location" },
              { n: "2", label: "Pick a Time" },
              { n: "3", label: "Walk In & Glow" },
            ].map(({ n, label }, i, arr) => (
              <div key={n} className="flex items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#a46746] text-white flex items-center justify-center text-sm font-black flex-shrink-0">
                    {n}
                  </span>
                  <span className="text-[#1a1a1a] hidden sm:inline">{label}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-[#e8d9c3] font-black text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK ONLINE */}
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Book Online</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase leading-tight mb-4 text-center">Choose Your Option</h2>
          <p className="text-[#5a4a3a] text-lg leading-relaxed mb-14 max-w-xl mx-auto text-center">
            Pick the option that suits you and book directly — no account needed for casual sessions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Casual */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d9c3] flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">Casual Tan</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">$35</span>
                <span className="text-[#5a4a3a] mb-1.5">/ session</span>
              </div>
              <p className="text-[#5a4a3a] text-sm mb-6">Pay as you go</p>
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 1x automated spray tan session</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 2 months from purchase</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Choose your colour &amp; depth</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> All 5 Sydney locations</li>
              </ul>
              <a
                href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3.5 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Book Casual Tan →
              </a>
            </div>

            {/* 5 Pack */}
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden md:scale-[1.02]">
              <div className="absolute top-5 right-5">
                <span className="bg-[#a46746] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">Best Value</span>
              </div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">5 Pack</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">$160</span>
                <span className="text-white/60 mb-1.5">/ 5 sessions</span>
              </div>
              <p className="text-white/60 text-sm mb-6">$32 per tan — save $15</p>
              <ul className="space-y-3 text-white/80 text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 5x automated spray tan sessions</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 6 months from purchase</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Choose your colour &amp; depth</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> All 5 Sydney locations</li>
              </ul>
              <a
                href="https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#a46746] hover:bg-[#7d4e33] text-white py-3.5 rounded-full font-semibold transition-colors"
              >
                Buy 5 Pack →
              </a>
            </div>

            {/* 10 Pack */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d9c3] flex flex-col">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">10 Pack</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">$300</span>
                <span className="text-[#5a4a3a] mb-1.5">/ 10 sessions</span>
              </div>
              <p className="text-[#5a4a3a] text-sm mb-6">$30 per tan — save $50</p>
              <ul className="space-y-3 text-[#5a4a3a] text-sm flex-1 mb-8">
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> 10x automated spray tan sessions</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Valid for 12 months from purchase</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> Choose your colour &amp; depth</li>
                <li className="flex items-start gap-2"><span className="text-[#a46746] mt-0.5">✓</span> All 5 Sydney locations</li>
              </ul>
              <a
                href="https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3.5 rounded-full font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Buy 10 Pack →
              </a>
            </div>

          </div>
          <p className="text-xs text-[#9a8a7a] mt-8 text-center">Each option opens our secure booking portal in a new tab</p>
        </div>
      </section>

      {/* FIRST TIME? */}
      <section className="py-14 bg-white border-y border-[#e8d9c3]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">First Time?</p>
          <h2 className="text-2xl font-black uppercase text-center mb-10 text-[#1a1a1a]">What to Expect</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "👗", title: "Wear Dark Clothes", desc: "Loose, dark clothing to avoid bronzer transfer after your session." },
              { icon: "🚿", title: "Exfoliate First", desc: "Shower and exfoliate the day before for the most even tan." },
              { icon: "🚫", title: "No Deodorant", desc: "Arrive without deodorant, perfume or moisturiser on your skin." },
              { icon: "⏱", title: "Leave it On", desc: "Wait 6–8 hours before showering. For rapid, rinse after 2–3 hrs." },
            ].map((t) => (
              <div key={t.title} className="bg-[#fdf6ec] rounded-2xl p-5 border border-[#e8d9c3] text-center">
                <div className="text-3xl mb-3">{t.icon}</div>
                <p className="font-bold uppercase tracking-wide text-xs text-[#1a1a1a] mb-2">{t.title}</p>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS STRIP */}
      <section className="py-14 bg-white border-y border-[#e8d9c3]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-6 text-center">Our Sydney Locations</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
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
      <section className="py-12 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">On Your Phone</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase leading-tight mb-6">Download the App</h2>
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
