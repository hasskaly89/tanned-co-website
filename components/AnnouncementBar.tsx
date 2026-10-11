"use client";

import Link from "next/link";
import { ANNOUNCEMENT, ANNOUNCEMENT_STORAGE_KEY } from "@/lib/site";

/**
 * Slim, dismissible strip above the navbar. Its height lives in the CSS
 * variable --banner-h, which the navbar, body offset and hero all use. The
 * inline script in the root layout adds .announce-off to <html> before first
 * paint when it was dismissed, so there is no flash or layout shift on reload.
 */
export default function AnnouncementBar() {
  if (!ANNOUNCEMENT.enabled) return null;

  function dismiss() {
    try {
      localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, ANNOUNCEMENT.id);
    } catch {}
    document.documentElement.classList.add("announce-off");
  }

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="announce-bar fixed top-[var(--ribbon-h)] inset-x-0 z-[55] h-[var(--banner-h)] bg-sand border-b border-line text-ink"
    >
      <div className="max-w-6xl mx-auto h-full pl-6 pr-1 flex items-center justify-center gap-2 text-xs md:text-[13px]">
        <p className="truncate">
          {ANNOUNCEMENT.text} <span className="hidden sm:inline">{ANNOUNCEMENT.textMore}</span>{" "}
          <Link href={ANNOUNCEMENT.href} className="font-medium text-bronze-text underline decoration-bronze/40 underline-offset-2 hover:decoration-bronze">
            {ANNOUNCEMENT.linkText}
            <span className="sr-only">{ANNOUNCEMENT.linkTextHidden}</span>
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="ml-auto md:ml-2 shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-muted hover:text-ink hover:bg-white/60 transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}
