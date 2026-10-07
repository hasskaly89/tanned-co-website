import Link from "next/link";
import OfferButton from "@/components/OfferButton";

/** Dark closing band used at the bottom of most pages. */
export default function CtaBand({
  eyebrow = "Five studios. Open 7 days.",
  title = "Ready when you are.",
  text = "Book in under a minute. First visit? Unlock your first-timer offer.",
  source,
  children,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  text?: string;
  source: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-espresso text-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="eyebrow-light mb-4">{eyebrow}</p>
        <h2 className="display-lg">{title}</h2>
        <p className="text-on-dark text-lg leading-relaxed mt-5 max-w-xl mx-auto">{text}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
          {children ?? (
            <>
              <Link href="/book-now" className="btn btn-light">Book your tan</Link>
              <OfferButton source={source} className="btn btn-outline-light">
                Claim first-visit offer
              </OfferButton>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
