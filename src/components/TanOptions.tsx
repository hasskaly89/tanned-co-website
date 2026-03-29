const shades = [
  { name: "Light", color: "#E8C89A", desc: "A subtle, natural warmth — perfect for first-timers or fair skin tones." },
  { name: "Medium", color: "#C9934E", desc: "A golden glow that suits all skin tones. Our most popular shade." },
  { name: "Dark", color: "#8B5E2E", desc: "A deep, rich bronze for a sun-kissed holiday look year-round." },
  { name: "Ultra Dark", color: "#4A2E10", desc: "Maximum depth and intensity — for those who love a seriously stunning tan." },
];

export default function TanOptions() {
  return (
    <section id="services" className="py-24" style={{ background: "#1A1410" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E8D5B0] mb-3">
          Our Tans
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-14">
          Pick Your Perfect Shade
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {shades.map((s) => (
            <div
              key={s.name}
              className="border border-white/10 rounded-xl p-7 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-5 border-[3px] border-white/15"
                style={{ background: s.color }}
              />
              <h3 className="text-sm font-bold text-white mb-2">{s.name}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/45 italic">
          All tans available in Rapid Clear (2–3 hrs) or Standard (6–8 hrs) formulas.
        </p>
      </div>
    </section>
  );
}
