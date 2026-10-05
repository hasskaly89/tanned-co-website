const badges = [
  { icon: "🔒", label: "100% Private Rooms" },
  { icon: "🌿", label: "Vegan & Cruelty-Free" },
  { icon: "⭐", label: "Real Google Reviews" },
  { icon: "💳", label: "Secure Online Booking" },
  { icon: "✨", label: "Self-Cleaning Booths" },
  { icon: "📍", label: "5 Sydney Studios" },
];

export default function TrustBadges() {
  return (
    <div className="py-10 bg-white border-y border-[#e8d9c3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-2 text-center px-3 py-4 rounded-2xl bg-[#fdf6ec] border border-[#e8d9c3]"
            >
              <span className="text-2xl">{b.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5a4a3a] leading-tight">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
