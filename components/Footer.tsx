import Link from "next/link";
import Image from "next/image";
import { LOCATIONS } from "@/lib/locations";
import { InstagramIcon, TikTokIcon, FacebookIcon, AppleIcon, PlayStoreIcon } from "@/components/Icons";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/tannedco_", icon: <InstagramIcon /> },
  { label: "TikTok", href: "https://www.tiktok.com/@tannedco_", icon: <TikTokIcon /> },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100086326464692", icon: <FacebookIcon /> },
];

const explore = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Glow Club", href: "/glow-club" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Franchising", href: "/franchise" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Purchase Terms", href: "/terms" },
];

const colHeading = "text-xs font-semibold uppercase tracking-[0.18em] text-bronze-light mb-4";
const colLink = "text-on-dark-muted text-sm hover:text-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-espresso-deep text-on-dark">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/logo_transparent.png"
              alt="Tanned Co."
              width={1438}
              height={200}
              className="h-5 w-auto brightness-0 invert"
            />
            <p className="text-on-dark-muted text-sm leading-relaxed mt-5 max-w-xs">
              Sydney&apos;s first automated spray tanning studio. Private booths, even results, open 7 days.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-on-dark-muted hover:text-white transition-colors p-1 -m-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className={colHeading}>Explore</p>
            <ul className="space-y-2.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={colLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={colHeading}>Studios</p>
            <ul className="space-y-2.5">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className={colLink}>{loc.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={colHeading}>Get in touch</p>
            <ul className="space-y-2.5 mb-6">
              <li><a href="mailto:hello@tannedco.com.au" className={colLink}>hello@tannedco.com.au</a></li>
              <li><a href="tel:1300826633" className={colLink}>1300 826 633</a></li>
            </ul>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://apps.apple.com/au/app/tannedco/id1659547172"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white rounded-xl px-3.5 py-2 border border-white/10"
              >
                <AppleIcon className="w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.treshna.memberportal.tannedco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white rounded-xl px-3.5 py-2 border border-white/10"
              >
                <PlayStoreIcon className="w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-on-dark-muted text-xs">
            © {new Date().getFullYear()} Tanned Co. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-on-dark-muted text-xs hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
