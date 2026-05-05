"use client";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "BSc", label: "CS Undergrad" },
  { value: "3", label: "Key Projects" },
  { value: "10+", label: "Technologies" },
  { value: "4", label: "Core Focus Areas" },
];

export default function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="py-28 bg-[#051b33] border-t border-[#0e3a5e]">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-4 block">01 / About me</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#f0f9ff] leading-tight mb-6">
              Turning ideas into{" "}<span className="italic text-[#38bdf8]">real products</span>
            </h2>
            <div className="space-y-4 text-[#bae6fd] leading-relaxed">
              <p>I&apos;m a Computer Science undergraduate with hands-on experience in developing user-centered web applications, with a strong focus on usability and intuitive design. Skilled in frontend and backend development using React, JavaScript, Python, Java, and SQL.</p>
              <p>I have practical experience integrating APIs and building real-time systems, and a demonstrated ability to work collaboratively in team environments using Git.</p>
              <p>Currently seeking internship opportunities specializing in UI/UX Design and Quality Assurance, alongside frontend roles, to help improve user experience, system reliability, and efficient project delivery.</p>
              <p>When I&apos;m not writing code or designing interfaces, you can usually find me writing articles on Medium or playing the piano and recorder.</p>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="text-sm font-medium px-5 py-2.5 bg-[#38bdf8] text-[#031020] rounded-full hover:bg-[#0ea5e9] transition-colors font-semibold">Let&apos;s talk</a>
              <a href="/resume.pdf" target="_blank" className="text-sm font-medium px-5 py-2.5 border border-[#0e3a5e] rounded-full text-[#7dd3fc] hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-colors">Download CV</a>
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#072544] border border-[#0e3a5e] flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt="Oneli Herath"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#38bdf8]/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#38bdf8]/30 rounded-bl-lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="p-5 bg-[#072544] rounded-xl border border-[#0e3a5e]">
                  <div className="font-display text-3xl text-[#38bdf8] mb-1">{value}</div>
                  <div className="text-xs text-[#7dd3fc] font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
