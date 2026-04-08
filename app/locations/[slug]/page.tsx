import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import TrustBadges from "@/components/TrustBadges";
import { LOCATIONS, DEFAULT_BOOKING_URLS, SITE_URL } from "@/lib/locations";
import { getGoogleReviews } from "@/lib/google-reviews";

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


const howToBook = [
  { num: "01", title: "Book It", text: "Download the app or book online. Pick your time we're open 7 days so you can squeeze in a glow whenever it suits." },
  { num: "02", title: "Prep", text: "Exfoliate and shave 24 hours before. End your shower with a cold rinse to close your pores. Future you will be grateful." },
  { num: "03", title: "Step In", text: "Our smart sensors detect your height and guide you through each position. Apply barrier cream to hands, elbows, knees and ankles, then follow the voice prompts." },
  { num: "04", title: "Pick Your Shade", text: "Choose from 3 gorgeous colours with 3 depth levels each from sun-kissed glow to deep bronze, all matched to avoid the orange situation." },
  { num: "05", title: "Glow Up", text: "Rinse hands and face after 30 mins, then let your tan develop for 6–8 hours. Peak gorgeousness hits within 24 hours. No streaks, no mess, no regrets." },
];

const studioFeatures = [
  { icon: "🔥", title: "Your Private, Heated Booth", text: "Step into a fully automated spray tan booth that senses your height and guides you through for flawless coverage every time." },
  { icon: "☀️", title: "Custom Colour Match", text: "Choose from 4 colours with 3 depth levels. From subtle glow to deep bronze perfectly matched to your skin tone." },
  { icon: "✨", title: "Rapid Results That Last", text: "See your golden glow develop in just 2–3 hours, reaching peak gorgeousness within 24 hours. No streaks, no orange just pure radiance." },
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const urls = { ...DEFAULT_BOOKING_URLS, ...loc.bookingUrls };
  const googleReviews = loc.placeId ? await getGoogleReviews(loc.placeId) : null;

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
            Sydney {loc.shortName}
          </p>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-none text-white mb-4">
            Spray Tan<br />{loc.shortName}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Automated spray tanning in {loc.shortName}. Private booths, flawless results, open 7 days a week.
          </p>
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
                    <p className="text-[#5a4a3a]">Monday – Sunday: 6:00am – 12:00am</p>
                    <p className="text-xs text-[#a46746] font-semibold mt-1">{loc.hours}</p>
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
              <div className="mt-6 rounded-2xl overflow-hidden border border-[#e8d9c3]" style={{ filter: "grayscale(100%)" }}>
                <iframe
                  title={`Map of Tanned Co. ${loc.shortName}`}
                  src={loc.mapEmbed ?? `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`}
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-[#e8d9c3] space-y-3">
                <a
                  href={urls.casual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#a46746] hover:bg-[#7d4e33] text-white py-3.5 rounded-full font-bold uppercase tracking-widest transition-colors text-sm"
                >
                  Book Casual Tan $35
                </a>
                <a
                  href={urls.fivePack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3.5 rounded-full font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
                >
                  Buy 5 Pack $160
                </a>
                <a
                  href={urls.tenPack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-3.5 rounded-full font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
                >
                  Buy 10 Pack $300
                </a>
              </div>
            </div>

            {/* How to book */}
            <div>
              <h2 className="text-2xl font-black uppercase tracking-wide text-[#1a1a1a] mb-8">
                How to Book at {loc.shortName}
              </h2>
              <div className="space-y-6">
                {howToBook.map(({ num, title, text }) => (
                  <div key={num} className="flex items-start gap-5">
                    <span className="text-2xl font-black text-[#a46746] w-10 flex-shrink-0">{num}</span>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-wide text-[#1a1a1a] mb-1">{title}</p>
                      <p className="text-[#3a2e24] text-sm leading-relaxed">{text}</p>
                    </div>
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

      {/* STUDIO FEATURES */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">Why Tanned Co.</p>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {studioFeatures.map((f) => (
              <div key={f.title} className="bg-[#fdf6ec] rounded-3xl p-8 border border-[#e8d9c3]">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-black uppercase tracking-wide text-[#1a1a1a] mb-3">{f.title}</h3>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* GOOGLE REVIEWS */}
      {googleReviews && googleReviews.reviews.length > 0 && (
        <section className="py-12 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">
              Google Reviews
            </p>
            <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-4">
              What Our Clients Say
            </h2>
            {/* Overall rating */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xl ${i < Math.round(googleReviews.rating) ? "text-[#a46746]" : "text-gray-300"}`}>★</span>
                ))}
              </div>
              <span className="font-black text-xl text-[#1a1a1a]">{googleReviews.rating.toFixed(1)}</span>
              <span className="text-sm text-[#5a4a3a]">({googleReviews.user_ratings_total} reviews on Google)</span>
            </div>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
              {googleReviews.reviews.map((review) => (
                <div
                  key={review.author_name}
                  className="break-inside-avoid bg-[#fdf6ec] rounded-2xl p-6 border border-[#e8d9c3]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {review.profile_photo_url && (
                      <Image
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">{review.author_name}</p>
                      <p className="text-xs text-[#5a4a3a]">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < review.rating ? "text-[#a46746]" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                  <p className="text-[#3a2e24] text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                </div>
              ))}
            </div>
            {/* Link to all reviews */}
            <div className="text-center mt-10">
              <a
                href={`https://search.google.com/local/reviews?placeid=${loc.placeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                See All Reviews on Google →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS FALLBACK shown when Google Reviews not yet live */}
      {!googleReviews && loc.testimonials && loc.testimonials.length > 0 && (
        <section className="py-12 md:py-20 bg-[#fdf6ec]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">
              {loc.shortName} Clients Love It
            </p>
            <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-12">
              What They&apos;re Saying
            </h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
              {loc.testimonials.map(({ name, text }) => (
                <div key={name} className="break-inside-avoid bg-white rounded-2xl p-6 border border-[#e8d9c3]">
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

      {/* REVIEWS SECTION shown for all locations that have reviews */}
      {loc.reviews && loc.reviews.length > 0 && (
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">
              {loc.shortName} Clients Love It
            </p>
            <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-12">
              What They&apos;re Saying
            </h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
              {loc.reviews.map(({ name, suburb, text, rating }) => (
                <div key={name} className="break-inside-avoid bg-[#fdf6ec] rounded-2xl p-6 border border-[#e8d9c3]">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < rating ? "text-[#a46746]" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                  <p className="text-[#3a2e24] text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">{name}</p>
                    <p className="text-xs text-[#5a4a3a]">{suburb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
