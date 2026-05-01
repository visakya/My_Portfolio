"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#volunteering", label: "Volunteering" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => { const el = document.querySelector(href); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#031020]/90 backdrop-blur-md border-b border-[#0e3a5e]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl text-[#f0f9ff] tracking-tight hover:text-[#38bdf8] transition-colors">
          OH<span className="text-[#38bdf8]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:bg-[#38bdf8] after:transition-all after:duration-200 ${active === href.slice(1)
                    ? "text-[#38bdf8] after:w-full"
                    : "text-[#7dd3fc] hover:text-[#f0f9ff] after:w-0 hover:after:w-full"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-[#0e3a5e] rounded-full text-[#7dd3fc] hover:bg-[#38bdf8] hover:text-[#031020] hover:border-[#38bdf8] transition-all duration-200"
        >
          Resume ↗
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 bg-[#f0f9ff] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#f0f9ff] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#f0f9ff] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#031020] border-t border-[#0e3a5e] px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#bae6fd] hover:text-[#38bdf8] transition-colors">
              {label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" className="text-sm font-medium text-[#38bdf8]">Resume ↗</a>
        </div>
      )}
    </nav>
  );
}
