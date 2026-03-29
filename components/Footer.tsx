export default function Footer() {
  return (
    <footer className="bg-[#111] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <img src="/logo.png" alt="Tanned Co." className="h-6 object-contain brightness-0 invert opacity-50" />
        <p className="text-white/40 text-xs text-center">
          © {new Date().getFullYear()} Tanned Co. All rights reserved.
        </p>
        <a
          href="https://www.tannedco.com.au/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 text-xs hover:text-white/60 transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
