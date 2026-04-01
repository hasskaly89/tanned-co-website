"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SESSION_KEY = "tannedco_exit_shown";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse exits through the top of the viewport
      if (e.clientY <= 5 && !triggered) {
        triggered = true;
        sessionStorage.setItem(SESSION_KEY, "1");
        // Small delay so it doesn't flash immediately
        setTimeout(() => setVisible(true), 200);
      }
    };

    // Wait 5 seconds before activating the listener (avoid firing on fast navigation)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={() => setVisible(false)}
    >
      <div
        className="relative bg-[#fdf6ec] rounded-3xl max-w-md w-full p-8 md:p-10 shadow-2xl border border-[#e8d9c3] text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-[#9a8a7a] hover:text-[#1a1a1a] transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Sun icon */}
        <div className="text-5xl mb-4">☀️</div>

        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">
          Wait — Don&apos;t Leave!
        </p>
        <h2 className="text-3xl font-black uppercase leading-tight text-[#1a1a1a] mb-3">
          Your Perfect Tan Is Only $35
        </h2>
        <p className="text-[#5a4a3a] text-base leading-relaxed mb-8">
          First time? Walk-in sessions start from just <strong>$35</strong>. Private booth,
          guided experience, flawless results — book online in seconds.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/book-now"
            onClick={() => setVisible(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#a46746] hover:bg-[#7d4e33] text-white text-sm font-bold uppercase tracking-widest py-4 rounded-full transition-colors"
          >
            <span>☀</span> Book My Tan — $35
          </Link>
          <button
            onClick={() => setVisible(false)}
            className="text-xs text-[#9a8a7a] hover:text-[#5a4a3a] transition-colors underline"
          >
            No thanks, I&apos;ll continue browsing
          </button>
        </div>
      </div>
    </div>
  );
}
