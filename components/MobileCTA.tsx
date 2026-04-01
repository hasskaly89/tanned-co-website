import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e8d9c3] px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <Link
        href="/book-now"
        className="flex items-center justify-center gap-2 bg-[#a46746] hover:bg-[#7d4e33] text-white text-sm font-bold uppercase tracking-widest w-full py-3.5 rounded-full transition-colors"
      >
        <span>☀</span> Book Now
      </Link>
    </div>
  );
}
