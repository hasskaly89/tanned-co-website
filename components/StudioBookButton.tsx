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
}: {
  plan: BookingPlan;
  source: string;
  label: string;
  buttonClassName: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={`${buttonClassName} w-full cursor-pointer`}
      >
        {label}
      </button>
      {open && (
        <div id={id} className="flex flex-col gap-2 pt-1">
          <p className="text-xs text-center opacity-80">Choose your studio</p>
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
                  className="text-center text-sm font-semibold rounded-full border border-current/30 px-4 py-2.5 hover:bg-[#a46746] hover:text-white hover:border-[#a46746] transition-colors"
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
