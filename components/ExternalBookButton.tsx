"use client";

import { trackEvent } from "@/lib/analytics";

/**
 * Button that links to the external GymMaster booking portal and fires a
 * `book_now_click` GA4 event with a `source` param so we can break down
 * which CTA on the site is driving bookings.
 */
export default function ExternalBookButton({
  href,
  source,
  children,
  className,
  eventName = "book_now_click",
  extraParams,
}: {
  href: string;
  source: string;
  children: React.ReactNode;
  className?: string;
  eventName?: string;
  extraParams?: Record<string, unknown>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent(eventName, { source, destination: href, ...extraParams })
      }
      className={className}
    >
      {children}
    </a>
  );
}
