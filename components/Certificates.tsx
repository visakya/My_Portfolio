"use client";
import { ExternalLink, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  tags: string[];
};

const certificates: Certificate[] = [
  { title: "Java Object-Oriented Programming", issuer: "LinkedIn", date: "Completed", credential: "#certificates", tags: ["Java", "OOP"] },
  { title: "Learning Python", issuer: "LinkedIn Learning", date: "Completed", credential: "https://lnkd.in/e6w7epRq", tags: ["Python"] },
  { title: "Python GUI Development with Tkinter", issuer: "LinkedIn Learning", date: "Completed", credential: "https://lnkd.in/eg4qmsAT", tags: ["Python", "Tkinter", "GUI"] },
  { title: "Python Object-Oriented Programming", issuer: "LinkedIn Learning", date: "Completed", credential: "https://lnkd.in/etTbF6rz", tags: ["Python", "OOP"] },
  { title: "Python for Non-Programmers", issuer: "LinkedIn Learning", date: "Completed", credential: "https://lnkd.in/exnndU_E", tags: ["Python"] }
];

const workshops = [
  { title: "Global Leadership & Outreach Workshop", org: "Sysco LABS", date: "2026", duration: "Completed" },
  { title: "Upper-Intermediate English Course", org: "British Council Sri Lanka", date: "Pre-University", duration: "Certified" },
  { title: "Intermediate English Course", org: "British Council Sri Lanka", date: "Pre-University", duration: "Certified" },
];

export default function Certificates() {
  const { ref, inView } = useInView();
  return (
    <section id="certificates" className="py-28 bg-[#051b33] border-t border-[#0e3a5e]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-14">
            <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-4 block">05 / Certificates & Workshops</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#f0f9ff] leading-tight">Continuous learning</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h3 className="text-xs font-mono text-[#7dd3fc]/50 uppercase tracking-widest mb-6">Certifications</h3>
              <div className="space-y-4">
                {certificates.map((cert, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-[#031020] rounded-xl border border-[#0e3a5e] hover:border-[#38bdf8]/20 hover:bg-[rgba(56,189,248,0.03)] transition-all group">
                    <div className="mt-1 p-2 bg-[#072544] rounded-lg border border-[#0e3a5e] text-[#38bdf8] shrink-0"><Award size={16} /></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#f0f9ff] leading-snug">{cert.title}</h4>
                        <a href={cert.credential} target="_blank" rel="noopener noreferrer"
                          className="shrink-0 text-[#7dd3fc]/40 hover:text-[#38bdf8] transition-colors"><ExternalLink size={14} /></a>
                      </div>
                      <p className="text-xs text-[#7dd3fc]/60 mt-0.5">{cert.issuer} · {cert.date}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {cert.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-[#072544] border border-[#0e3a5e] rounded-full text-[#7dd3fc]">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono text-[#7dd3fc]/50 uppercase tracking-widest mb-6">Workshops & Trainings</h3>
              <div className="space-y-3">
                {workshops.map((w, i) => (
                  <div key={i} className="p-4 bg-[#031020] rounded-xl border border-[#0e3a5e] hover:border-[#38bdf8]/20 transition-all">
                    <h4 className="text-sm font-semibold text-[#f0f9ff] mb-1">{w.title}</h4>
                    <p className="text-xs text-[#7dd3fc]/60">{w.org}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-mono text-[#7dd3fc]/40">{w.date}</span>
                      <span className="text-[#0e3a5e]">·</span>
                      <span className="text-xs text-[#7dd3fc]/40">{w.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
