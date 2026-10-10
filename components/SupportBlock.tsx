import { APP_ACCESS_TEXT, APP_LINKS, CONTACT, SUPPORT_CALL_TEXT } from "@/lib/site";

/** How to get help: voice guidance in the booth, phone help, and the app for entry. Used on home and studio pages. */
export default function SupportBlock({ className = "bg-sand" }: { className?: string }) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Help when you need it</p>
          <h2 className="display-lg mb-5">Guided, with help a call away.</h2>
          <p className="text-body text-lg leading-relaxed">
            There are no staff in the room. Instead, the booth talks you through every step, and our team is a phone
            call away while the studios are open.
          </p>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          <li className="bg-white rounded-3xl border border-line p-7">
            <h3 className="text-lg font-semibold mb-2.5">Voice guidance in the booth</h3>
            <p className="text-body leading-relaxed">
              Voice prompts guide you through each position, and the in-room menu shows your shade and depth options
              before you start.
            </p>
          </li>
          <li className="bg-white rounded-3xl border border-line p-7">
            <h3 className="text-lg font-semibold mb-2.5">Need a hand? Call us.</h3>
            <p className="text-body leading-relaxed">{SUPPORT_CALL_TEXT}</p>
            <a href={CONTACT.phoneHref} className="inline-block font-display font-medium text-2xl tracking-[0.06em] text-bronze-text mt-4 hover:text-bronze">
              {CONTACT.phone}
            </a>
          </li>
          <li className="bg-white rounded-3xl border border-line p-7">
            <h3 className="text-lg font-semibold mb-2.5">Unlock with the app</h3>
            <p className="text-body leading-relaxed">{APP_ACCESS_TEXT}</p>
            <p className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm">
              <a href={APP_LINKS.appStore} target="_blank" rel="noopener noreferrer" className="text-link">App Store</a>
              <a href={APP_LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="text-link">Google Play</a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
