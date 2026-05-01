"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, BookOpen } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-anim]");
    items.forEach((item, i) => {
      (item as HTMLElement).style.animationDelay = `${i * 120}ms`;
      item.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#031020]">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#38bdf8 1px,transparent 1px),linear-gradient(90deg,#38bdf8 1px,transparent 1px)", backgroundSize: "64px 64px" }} />

      {/* Glow blobs */}
      <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-[5%] w-56 h-56 bg-[#0ea5e9]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="opacity-0-init" data-anim>
          <span className="inline-flex items-center gap-2 text-sm font-mono text-[#38bdf8] bg-[rgba(56,189,248,0.12)] px-3 py-1 rounded-full mb-8 border border-[rgba(56,189,248,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            Open to internship opportunities
          </span>
        </div>

        <h1 className="opacity-0-init font-display text-6xl md:text-8xl leading-[1.05] tracking-tight mb-6 text-[#f0f9ff]" data-anim>
          Hi, I&apos;m <br />
          <span className="italic text-[#38bdf8]">Oneli Herath</span>
        </h1>

        <p className="opacity-0-init max-w-xl text-lg text-[#bae6fd] leading-relaxed mb-10" data-anim>
          A Computer Science undergraduate with hands-on experience developing user-centered web applications. 
          I focus on usability and intuitive design, bridging the gap between pixel-perfect UIs and robust full-stack solutions.
        </p>

        <div className="opacity-0-init flex flex-wrap gap-3 mb-12" data-anim>
          {["QA", "UI/UX", "Frontend Development", "Project Management"].map((role) => (
            <span key={role}
              className="text-xs font-mono font-medium px-3 py-1.5 border border-[#0e3a5e] rounded-full text-[#7dd3fc] bg-[#051b33]/60">
              {role}
            </span>
          ))}
        </div>

        <div className="opacity-0-init flex items-center gap-6" data-anim>
          <a href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#38bdf8] text-[#031020] text-sm font-semibold rounded-full hover:bg-[#0ea5e9] transition-colors duration-200">
            View my work
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7dd3fc] hover:text-[#f0f9ff] transition-colors">
            Get in touch →
          </a>
        </div>

        <div className="opacity-0-init flex items-center gap-4 mt-14 pt-10 border-t border-[#0e3a5e]" data-anim>
          <span className="text-xs text-[#7dd3fc] font-mono">Find me on</span>
          {[
            { href: "https://github.com/visakya", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/oneli-herath", icon: Linkedin, label: "LinkedIn" },
            { href: "https://medium.com/@oneliherath725", icon: BookOpen, label: "Medium" },
            { href: "mailto:oneli.20241796@iit.ac.lk", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="p-2 text-[#7dd3fc] hover:text-[#38bdf8] transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <a href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#7dd3fc] hover:text-[#38bdf8] transition-colors animate-bounce">
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
