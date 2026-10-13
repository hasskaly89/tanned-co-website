import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Branded 404. Root not-found handles unmatched URLs and notFound() calls
// (e.g. an unknown /locations/[slug]); Next.js returns a 404 status for it.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans flex flex-col">
      <Navbar activePath="" />
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 pt-32 pb-20 md:pt-44 md:pb-32">
        <p className="eyebrow mb-4">Page not found</p>
        <h1 className="display-xl">We can&apos;t find that page.</h1>
        <p className="text-body text-lg leading-relaxed mt-6">
          The link may be old or mistyped. Head back to the home page or book your next tan.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <Link href="/" className="btn btn-dark">Go to the home page</Link>
          <Link href="/book-now" className="btn btn-outline">Book a tan</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
