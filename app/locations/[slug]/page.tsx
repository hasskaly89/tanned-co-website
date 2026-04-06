import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import TrustBadges from "@/components/TrustBadges";
import { LOCATIONS, SITE_URL } from "@/lib/locations";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};

  const title = `Spray Tan ${loc.shortName}`;
  const description = `Automated spray tanning in ${loc.shortName}, Sydney. Private VersaSpa booths, 3 signature shades, open 7 days. Sessions from $35. ${loc.fullAddress}.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/locations/${loc.slug}` },
    openGraph: {
      title: `${title} | Tanned Co.`,
      description,
      url: `${SITE_URL}/locations/${loc.slug}`,
      images: [{ url: loc.heroImage, width: 1200, height: 800, alt: `Tanned Co. ${loc.shortName}` }],
    },
  };
}

const services = [
  { icon: "☀️", title: "Automated Spray Tan", desc: "VersaSpa booth — voice guided, heated, self-cleaning." },
  { icon: "🌿", title: "3 Signature Shades", desc: "Rapid Venetian, Malibu & Monterey, each in 3 depths." },
  { icon: "⚡", title: "Express Session", desc: "In and out in under 15 minutes — no waiting." },
  { icon: "🔒", title: "100% Private", desc: "Your own room. No staff. No awkwardness." },
];

const howToBook = [
  { num: "01", text: "Download the Tanned Co. app or book online" },
  { num: "02", text: "Select this location, choose your date & time" },
  { num: "03", text: "Walk in — your room will be ready for you" },
  { num: "04", text: "Follow the in-booth prompts and walk out glowing" },
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const otherLocations = LOCATIONS.filter((l) => l.slug !== slug);

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <LocalBusinessSchema slug={slug} />
      <Navbar activePath={`/locations/${slug}`} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end">
        <Image
          src={loc.heroImage}
          alt={`Tanned Co. ${loc.shortName} spray tan studio`}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-3">
            Sydney — {loc.shortName}
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-white mb-4">
            Spray Tan<br />{loc.shortName}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8">
            Automated spray tanning in {loc.shortName}. Private booths, flawless results, open 7 days a week.
          </p>
          <a
            href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
          >
            Book at {loc.shortName} →
          </a>
        </div>
      </section>

      {/* LOCATION CARD */}
      <section className="py-16 md:py-20 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Address + hours */}
            <div className="bg-white rounded-3xl p-8 border border-[#e8d9c3] shadow-sm">
              <h2 className="text-xl font-black uppercase tracking-wide text-[#1a1a1a] mb-6">
                Studio Details
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-[#a46746] text-xl mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm uppercase tracking-wider mb-1">Address</p>
                    <p className="text-[#5a4a3a]">{loc.fullAddress}</p>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#a46746] hover:text-[#7d4e33] underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#a46746] text-xl mt-0.5">🕐</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm uppercase tracking-wider mb-1">Opening Hours</p>
                    <p className="text-[#5a4a3a]">Monday – Sunday: 8:00am – 8:00pm</p>
                    <p className="text-xs text-[#a46746] font-semibold mt-1">Open 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#a46746] text-xl mt-0.5">🚗</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm uppercase tracking-wider mb-1">Parking</p>
                    <p className="text-[#5a4a3a]">{loc.parkingNote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#a46746] text-xl mt-0.5">☎</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:1300826633" className="text-[#5a4a3a] hover:text-[#1a1a1a] transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>
              {/* Google Maps embed */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-[#e8d9c3]">
                <iframe
                  title={`Map of Tanned Co. ${loc.shortName}`}
                  src={`https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-[#e8d9c3] space-y-3">
                <a
                  href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#a46746] hover:bg-[#7d4e33] text-white py-3.5 rounded-full font-bold uppercase tracking-widest transition-colors text-sm"
                >
                  Book Casual Tan — $35
                </a>
                <a
                  href="https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3.5 rounded-full font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
                >
                  Buy 5 Pack — $160
                </a>
                <a
                  href="https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3.5 rounded-full font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
                >
                  Buy 10 Pack — $300
                </a>
              </div>
            </div>

            {/* How to book */}
            <div>
              <h2 className="text-2xl font-black uppercase tracking-wide text-[#1a1a1a] mb-8">
                How to Book at {loc.shortName}
              </h2>
              <div className="space-y-5">
                {howToBook.map(({ num, text }) => (
                  <div key={num} className="flex items-start gap-5">
                    <span className="text-2xl font-black text-[#a46746] w-10 flex-shrink-0">{num}</span>
                    <p className="text-[#3a2e24] text-base leading-relaxed pt-1">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-[#fdf6ec] rounded-2xl p-5 border border-[#e8d9c3]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a46746] mb-2">Nearby Areas Served</p>
                <p className="text-[#5a4a3a] text-sm">
                  {loc.nearbySuburbs.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S AVAILABLE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">
            At This Studio
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
            What&apos;s Available
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#fdf6ec] rounded-2xl p-6 border border-[#e8d9c3] text-center shadow-sm"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold uppercase tracking-wide text-sm text-[#1a1a1a] mb-2">{s.title}</h3>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* TESTIMONIALS — only shown for locations that have them */}
      {loc.testimonials && loc.testimonials.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">
              {loc.shortName} Locals Love It
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-14">
              What They&apos;re Saying
            </h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
              {loc.testimonials.map(({ name, text }) => (
                <div
                  key={name}
                  className="break-inside-avoid bg-[#fdf6ec] rounded-2xl p-6 border border-[#e8d9c3]"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#a46746] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[#3a2e24] text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER LOCATIONS */}
      <section className="py-20 md:py-28 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">
            5 Sydney Studios
          </p>
          <h2 className="text-4xl font-black uppercase text-center mb-14">
            Other Locations
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className="bg-white rounded-2xl p-6 border border-[#e8d9c3] hover:border-[#a46746] transition-colors group"
              >
                <p className="text-sm font-black uppercase tracking-wide text-[#1a1a1a] group-hover:text-[#a46746] transition-colors mb-1">
                  {other.shortName}
                </p>
                <p className="text-xs text-[#5a4a3a]">{other.address}</p>
                <p className="text-xs text-[#a46746] font-semibold mt-2">Open 7 days →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-[#1a1a1a]">
            Book Your Tan in {loc.shortName}
          </h2>
          <p className="text-[#5a4a3a] text-lg mb-10">
            Sessions from $35. Book online in seconds, walk in ready to glow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a
              href="https://tannedco.gymmasteronline.com/portal/book/service?serviceid=211107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#a46746] hover:bg-[#7d4e33] text-white px-8 py-4 rounded-full font-semibold transition-colors text-sm uppercase tracking-wider"
            >
              Book Casual Tan — $35
            </a>
            <a
              href="https://tannedco.gymmasteronline.com/portal/membership/73be6ac16b4b1f5ed5ebe6d51a172fdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1a1a1a] hover:bg-[#3a2e24] text-white px-8 py-4 rounded-full font-semibold transition-colors text-sm uppercase tracking-wider"
            >
              Buy 5 Pack — $160
            </a>
            <a
              href="https://tannedco.gymmasteronline.com/portal/membership/3c4dc56c883b13f99d2aa42b8d765373"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1a1a1a] hover:bg-[#3a2e24] text-white px-8 py-4 rounded-full font-semibold transition-colors text-sm uppercase tracking-wider"
            >
              Buy 10 Pack — $300
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
