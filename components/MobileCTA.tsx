"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { LOCATIONS, bookingUrlFor } from "@/lib/locations";

export default function MobileCTA() {
  const pathname = usePathname() ?? "";
  // On a studio page, book that studio directly instead of going via the picker.
  const studio = LOCATIONS.find((l) => pathname === `/locations/${l.slug}`);

  return (
    // Always visible on phones from first load. Its height is --cta-h plus the
    // safe area; the body reserves the same space so nothing hides behind it.
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-[calc(var(--cta-h)+env(safe-area-inset-bottom,0px))] pb-[env(safe-area-inset-bottom,0px)] flex items-center bg-cream/95 backdrop-blur-sm border-t border-line px-4">
      {studio ? (
        <a
          href={bookingUrlFor(studio, "casual")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("book_now_click", { source: "mobile_sticky_cta", plan: "casual", location_slug: studio.slug })}
          className="btn btn-dark w-full !py-4"
        >
          Book {studio.shortName}
        </a>
      ) : (
        <Link
          href="/book-now"
          onClick={() => trackEvent("book_now_click", { source: "mobile_sticky_cta" })}
          className="btn btn-dark w-full !py-4"
        >
          Book your tan
        </Link>
      )}
    </div>
  );
}
