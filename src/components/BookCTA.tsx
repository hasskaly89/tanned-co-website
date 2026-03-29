export default function BookCTA() {
  return (
    <section
      id="book"
      className="py-24 text-center"
      style={{
        background: "linear-gradient(135deg, #A8833A 0%, #C9A96E 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready for Your Glow?
        </h2>
        <p className="text-white/85 text-lg mb-10">
          Book your session in minutes. Walk out with your dream tan.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="tel:1300826633"
            className="bg-white text-[#A8833A] font-bold px-8 py-4 rounded-full text-sm hover:bg-[#F5EDD8] transition-all hover:-translate-y-0.5"
          >
            Call 1300 826 633
          </a>
          <a
            href="mailto:hello@tannedco.com.au"
            className="border-2 border-white/70 hover:border-white hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all"
          >
            Email Us
          </a>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          {["App Store", "Google Play"].map((label) => (
            <span
              key={label}
              className="bg-white/15 border border-white/40 text-white text-sm font-semibold px-6 py-2.5 rounded-full cursor-pointer hover:bg-white/25 transition-colors"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
