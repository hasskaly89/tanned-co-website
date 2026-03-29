const items = [
  "Private Heated Booths",
  "Contactless Technology",
  "4 Colour Options",
  "Open 7 Days",
];

export default function TrustBar() {
  return (
    <div className="bg-[#C9A96E] py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-6 justify-center">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2.5 text-white text-sm font-semibold tracking-wide">
            <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center text-xs">✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
