import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// While true, legal pages show a review notice. Set to false once the owner
// (and ideally a lawyer) has approved the wording.
export const LEGAL_DRAFT = true;

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
    <div className="min-h-screen bg-[#fdf6ec] text-[#1a1a1a] font-sans">
      <Navbar activePath={activePath} />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {LEGAL_DRAFT && (
          <p className="mb-8 rounded-xl border border-[#e8d9c3] bg-white px-4 py-3 text-sm text-[#5a4a3a]">
            This page is being finalised. If you have a question about it, email hello@tannedco.com.au.
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-3">{title}</h1>
        <p className="text-sm text-[#5a4a3a] mb-10">Last updated {updated}</p>
        <div className="space-y-8 text-[#3a2e24] leading-relaxed [&_h2]:text-xl [&_h2]:font-black [&_h2]:uppercase [&_h2]:text-[#1a1a1a] [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_p]:mb-3 [&_a]:underline">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
