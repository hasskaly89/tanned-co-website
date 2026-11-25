"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ANNOUNCEMENT, ANNOUNCEMENT_STORAGE_KEY } from "@/lib/site";
import {
  BF_GLOW_TRIO,
  BF_GLOW_TRIO_BUY_URL,
  PROMO_BANNER_STORAGE_KEY,
  applyAnnouncementState,
  formatCountdown,
  trackPromo,
  writeStorage,
} from "@/lib/promos/black-friday-glow-trio";

/**
 * Slim, dismissible strip above the navbar. Its height lives in the CSS
 * variable --banner-h, which the navbar, body offset and hero all use.
 *
 * Two strips are rendered and CSS shows one: the franchise strip, or (while the
 * Black Friday promo is live, outside /franchise) the Black Friday strip. The
 * inline script in the root layout sets html.promo-on / html.announce-off before
 * first paint, so there is no flash or layout shift on reload.
 */
export default function AnnouncementBar() {
  const pathname = usePathname() ?? "";
  const [promoVisible, setPromoVisible] = useState(false);
  const [now, setNow] = useState<number | null>(null);
  const viewSent = useRef(false);

  // Keep <html> classes in step with the route, and re-check once a minute so the
  // strip swaps back to franchise by itself the moment the promo ends.
  useEffect(() => {
    if (!BF_GLOW_TRIO.enabled) return;
    const sync = () => {
      const t = Date.now();
      setNow(t);
      setPromoVisible(applyAnnouncementState(pathname, t));
    };
    sync();
    const id = window.setInterval(sync, 60_000);
    return () => window.clearInterval(id);
  }, [pathname]);

  useEffect(() => {
    if (promoVisible && !viewSent.current) {
      viewSent.current = true;
      trackPromo("promo_banner_view");
    }
  }, [promoVisible]);

  function dismissFranchise() {
    writeStorage("localStorage", ANNOUNCEMENT_STORAGE_KEY, ANNOUNCEMENT.id);
    document.documentElement.classList.add("announce-off");
  }

  function dismissPromo() {
    writeStorage("localStorage", PROMO_BANNER_STORAGE_KEY, BF_GLOW_TRIO.id);
    document.documentElement.classList.add("announce-off");
    trackPromo("promo_banner_dismiss");
    setPromoVisible(false);
  }

  const end = BF_GLOW_TRIO.promoEnd?.getTime() ?? null;
  const countdown = end !== null && now !== null ? formatCountdown(end - now) : null;

  return (
    <>
      {ANNOUNCEMENT.enabled && (
        <div
          role="region"
          aria-label="Announcement"
          className="announce-bar announce-franchise fixed top-[var(--ribbon-h)] inset-x-0 z-[55] h-[var(--banner-h)] bg-sand border-b border-line text-ink"
        >
          <div className="max-w-6xl mx-auto h-full pl-6 pr-1 flex items-center justify-center gap-2 text-xs md:text-[13px]">
            <p className="truncate">
              {ANNOUNCEMENT.text} <span className="hidden sm:inline">{ANNOUNCEMENT.textMore}</span>{" "}
              <Link href={ANNOUNCEMENT.href} className="font-medium text-bronze-text underline decoration-bronze/40 underline-offset-2 hover:decoration-bronze">
                {ANNOUNCEMENT.linkText}
                <span className="sr-only">{ANNOUNCEMENT.linkTextHidden}</span>
              </Link>
            </p>
            <DismissButton onClick={dismissFranchise} label="Dismiss announcement" className="text-muted hover:text-ink hover:bg-white/60" />
          </div>
        </div>
      )}

      {BF_GLOW_TRIO.enabled && (
        <div
          role="region"
          aria-label="Black Friday offer"
          className="announce-bar announce-promo fixed top-[var(--ribbon-h)] inset-x-0 z-[55] h-[var(--banner-h)] bg-espresso border-b border-espresso-deep text-cream"
        >
          <div className="max-w-6xl mx-auto h-full pl-4 sm:pl-6 pr-1 flex items-center justify-center gap-2.5 text-xs md:text-[13px]">
            <p className="min-w-0 truncate">
              <span className="font-semibold text-bronze-light">
                Black Friday<span className="hidden sm:inline"> Glow Trio</span>:
              </span>{" "}
              3 tans for $79.
            </p>
            <a
              href={BF_GLOW_TRIO_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPromo("promo_banner_click", { destination: "gymmaster" })}
              className="shrink-0 inline-flex items-center h-7 px-3.5 rounded-full bg-bronze-text text-cream font-medium hover:bg-cream hover:text-espresso transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-light"
            >
              Buy now
              <span className="sr-only"> the Black Friday Glow Trio, 3 tans for $79 (opens in a new tab)</span>
            </a>
            {end !== null && (
              // Space is held before the clock is known, so nothing shifts when it appears.
              <span className={`hidden sm:inline shrink-0 text-on-dark-muted tabular-nums ${countdown ? "" : "invisible"}`}>
                {countdown ?? "Ends in 0d 00h"}
              </span>
            )}
            <DismissButton onClick={dismissPromo} label="Dismiss Black Friday offer" className="text-on-dark-muted hover:text-cream hover:bg-white/10" />
          </div>
        </div>
      )}
    </>
  );
}

function DismissButton({ onClick, label, className }: { onClick: () => void; label: string; className: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`ml-auto md:ml-2 shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors cursor-pointer ${className}`}
    >
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
    </button>
  );
}
