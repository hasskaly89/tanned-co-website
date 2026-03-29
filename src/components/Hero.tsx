export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2C1A0E 0%, #4A2E18 40%, #1A1410 100%)",
      }}
    >
      {/* Glow overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(201,169,110,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 80% at 80% 20%, rgba(201,169,110,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8D5B0] mb-5">
          Sydney&apos;s #1 Automated Spray Tan Studio
        </p>

        <h1
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          Your Dream Glow,
          <br />
          On Your Schedule.
        </h1>

        <p className="text-lg text-white/70 max-w-md mb-10 leading-relaxed">
          Private booths. Custom colour. Zero mess. Book, show up, and leave
          glowing.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#book"
            className="bg-[#C9A96E] hover:bg-[#A8833A] text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(169,131,58,0.4)] text-sm tracking-wide"
          >
            Book Now
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all text-sm tracking-wide"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
