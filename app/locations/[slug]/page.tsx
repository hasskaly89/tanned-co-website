import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ClaimForm from "@/components/ClaimForm";
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

const steps = [
  { num: "01", title: "Book Online or via App", text: "Pick your time in seconds. Open 7 days, 6am to midnight — fit it around your day." },
  { num: "02", title: "Walk In and Step In", text: "No staff, no waiting. Your private booth guides you through every step automatically." },
  { num: "03", title: "Leave Glowing", text: "Rinse your hands after 30 mins. Full colour develops in 6 to 8 hours. No streaks, no orange, no regrets." },
];

const studioFeatures = [
  { icon: "🔒", title: "Completely Private", text: "Your own locked booth. No staff, no awkward moments. Just you and your perfect tan." },
  { icon: "☀️", title: "3 Signature Shades", text: "Malibu, Monterey or Rapid Venetian. Three depth levels each so you always get exactly the right glow." },
  { icon: "✨", title: "Rapid Results", text: "See colour in 2 to 3 hours. Peak gorgeousness within 24 hours. Lasts 7 to 10 days with proper care." },
  { icon: "📱", title: "Book in Seconds", text: "Download the Tanned Co. app or book online. No phone calls, no waiting — sorted in under a minute." },
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

  // Pick reviews to show — prefer Google, fall back to loc.reviews, then loc.testimonials
  const showGoogleReviews = googleReviews && googleReviews.reviews.length > 0;
  const showLocReviews = !showGoogleReviews && loc.reviews && loc.reviews.length > 0;
  const showTestimonials = !showGoogleReviews && !showLocReviews && loc.testimonials && loc.testimonials.length > 0;

  const ratingValue = showGoogleReviews ? googleReviews.rating : 5;
  const reviewCount = showGoogleReviews ? googleReviews.user_ratings_total : (loc.reviews?.length ?? 0);

  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <LocalBusinessSchema slug={slug} />
      <Navbar activePath={`/locations/${slug}`} />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end">
        <Image
          src={loc.heroImage}
          alt={`Spray tan studio ${loc.shortName} Sydney`}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16 md:pb-24">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-3">
            Sydney · {loc.shortName}
          </p>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none text-white mb-5">
            Spray Tan<br />{loc.shortName}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-lg mb-8">
            Automated spray tanning in {loc.shortName}. Private booths, flawless results, open 7 days.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#claim"
              className="bg-[#a46746] hover:bg-[#7d4e33] text-white font-bold uppercase tracking-widest px-7 py-4 rounded-full transition-colors text-sm"
            >
              Claim 10% Off →
            </a>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <div className="bg-[#1a1a1a] py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <span className="text-[#a46746]">★★★★★</span>
            <span className="font-semibold text-white">{ratingValue > 0 ? ratingValue.toFixed(1) : "5.0"}</span>
            <span>{reviewCount > 0 ? `(${reviewCount} reviews)` : "(Rated 5 stars)"}</span>
          </span>
          <span className="hidden sm:block text-white/30">|</span>
          <span>✓ Open 7 days · 6am to midnight</span>
          <span className="hidden sm:block text-white/30">|</span>
          <span>✓ No staff · Fully automated</span>
          <span className="hidden sm:block text-white/30">|</span>
          <span>✓ Results in under 5 minutes</span>
        </div>
      </div>

      {/* ── CLAIM FORM ── */}
      <ClaimForm location={loc.shortName} />

      {/* ── REVIEWS ── */}
      {showGoogleReviews && (
        <section className="py-14 md:py-20 bg-[#fdf6ec]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3 text-center">Google Reviews</p>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-center mb-3">Real Results, Real People</h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <span className="text-[#a46746] text-lg">{"★".repeat(5)}</span>
              <span className="font-black text-lg">{googleReviews.rating.toFixed(1)}</span>
              <span className="text-sm text-[#5a4a3a]">({googleReviews.user_ratings_total} on Google)</span>
            </div>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
              {googleReviews.reviews.map((review) => (
                <div key={review.author_name} className="break-inside-avoid bg-white rounded-2xl p-6 border border-[#e8d9c3]">
                  <div className="flex items-center gap-3 mb-3">
                    {review.profile_photo_url && (
                      <Image src={review.profile_photo_url} alt={review.author_name} width={36} height={36} className="rounded-full" />
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
            <div className="text-center mt-8">
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

      {showLocReviews && (
        <section className="py-14 md:py-20 bg-[#fdf6ec]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3 text-center">{loc.shortName} Clients</p>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-center mb-10">Real Results, Real People</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
              {loc.reviews!.map(({ name, suburb, text, rating }) => (
                <div key={name} className="break-inside-avoid bg-white rounded-2xl p-6 border border-[#e8d9c3]">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < rating ? "text-[#a46746]" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                  <p className="text-[#3a2e24] text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">{name}</p>
                  <p className="text-xs text-[#5a4a3a]">{suburb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showTestimonials && (
        <section className="py-14 md:py-20 bg-[#fdf6ec]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3 text-center">{loc.shortName} Clients</p>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-center mb-10">Real Results, Real People</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
              {loc.testimonials!.map(({ name, text }) => (
                <div key={name} className="break-inside-avoid bg-white rounded-2xl p-6 border border-[#e8d9c3]">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-[#a46746] text-sm">★</span>)}
                  </div>
                  <p className="text-[#3a2e24] text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3 text-center">Super Simple</p>
          <h2 className="text-2xl md:text-4xl font-black uppercase text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ num, title, text }) => (
              <div key={num} className="flex flex-col items-start">
                <span className="text-5xl font-black text-[#e8d9c3] mb-4 leading-none">{num}</span>
                <h3 className="font-black uppercase tracking-wide text-[#1a1a1a] mb-2">{title}</h3>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-14 md:py-20 bg-[#fdf0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3 text-center">Why Tanned Co.</p>
          <h2 className="text-2xl md:text-4xl font-black uppercase text-center mb-12">What Makes Us Different</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {studioFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-3xl p-7 border border-[#e8d9c3]">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-black uppercase tracking-wide text-[#1a1a1a] text-sm mb-2">{f.title}</h3>
                <p className="text-[#5a4a3a] text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDIO DETAILS + BOOKING ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3 text-center">Find Us</p>
          <h2 className="text-2xl md:text-4xl font-black uppercase text-center mb-12">
            Tanned Co. {loc.shortName}
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Details card */}
            <div className="bg-[#fdf6ec] rounded-3xl p-8 border border-[#e8d9c3]">
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-[#a46746] text-xl mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-xs uppercase tracking-wider mb-1">Address</p>
                    <p className="text-[#5a4a3a] text-sm">{loc.fullAddress}</p>
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#a46746] hover:text-[#7d4e33] underline mt-1 inline-block">
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#a46746] text-xl mt-0.5">🕐</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-xs uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-[#5a4a3a] text-sm">Monday to Sunday: 6:00am to 12:00am</p>
                    <p className="text-xs text-[#a46746] font-semibold mt-1">{loc.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#a46746] text-xl mt-0.5">🚗</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-xs uppercase tracking-wider mb-1">Parking</p>
                    <p className="text-[#5a4a3a] text-sm">{loc.parkingNote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#a46746] text-xl mt-0.5">☎</span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-xs uppercase tracking-wider mb-1">Phone</p>
                    <a href={`tel:${loc.phone}`} className="text-[#5a4a3a] text-sm hover:text-[#1a1a1a] transition-colors">{loc.phone}</a>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-[#e8d9c3]" style={{ filter: "grayscale(100%)" }}>
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
            </div>

            {/* Booking */}
            <div>
              <h3 className="text-xl font-black uppercase tracking-wide text-[#1a1a1a] mb-2">Ready to Book?</h3>
              <p className="text-[#5a4a3a] text-sm mb-8">Skip the form and book your session directly below. No account needed for casual visits.</p>
              <div className="space-y-3 mb-8">
                <a href={urls.casual} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#a46746] hover:bg-[#7d4e33] text-white py-4 rounded-full font-bold uppercase tracking-widest transition-colors text-sm">
                  Book Casual Tan — $35
                </a>
                <a href={urls.fivePack} target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm">
                  Buy 5 Pack — $160 <span className="text-[#a46746]">Save $15</span>
                </a>
                <a href={urls.tenPack} target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm">
                  Buy 10 Pack — $300 <span className="text-[#a46746]">Best Value</span>
                </a>
              </div>
              {/* Nearby suburbs */}
              <div className="bg-[#fdf6ec] rounded-2xl p-5 border border-[#e8d9c3]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a46746] mb-2">Nearby Areas Served</p>
                <p className="text-[#5a4a3a] text-sm">{loc.nearbySuburbs.join(" · ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
