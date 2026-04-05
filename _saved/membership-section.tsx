{/* ─────────────────────────────────────────────────────────────────────────
  SAVED — Membership sections removed from app/pricing/page.tsx
  Re-add these two blocks (MEMBERSHIP and MEMBERSHIP BANNER) whenever needed.
───────────────────────────────────────────────────────────────────────── */}

      {/* MEMBERSHIP */}
      <section className="py-20 md:py-28 bg-[#fdf0d5] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4 text-center">For Regular Glowers</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-4">Membership Options</h2>
          <p className="text-center text-[#5a4a3a] mb-14 max-w-lg mx-auto">
            Tan regularly? Our membership plans offer unlimited sessions, priority booking and exclusive member rates.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Solo Studio",
                desc: "Unlimited sessions at your home studio.",
                perks: ["Unlimited sessions/month", "1 location access", "Priority booking", "Member-only pricing"],
                cta: "1 studio",
              },
              {
                name: "All Access",
                desc: "Tan at any of our 5 Sydney locations whenever you want.",
                perks: ["Unlimited sessions/month", "All 5 locations", "Priority booking", "Member-only pricing", "Transferable sessions"],
                cta: "All 5 studios",
                highlight: true,
              },
              {
                name: "Duo",
                desc: "Share your membership with a friend or partner.",
                perks: ["Unlimited sessions/month", "2 members, 1 plan", "All 5 locations", "Priority booking"],
                cta: "2 people",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 border flex flex-col ${
                  plan.highlight
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-xl"
                    : "bg-white text-[#1a1a1a] border-[#e8d9c3] shadow-sm"
                }`}
              >
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-2">{plan.cta}</p>
                <h3 className={`text-xl font-black uppercase mb-3 ${plan.highlight ? "text-white" : "text-[#1a1a1a]"}`}>{plan.name}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/60" : "text-[#5a4a3a]"}`}>{plan.desc}</p>
                <ul className={`space-y-2.5 text-sm flex-1 mb-8 ${plan.highlight ? "text-white/70" : "text-[#5a4a3a]"}`}>
                  {plan.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-[#a46746] mt-0.5">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <div className={`text-center py-3 rounded-full font-bold text-sm uppercase tracking-wider ${plan.highlight ? "bg-[#a46746] text-white" : "border-2 border-[#1a1a1a] text-[#1a1a1a]"}`}>
                  Pricing on Request
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#5a4a3a] text-sm mt-10">
            Interested in a membership?{" "}
            <Link href="/contact" className="text-[#a46746] font-semibold hover:underline">
              Contact your nearest studio →
            </Link>
          </p>
        </div>
      </section>

      {/* MEMBERSHIP BANNER */}
      <section className="py-16 bg-white text-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#a46746] mb-4">Go Further</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">Looking for Something More Regular?</h2>
          <p className="text-[#5a4a3a] text-lg mb-8">
            We offer membership options for our most dedicated glow-getters. Get in touch to find out what&apos;s available at your nearest location.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center border-2 border-[#a46746] text-[#a46746] px-8 py-3.5 rounded-full font-semibold hover:bg-[#a46746] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
