"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "tannedco_exit_shown";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, location: "Exit Intent Popup" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

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

        {status === "success" ? (
          <>
            <div className="text-5xl mb-4">☀️</div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">
              You&apos;re In!
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight text-[#1a1a1a] mb-3">
              Check Your Phone
            </h2>
            <p className="text-[#5a4a3a] text-base leading-relaxed mb-6">
              Your exclusive offer is on its way to{" "}
              <span className="font-semibold">{form.phone}</span>. Keep an eye on your messages.
            </p>
            <button
              onClick={() => setVisible(false)}
              className="w-full bg-[#a46746] hover:bg-[#7d4e33] text-white text-sm font-bold uppercase tracking-widest py-4 rounded-full transition-colors"
            >
              Got It
            </button>
          </>
        ) : (
          <>
            {/* Sun icon */}
            <div className="text-5xl mb-4">✨</div>

            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-3">
              First Timer? Don&apos;t Leave!
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight text-[#1a1a1a] mb-3">
              Unlock Exclusive Offer
            </h2>
            <p className="text-[#5a4a3a] text-sm leading-relaxed mb-6">
              Drop your details and we&apos;ll send you a little something to start your Tanned Co. glow.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white border border-[#e8d9c3] text-[#1a1a1a] placeholder-[#9a8a7a] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#a46746] transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-[#e8d9c3] text-[#1a1a1a] placeholder-[#9a8a7a] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#a46746] transition-colors"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white border border-[#e8d9c3] text-[#1a1a1a] placeholder-[#9a8a7a] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#a46746] transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-[#a46746] hover:bg-[#7d4e33] disabled:opacity-60 text-white text-sm font-bold uppercase tracking-widest py-4 rounded-full transition-colors"
              >
                {status === "loading" ? "Sending..." : <><span>☀</span> Unlock My Offer</>}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
              )}
            </form>

            <button
              onClick={() => setVisible(false)}
              className="mt-4 text-xs text-[#9a8a7a] hover:text-[#5a4a3a] transition-colors underline"
            >
              No thanks, I&apos;ll pay full price
            </button>
          </>
        )}
      </div>
    </div>
  );
}
