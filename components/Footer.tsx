export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#020d1a] py-8 border-t border-[#0e3a5e]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display text-lg text-[#f0f9ff]/80">OH<span className="text-[#38bdf8]">.</span></span>
        <p className="text-xs font-mono text-[#7dd3fc]/40">© {year} Oneli Herath · Built with Next.js &amp; Tailwind CSS</p>
        <a href="#" className="text-xs font-mono text-[#7dd3fc]/40 hover:text-[#38bdf8] transition-colors">Back to top ↑</a>
      </div>
    </footer>
  );
}
