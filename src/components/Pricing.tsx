const plans = [
  {
    name: "Single Session",
    price: "$35",
    per: "/tan",
    featured: false,
    features: [
      "Choice of shade & depth",
      "Private heated booth",
      "Rapid or standard formula",
      "Height-sensing technology",
    ],
  },
  {
    name: "5 Pack",
    price: "$155",
    per: "/5 tans",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Single",
      "Save $20",
      "Use across any location",
      "Valid 6 months",
    ],
  },
  {
    name: "10 Pack",
    price: "$290",
    per: "/10 tans",
    featured: false,
    features: [
      "Everything in Single",
      "Save $60",
      "Use across any location",
      "Valid 12 months",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A96E] mb-3">
          Simple Pricing
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#3A2E22] mb-14">
          Transparent &amp; Affordable
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-xl p-10 text-center transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "border-2 border-[#C9A96E] shadow-[0_0_0_2px_#C9A96E,0_12px_48px_rgba(0,0,0,0.14)]"
                  : "border border-[#EAD9B8] hover:shadow-xl"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C9A96E] text-white text-xs font-bold tracking-widest uppercase px-5 py-1.5 rounded-full whitespace-nowrap">
                  {p.badge}
                </div>
              )}

              <h3 className="text-base font-bold text-[#3A2E22] mb-4">{p.name}</h3>
              <div className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#A8833A] mb-6 leading-none">
                {p.price}
                <span className="font-sans text-sm font-medium text-[#7A6A55]">{p.per}</span>
              </div>

              <ul className="mb-8 text-left space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-[#7A6A55] border-b border-[#EAD9B8] pb-2.5">
                    <span className="text-[#C9A96E] font-bold mr-1.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className="block bg-[#C9A96E] hover:bg-[#A8833A] text-white text-sm font-semibold py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {p.name === "Single Session" ? "Book Now" : "Buy Pack"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
