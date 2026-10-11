import { APP_ACCESS_TEXT, APP_LINKS, CONTACT, SUPPORT_CALL_TEXT } from "@/lib/site";

/** How to get help: voice guidance in the booth, phone help, and the app for entry. Used on home and studio pages. */
const items: { title: string; body: React.ReactNode }[] = [
  {
    title: "Voice guidance in the booth",
    body: (
      <p className="text-body leading-relaxed">
        Voice prompts guide you through each position, and the in-room menu shows your shade and depth options before
        you start.
      </p>
    ),
  },
  {
    title: "Need a hand? Call us.",
    body: (
      <>
        <p className="text-body leading-relaxed">{SUPPORT_CALL_TEXT}</p>
        <a href={CONTACT.phoneHref} className="inline-block font-display font-medium text-2xl tracking-[0.06em] text-bronze-text mt-4 hover:text-bronze">
          {CONTACT.phone}
        </a>
      </>
    ),
  },
  {
    title: "Unlock with the app",
    body: (
      <>
        <p className="text-body leading-relaxed">{APP_ACCESS_TEXT}</p>
        <p className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm">
          <a href={APP_LINKS.appStore} target="_blank" rel="noopener noreferrer" className="text-link">App Store</a>
          <a href={APP_LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="text-link">Google Play</a>
        </p>
      </>
    ),
  },
];

export default function SupportBlock({ className = "bg-sand" }: { className?: string }) {
  return (
    <section className={`py-14 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-8 md:mb-12">
          <p className="eyebrow mb-4">Help when you need it</p>
          <h2 className="display-lg mb-5">Guided, with help a call away.</h2>
          <p className="text-body text-lg leading-relaxed">
            There are no staff in the room. Instead, the booth talks you through every step, and our team is a phone
            call away while the studios are open.
          </p>
        </div>
        {/* Phones: one accordion; desktop: three cards */}
        <div className="md:hidden border-t border-line mobile-acc">
          {items.map((it) => (
            <details key={it.title} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none">
                <span className="text-lg font-semibold">{it.title}</span>
                <span aria-hidden="true" className="text-2xl leading-none text-bronze transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="pb-5">{it.body}</div>
            </details>
          ))}
        </div>
        <ul className="hidden md:grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <li key={it.title} className="bg-white rounded-3xl border border-line p-7">
              <h3 className="text-lg font-semibold mb-2.5">{it.title}</h3>
              {it.body}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
