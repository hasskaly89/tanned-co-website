import { LockIcon, LeafIcon, ClockIcon, PhoneIcon, SparkleIcon, PinIcon } from "@/components/Icons";
import { CONTACT } from "@/lib/site";

const badges = [
  { icon: <LockIcon />, label: "Private rooms" },
  { icon: <LeafIcon />, label: "Vegan and cruelty-free" },
  { icon: <ClockIcon />, label: "Open 6am to midnight" },
  { icon: <PhoneIcon />, label: `Help on ${CONTACT.phone}` },
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
