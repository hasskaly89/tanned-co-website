import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e8d9c3] px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3">
        <Link
          href="/book-now"
          className="flex-1 flex items-center justify-center gap-2 bg-[#a46746] hover:bg-[#7d4e33] text-white text-sm font-bold uppercase tracking-widest py-3.5 rounded-full transition-colors"
        >
          <span>☀</span> Book Now
        </Link>
        <a
          href="tel:1300826633"
          className="w-auto px-5 flex items-center justify-center gap-2 border-2 border-[#a46746] text-[#a46746] text-sm font-bold uppercase tracking-widest py-3.5 rounded-full hover:bg-[#a46746] hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          Call
        </a>
      </div>
    </div>
  );
}
