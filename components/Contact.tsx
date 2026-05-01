"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xbdwllpy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("idle");
      alert("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#051b33] border-t border-[#0e3a5e]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-4 block">07 / Contact</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#f0f9ff] leading-tight mb-6">
                Let&apos;s work <span className="italic text-[#38bdf8]">together</span>
              </h2>
              <p className="text-[#bae6fd]/70 leading-relaxed mb-8">
                I&apos;m actively looking for internship opportunities in QA, UI/UX, Frontend Development, and Project Management. If you think there&apos;s a good fit, I&apos;d love to hear from you.
              </p>
              <div className="space-y-4 mb-10">
                <a href="mailto:oneli.20241796@iit.ac.lk"
                  className="flex items-center gap-3 text-sm text-[#bae6fd]/70 hover:text-[#38bdf8] transition-colors group">
                  <span className="p-2 bg-[#072544] rounded-lg border border-[#0e3a5e] group-hover:border-[#38bdf8]/30 transition-colors text-[#38bdf8]"><Mail size={15} /></span>
                  oneli.20241796@iit.ac.lk
                </a>
                <div className="flex items-center gap-3 text-sm text-[#bae6fd]/70">
                  <span className="p-2 bg-[#072544] rounded-lg border border-[#0e3a5e] text-[#38bdf8]"><MapPin size={15} /></span>
                  Colombo, Sri Lanka · Open to remote
                </div>
              </div>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/visakya", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/oneli-herath", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://medium.com/@oneliherath725", icon: BookOpen, label: "Medium" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#7dd3fc] px-4 py-2.5 border border-[#0e3a5e] rounded-full hover:border-[#38bdf8]/40 hover:text-[#38bdf8] transition-all">
                    <Icon size={15} />{label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              {status === "sent" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 bg-[rgba(56,189,248,0.15)] rounded-full flex items-center justify-center mb-4 border border-[#38bdf8]/20">
                    <Send size={22} className="text-[#38bdf8]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#f0f9ff] mb-2">Message sent!</h3>
                  <p className="text-[#7dd3fc]/60 text-sm">Thanks for reaching out — I&apos;ll get back to you soon.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-[#38bdf8] hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { key: "name", type: "text", placeholder: "Your name", label: "Name" },
                      { key: "email", type: "email", placeholder: "your@email.com", label: "Email" },
                    ].map(({ key, type, placeholder, label }) => (
                      <div key={key}>
                        <label className="text-xs font-medium text-[#7dd3fc]/50 block mb-1.5">{label}</label>
                        <input type={type} required placeholder={placeholder}
                          value={form[key as "name" | "email"]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-[#031020] border border-[#0e3a5e] rounded-xl text-[#f0f9ff] placeholder:text-[#7dd3fc]/30 focus:outline-none focus:border-[#38bdf8]/40 focus:bg-[#051b33] transition-all" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#7dd3fc]/50 block mb-1.5">Message</label>
                    <textarea required rows={6} placeholder="Tell me about the opportunity, project, or just say hi..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#031020] border border-[#0e3a5e] rounded-xl text-[#f0f9ff] placeholder:text-[#7dd3fc]/30 focus:outline-none focus:border-[#38bdf8]/40 focus:bg-[#051b33] transition-all resize-none" />
                  </div>
                  <button type="submit" disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#38bdf8] text-[#031020] text-sm font-semibold rounded-xl hover:bg-[#0ea5e9] transition-colors duration-200 disabled:opacity-60">
                    {status === "sending" ? (
                      <><span className="w-4 h-4 border-2 border-[#031020]/30 border-t-[#031020] rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={15} />Send message</>
                    )}
                  </button>
                  <p className="text-xs text-[#7dd3fc]/40 text-center">
                    Or email me directly at{" "}
                    <a href="mailto:oneli.20241796@iit.ac.lk" className="text-[#38bdf8] hover:underline">oneli.20241796@iit.ac.lk</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
