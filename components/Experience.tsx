"use client";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    type: "experience", role: "Part-time English Teacher", org: "Morning Star International Institute",
    period: "Sep 2025 – Present", location: "Sri Lanka",
    points: [
      "Developed strong communication and presentation skills by effectively explaining concepts to students",
      "Demonstrated robust leadership and time-management abilities by balancing teaching responsibilities alongside an intensive Computer Science degree",
    ],
  },
  {
    type: "education", role: "BSc (Hons) Computer Science", org: "IIT affiliated with University of Westminster",
    period: "Ongoing", location: "Sri Lanka",
    points: [
      "Currently pursuing an honors degree in Computer Science",
      "Developing foundational and advanced skills in system development, frontend, and backend engineering",
    ],
  },
  {
    type: "education", role: "G.C.E. Advanced Level", org: "Sirimavo Bandaranaike Vidyalaya",
    period: "Completed", location: "Colombo 07, Sri Lanka",
    points: [
      "Combined Mathematics: C",
      "Physics: C",
      "Chemistry: C",
      "General English: A"
    ],
  },
  {
    type: "education", role: "G.C.E. Ordinary Level", org: "Sirimavo Bandaranaike Vidyalaya",
    period: "Completed", location: "Colombo 07, Sri Lanka",
    points: [
      "Achieved 9 'A' passes including Mathematics, ICT, and English",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();
  return (
    <section id="experience" className="py-28 bg-[#031020] border-t border-[#0e3a5e]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-14">
            <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-4 block">04 / Experience & Education</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#f0f9ff] leading-tight">My journey so far</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#0e3a5e] hidden md:block" />
            <div className="space-y-8">
              {experiences.map((item, i) => (
                <div key={i} className={`relative md:flex md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 top-6 z-10 w-3 h-3 rounded-full border-2 border-[#38bdf8] bg-[#031020]" />
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-[#051b33] p-6 rounded-2xl border border-[#0e3a5e] hover:border-[#38bdf8]/20 hover:shadow-lg hover:shadow-[#38bdf8]/5 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-full mb-2 inline-block ${
                            item.type === "experience"
                              ? "bg-[rgba(56,189,248,0.15)] text-[#38bdf8] border border-[#38bdf8]/20"
                              : "bg-[#072544] text-[#7dd3fc] border border-[#0e3a5e]"
                          }`}>{item.type === "experience" ? "Experience" : "Education"}</span>
                          <h3 className="font-semibold text-[#f0f9ff] text-base">{item.role}</h3>
                          <p className="text-[#7dd3fc] text-sm">{item.org}</p>
                        </div>
                        <div className="text-right text-xs text-[#7dd3fc]/60 font-mono shrink-0 ml-4">
                          <div>{item.period}</div>
                          <div>{item.location}</div>
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {item.points.map((point, j) => (
                          <li key={j} className="text-sm text-[#bae6fd]/70 flex gap-2">
                            <span className="text-[#38bdf8] mt-1 shrink-0">›</span>{point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
