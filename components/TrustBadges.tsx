import { LockIcon, LeafIcon, StarIcon, CardIcon, SparkleIcon, PinIcon } from "@/components/Icons";

const badges = [
  { icon: <LockIcon />, label: "100% private rooms" },
  { icon: <LeafIcon />, label: "Vegan and cruelty-free" },
  { icon: <StarIcon className="w-5 h-5" />, label: "Real Google reviews" },
  { icon: <CardIcon />, label: "Secure online booking" },
  { icon: <SparkleIcon />, label: "Self-cleaning booths" },
  { icon: <PinIcon />, label: "5 Sydney studios" },
];

export default function TrustBadges() {
  return (
    <div className="bg-white border-y border-line">
      <ul className="max-w-6xl mx-auto px-6 py-7 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
        {badges.map((b) => (
          <li key={b.label} className="flex items-center gap-2.5 text-sm font-medium text-body">
            <span className="text-bronze">{b.icon}</span>
            {b.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
