"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Subtle fade and slide-up for page sections as they scroll into view.
 * Desktop only (768px and up) and skipped under prefers-reduced-motion.
 * Sections already on screen are never touched, and content is fully visible
 * without JS, because the hidden state is only ever added here.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const ok = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches;
    if (!ok || !("IntersectionObserver" in window)) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("section, footer")).filter(
      (el) => !el.parentElement?.closest("section, footer, [role=dialog]") && el.getBoundingClientRect().top > window.innerHeight
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("reveal-in");
          el.classList.remove("reveal-pending");
          el.addEventListener("transitionend", () => el.classList.remove("reveal-in"), { once: true });
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    for (const el of targets) {
      el.classList.add("reveal-pending");
      io.observe(el);
    }
    return () => {
      io.disconnect();
      for (const el of targets) el.classList.remove("reveal-pending", "reveal-in");
    };
  }, [pathname]);

  return null;
}
