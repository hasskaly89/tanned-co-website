"use client";

import { useId, useState } from "react";
import { LOCATIONS, bookingUrlFor, type BookingPlan } from "@/lib/locations";
import { trackEvent } from "@/lib/analytics";

/**
 * Booking button for places where the visitor's studio is not known yet.
 * It looks like a normal button; tapping it reveals the 5 studios, and each
 * studio opens GymMaster already set to that studio.
 */
export default function StudioBookButton({
  plan,
  source,
  label,
  buttonClassName,
  tone = "light",
}: {
  plan: BookingPlan;
  source: string;
  label: string;
  buttonClassName: string;
  /** Background the studio chips sit on. */
  tone?: "light" | "dark";
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const chip =
    tone === "dark"
      ? "border-white/30 text-white hover:bg-white hover:text-ink hover:border-white"
      : "border-line bg-white text-ink hover:border-bronze hover:text-bronze-text";

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={`${buttonClassName} w-full`}
      >
        {label}
      </button>
      {open && (
        <div id={id} className="flex flex-col gap-2.5 pt-2">
          <p className={`text-xs font-medium text-center ${tone === "dark" ? "text-on-dark-muted" : "text-muted"}`}>
            Choose your studio
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {LOCATIONS.map((loc) => {
              const href = bookingUrlFor(loc, plan);
              return (
                <a
                  key={loc.slug}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("book_now_click", { source, plan, location_slug: loc.slug, destination: href })}
                  className={`text-center text-sm font-medium rounded-full border px-4 py-2.5 transition-colors ${chip}`}
                >
                  {loc.shortName}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
