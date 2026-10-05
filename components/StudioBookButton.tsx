"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { LOCATIONS, bookingUrlFor, type BookingPlan } from "@/lib/locations";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "tannedco_studio";
const CHANGE_EVENT = "tannedco:studio";

// In-memory copy so the picker still works when sessionStorage is blocked.
let memoryStudio = "";

function readStoredStudio(): string {
  try {
    return sessionStorage.getItem(STORAGE_KEY) ?? memoryStudio;
  } catch {
    return memoryStudio;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

/**
 * Studio picker + booking button. Used wherever the visitor's studio is not
 * already known, so GymMaster always opens on the right studio. The choice is
 * shared across pickers on the page and remembered for the session.
 */
export default function StudioBookButton({
  plan,
  source,
  label,
  buttonClassName,
  selectClassName = "w-full bg-white border border-[#e8d9c3] text-[#1a1a1a] rounded-full px-5 py-3 text-sm font-medium focus:outline-none focus:border-[#a46746]",
}: {
  plan: BookingPlan;
  source: string;
  label: string;
  buttonClassName: string;
  selectClassName?: string;
}) {
  const id = useId();
  const selectRef = useRef<HTMLSelectElement>(null);
  const slug = useSyncExternalStore(subscribe, readStoredStudio, () => "");
  const [needsStudio, setNeedsStudio] = useState(false);

  const loc = LOCATIONS.find((l) => l.slug === slug);
  const href = loc ? bookingUrlFor(loc, plan) : undefined;

  function choose(next: string) {
    setNeedsStudio(false);
    memoryStudio = next;
    try {
      sessionStorage.setItem(STORAGE_KEY, next);
    } catch {}
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="sr-only">Choose your studio</label>
      <select
        id={id}
        ref={selectRef}
        value={slug}
        onChange={(e) => choose(e.target.value)}
        aria-invalid={needsStudio}
        aria-describedby={needsStudio ? `${id}-hint` : undefined}
        className={selectClassName}
      >
        <option value="">Choose your studio</option>
        {LOCATIONS.map((l) => (
          <option key={l.slug} value={l.slug}>{l.shortName}</option>
        ))}
      </select>
      <a
        href={href ?? "#"}
        target={href ? "_blank" : undefined}
        rel="noopener noreferrer"
        onClick={(e) => {
          if (!loc) {
            e.preventDefault();
            setNeedsStudio(true);
            selectRef.current?.focus();
            return;
          }
          trackEvent("book_now_click", { source, plan, location_slug: loc.slug, destination: href });
        }}
        className={buttonClassName}
      >
        {label}
      </a>
      {needsStudio && (
        <p id={`${id}-hint`} role="alert" className="text-xs text-[#a46746] text-center">
          Choose your studio first so we open the right booking page.
        </p>
      )}
    </div>
  );
}
