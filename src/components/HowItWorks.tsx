const steps = [
  {
    num: "01",
    title: "Book Online",
    desc: "Choose your location, time, and tan shade from our app or website — anytime, anywhere.",
  },
  {
    num: "02",
    title: "Prepare Your Skin",
    desc: "Exfoliate 24 hours before, arrive with clean, dry skin and no moisturiser or deodorant.",
  },
  {
    num: "03",
    title: "Step Into the Booth",
    desc: "Our height-sensing automated booth guides you through 4 positions for a flawless, even result.",
  },
  {
    num: "04",
    title: "Walk Out Glowing",
    desc: "Choose a rapid 2–3 hour development or a classic 6–8 hour tan. Your glow, your way.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A96E] mb-3">
          Simple &amp; Easy
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#3A2E22] mb-14">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="border border-[#EAD9B8] rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#E8D5B0] mb-4 leading-none">
                {s.num}
              </div>
              <h3 className="text-base font-bold text-[#3A2E22] mb-2.5">{s.title}</h3>
              <p className="text-sm text-[#7A6A55] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
