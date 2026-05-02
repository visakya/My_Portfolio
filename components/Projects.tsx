"use client";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    number: "01", title: "AI-Enhanced Pharmacy Management",
    description: "A comprehensive pharmacy platform featuring AI-assisted stock management. As this was a group project, my key contributions included:",
    contributions: [
      "Developed a patient-centric WhatsApp bot using Python, FastAPI, and Twilio for prescription handling",
      "Implemented a disease alert feature to notify users of high-risk or spreading diseases",
      "Integrated core backend services with MySQL and SQLAlchemy",
      "Collaborated using Git, contributing heavily to backend logic, debugging, and testing",
      "Designed and implemented the core UI/UX to ensure an intuitive and user-centered platform experience"
    ],
    tags: ["Python", "FastAPI", "React", "Next.js", "MySQL", "Pytest"], type: "Full Stack",
    github: "https://github.com/Iqbaal-pro/HealixPharm", live: "", featured: false,
  },
  {
    number: "02", title: "Property Listing Web App",
    description: "Implemented a responsive React-based front-end for a property sales and rental platform. Designed reusable components for displaying dynamic property data.",
    tags: ["React", "JavaScript", "HTML/CSS"], type: "Frontend",
    github: "https://github.com/visakya/estate-agent-app", live: "https://visakya.github.io/estate-agent-app/", featured: false,
  },
  {
    number: "03", title: "EarthCare UX/UI Prototype",
    description: "Designed a high-fidelity Figma prototype for a sustainability app aligned with UN SDGs. Features recycling guidance, volunteering, and gamified rewards.",
    tags: ["Figma", "UI/UX", "Prototyping"], type: "Design",
    github: "", live: "https://www.figma.com/proto/JTm0o0QM8vtfgXnc9I0vyI/HCI-CW2?node-id=0-1&t=rSXkcYrhkZd3EOMf-1", featured: false,
  },
  {
    number: "04", title: "Smart Campus API",
    description: "Developed a RESTful web service to simulate a campus monitoring system. Manages rooms, sensors, and readings with dynamic filtering and structured error handling.",
    tags: ["Java", "JAX-RS", "Tomcat", "Maven"], type: "Backend",
    github: "https://github.com/visakya/SmartCampusAPI", live: "", featured: false,
  },
];

export default function Projects() {
  const { ref, inView } = useInView();
  return (
    <section id="projects" className="py-28 bg-[#051b33] border-t border-[#0e3a5e]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-14">
            <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-4 block">03 / Projects</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#f0f9ff] leading-tight">Things I&apos;ve built</h2>
          </div>
          <div className="space-y-6">
            {projects.map((project, i) => (
              <div key={project.number}
                className="group p-7 rounded-2xl border bg-[#031020] border-[#0e3a5e] transition-all duration-200 hover:shadow-xl hover:border-[#38bdf8]/20"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-[#7dd3fc]/40">{project.number}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-[rgba(56,189,248,0.08)] text-[#7dd3fc] border border-[#0e3a5e]">{project.type}</span>
                    </div>
                    <h3 className="font-display text-2xl text-[#f0f9ff] mb-3">{project.title}</h3>
                    <p className="text-sm leading-relaxed max-w-xl text-[#bae6fd]/80">{project.description}</p>
                    {project.contributions && (
                      <ul className="mt-3 space-y-1 max-w-xl">
                        {project.contributions.map((point, idx) => (
                          <li key={idx} className="text-sm text-[#bae6fd]/70 flex gap-2">
                            <span className="text-[#38bdf8] mt-0.5 shrink-0">›</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[#072544] border border-[#0e3a5e] text-[#7dd3fc]">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:flex-col md:items-end">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="p-2.5 rounded-full border border-[#0e3a5e] text-[#7dd3fc] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="p-2.5 rounded-full border border-[#0e3a5e] text-[#7dd3fc] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
