import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// While true, legal pages show a review notice. Set to false once the owner
// (and ideally a lawyer) has approved the wording.
export const LEGAL_DRAFT = false;

export default function LegalPage({
  title,
  updated,
  activePath,
  children,
}: {
  title: string;
  updated: string;
  activePath: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar activePath={activePath} />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        {LEGAL_DRAFT && (
          <p className="mb-8 rounded-xl border border-line bg-white px-4 py-3 text-sm text-body">
            This page is being finalised. If you have a question about it, email hello@tannedco.com.au.
          </p>
        )}
        <p className="eyebrow mb-4">Last updated {updated}</p>
        <h1 className="display-lg mb-12">{title}</h1>
        <div className="space-y-10 text-body leading-relaxed [&_h2]:font-display [&_h2]:font-medium [&_h2]:uppercase [&_h2]:tracking-[0.07em] [&_h2]:text-xl [&_h2]:text-ink [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_p]:mb-3 [&_a]:text-link">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
