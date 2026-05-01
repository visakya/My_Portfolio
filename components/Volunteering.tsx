"use client";
import { Heart } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const volunteering = [
  {
    role: "Delegate Handling Team", org: "Cipher 2.0", period: "2026 (Upcoming)",
    description: "Selected through an interview process to assist with delegate coordination and event management.",
    impact: "Event Management", tags: ["Leadership", "Coordination", "Events"],
  },
];

export default function Volunteering() {
  const { ref, inView } = useInView();
  return (
    <section id="volunteering" className="py-28 bg-[#031020] border-t border-[#0e3a5e]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-14">
            <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-4 block">06 / Volunteering</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#f0f9ff] leading-tight">Giving back</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {volunteering.map((item, i) => (
              <div key={i} className="bg-[#051b33] p-6 rounded-2xl border border-[#0e3a5e] hover:border-[#38bdf8]/20 hover:shadow-lg hover:shadow-[#38bdf8]/5 transition-all duration-200 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-[rgba(56,189,248,0.12)] rounded-lg text-[#38bdf8]"><Heart size={16} /></div>
                  <span className="text-xs font-mono text-[#7dd3fc]/50">{item.period}</span>
                </div>
                <h3 className="font-semibold text-[#f0f9ff] text-base mb-0.5">{item.role}</h3>
                <p className="text-sm text-[#38bdf8] font-medium mb-3">{item.org}</p>
                <p className="text-sm text-[#bae6fd]/70 leading-relaxed flex-1">{item.description}</p>
                <div className="mt-5 pt-4 border-t border-[#0e3a5e] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#38bdf8] bg-[rgba(56,189,248,0.12)] px-2.5 py-1 rounded-full border border-[#38bdf8]/20">
                    {item.impact}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-[#072544] border border-[#0e3a5e] rounded-full text-[#7dd3fc]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
