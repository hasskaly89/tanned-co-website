const locations = [
  { name: "Caringbah", address: "349B Kingsway, Caringbah NSW", isNew: false },
  { name: "Edensor Park", address: "Shop 6/207 Edensor Rd, Edensor Park NSW", isNew: false },
  { name: "Kings Park", address: "6/2 Garling Rd, Kings Park NSW", isNew: false },
  { name: "Smeaton Grange", address: "1/73-77 Anderson Rd, Smeaton Grange NSW", isNew: false },
  { name: "Woollahra", address: "8 Oxford St, Woollahra NSW", isNew: true },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-[#F5EDD8]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A96E] mb-3">
          Find Us
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#3A2E22] mb-14">
          Our Locations
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className={`relative bg-white rounded-xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${
                loc.isNew ? "border-2 border-[#C9A96E]" : ""
              }`}
            >
              {loc.isNew && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A96E] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                  Now Open
                </div>
              )}
              <div className="text-2xl mb-3">📍</div>
              <h3 className="text-sm font-bold text-[#3A2E22] mb-2">{loc.name}</h3>
              <p className="text-xs text-[#7A6A55] leading-relaxed">{loc.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
