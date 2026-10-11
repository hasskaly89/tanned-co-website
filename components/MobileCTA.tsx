"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { LOCATIONS, bookingUrlFor } from "@/lib/locations";

export default function MobileCTA() {
  const pathname = usePathname() ?? "";
  // On a studio page, book that studio directly instead of going via the picker.
  const studio = LOCATIONS.find((l) => pathname === `/locations/${l.slug}`);

  // One book button per screen: the bar only appears once the page's first
  // section (the hero, which has its own book button) has scrolled out of view.
  const [shown, setShown] = useState(false);
  useEffect(() => {
    // First section or page header in document order (the navbar is a <nav>).
    const hero = document.querySelector("section, header");
    if (!hero) {
      // Pages without a hero (e.g. legal pages): show after most of a screen of scrolling.
      const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.6);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    // Fires straight away with the current state, then on every change.
    const io = new IntersectionObserver(([e]) => setShown(!e.isIntersecting), { rootMargin: "-68px 0px 0px 0px" });
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div
      inert={!shown}
      aria-hidden={!shown || undefined}
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-sm border-t border-line px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] transition-transform duration-300 ${shown ? "translate-y-0" : "translate-y-full"}`}
    >
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
