"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    captureAttribution();
    const qs = searchParams?.toString();
    const url = `${window.location.origin}${pathname}${qs ? `?${qs}` : ""}`;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

export default function PageViewTracker() {
  // Suspense boundary required by Next.js App Router when using useSearchParams
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
