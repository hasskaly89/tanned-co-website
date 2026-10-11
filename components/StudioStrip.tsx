import Link from "next/link";
import { LOCATIONS } from "@/lib/locations";
import { ArrowIcon } from "@/components/Icons";

/** Row of the 5 studios, each linking to its location page. Data from lib/locations.ts. */
export default function StudioStrip() {
  return (
    <section aria-labelledby="studio-strip-title" className="bg-cream border-b border-line py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-5">
          <h2 id="studio-strip-title" className="eyebrow">Choose your studio</h2>
          <p className="text-sm text-muted">{LOCATIONS.length} Sydney studios. Open 7 days, 6am to midnight.</p>
        </div>
        <ul className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 swipe-row" style={{ ["--swipe-w" as string]: "46%" }}>
          {LOCATIONS.map((loc) => (
            <li key={loc.slug}>
              <Link
                href={`/locations/${loc.slug}`}
                className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-line bg-white px-4 py-4 hover:border-bronze transition-colors"
              >
                <span className="min-w-0">
                  <span className="block font-display font-medium uppercase tracking-[0.08em] text-[15px] leading-tight text-ink">
                    {loc.shortName}
                  </span>
                  <span className="block text-xs text-muted mt-1 leading-snug">{loc.address}</span>
                </span>
                <ArrowIcon className="w-4 h-4 text-bronze shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
