"use client";
import { useInView } from "@/hooks/useInView";

const skillGroups = [
  { category: "Languages", icon: "◈", skills: ["Java", "Python", "JavaScript"] },
  { category: "Frontend", icon: "◑", skills: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend & DB", icon: "◉", skills: ["FastAPI", "MySQL"] },
  { category: "Tools & Testing", icon: "◇", skills: ["Git", "GitHub", "Pytest", "ClickUp"] },
  { category: "Design Tools", icon: "◐", skills: ["Figma", "Axure"] },
  { category: "Soft Skills", icon: "◎", skills: ["Analytical thinking", "Collaborative teamwork", "Usability-focused", "Effective Communication"] },
];

export default function Skills() {
  const { ref, inView } = useInView();
  return (
    <section id="skills" className="py-28 bg-[#031020] border-t border-[#0e3a5e]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-4 block">02 / Skills</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#f0f9ff] leading-tight">What I work with</h2>
            </div>
            <p className="hidden md:block text-sm text-[#7dd3fc] max-w-xs text-right">A versatile toolkit spanning design, development, and quality assurance.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map(({ category, icon, skills }, i) => (
              <div key={category}
                className="bg-[#051b33] p-6 rounded-2xl border border-[#0e3a5e] hover:border-[#38bdf8]/30 hover:shadow-lg hover:shadow-[#38bdf8]/5 transition-all duration-200 group"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#38bdf8] text-lg">{icon}</span>
                  <h3 className="text-sm font-semibold text-[#f0f9ff] tracking-wide">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill}
                      className="text-xs px-2.5 py-1 bg-[#072544] rounded-full text-[#7dd3fc] font-medium border border-[#0e3a5e] group-hover:border-[#38bdf8]/20 transition-colors">
                      {skill}
                    </span>
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
