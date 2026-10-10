import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BookingPicker from "@/components/BookingPicker";
import { CASUAL, formatAud } from "@/lib/pricing";
import { APP_ACCESS_TEXT, APP_LINKS } from "@/lib/site";

const HEADER_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg";

const bookingSteps = ["Choose a studio", "Pick a time", "Check in with the app"];

const expectTips = [
  { title: "Wear dark clothes", desc: "Loose, dark clothing avoids bronzer transfer after your session." },
  { title: "Exfoliate first", desc: "Shower and exfoliate the day before for the most even tan." },
  { title: "Skip the deodorant", desc: "Arrive without deodorant, perfume or moisturiser on your skin." },
  { title: "Leave it on", desc: "Rinse after 6 to 8 hours, or 2 to 3 hours for Rapid Venetian. Full colour develops over 24 hours." },
];

export default function BookNow() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath="/book-now" />

      {/* COMPACT HEADER: booking starts straight after it */}
      <header className="pt-[68px] bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 grid md:grid-cols-[1fr_320px] gap-10 items-center">
          <div>
            <p className="eyebrow mb-4">Book in under a minute</p>
            <h1 className="display-xl">Book your tan.</h1>
            <p className="text-body text-lg leading-relaxed mt-5 max-w-xl">
              Choose your studio, then pick a time. Casual tans are {formatAud(CASUAL.price)} and you pay when you book.
            </p>
            <div className="mt-6 max-w-xl rounded-2xl border border-line bg-white px-5 py-4">
              <p className="text-ink text-[15px] leading-relaxed">{APP_ACCESS_TEXT}</p>
              <p className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm">
                <a href={APP_LINKS.appStore} target="_blank" rel="noopener noreferrer" className="text-link">App Store</a>
                <a href={APP_LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="text-link">Google Play</a>
              </p>
            </div>
            <ol className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-6 text-sm font-medium text-body">
              {bookingSteps.map((label, i) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-bronze-text text-white flex items-center justify-center text-xs font-semibold">
                    {i + 1}
                  </span>
                  {label}
                </li>
              ))}
            </ol>
          </div>
          <div className="hidden md:block relative aspect-[4/3] rounded-[28px] overflow-hidden">
            <Image src={HEADER_IMAGE} alt="Two Tanned Co. clients with even spray tans" fill priority sizes="320px" className="object-cover" />
          </div>
        </div>
      </header>

      {/* BOOKING: studio, casual tan, then other options */}
      <section className="py-14 md:py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <BookingPicker />
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="First time?" title="What to expect." />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {expectTips.map((t, i) => (
              <li key={t.title} className="border-t border-line pt-7">
                <p className="font-display font-normal text-4xl text-bronze leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                <p className="text-body leading-relaxed">{t.desc}</p>
              </li>
            ))}
          </ol>
          <p className="text-center mt-12">
            <Link href="/how-it-works" className="text-link">Read the full step-by-step guide</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
