"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { LOCATIONS, bookingUrlFor } from "@/lib/locations";

const CLASS =
  "w-full flex items-center justify-center gap-2 bg-[#a46746] hover:bg-[#7d4e33] text-white text-sm font-bold uppercase tracking-widest py-3.5 rounded-full transition-colors";

export default function MobileCTA() {
  const pathname = usePathname() ?? "";
  // On a studio page, book that studio directly instead of going via the picker.
  const studio = LOCATIONS.find((l) => pathname === `/locations/${l.slug}`);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e8d9c3] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      {studio ? (
        <a
          href={bookingUrlFor(studio, "casual")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("book_now_click", { source: "mobile_sticky_cta", plan: "casual", location_slug: studio.slug })}
          className={CLASS}
        >
          <span aria-hidden="true">☀</span> Book {studio.shortName}
        </a>
      ) : (
        <Link
          href="/book-now"
          onClick={() => trackEvent("book_now_click", { source: "mobile_sticky_cta" })}
          className={CLASS}
        >
          <span aria-hidden="true">☀</span> Book Now
        </Link>
      )}
    </div>
  );
}
