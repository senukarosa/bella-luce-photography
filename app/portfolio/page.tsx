import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Terminal, Code2, Star, Linkedin, Instagram, Facebook, GraduationCap, Users } from "lucide-react"
import SkillsRadar from "@/components/skills-radar"
import ProcessAccordion from "@/components/process-accordion"

export const metadata: Metadata = {
  title: "Portfolio — Senuka Rosa | Software Engineer & Cyber Security Undergraduate",
  description:
    "Second-year BSc (Hons) IT undergraduate specialising in Cyber Security at SLIIT. Full-stack engineer skilled in React, Next.js, Python, and Flask.",
  keywords: ["Senuka Rosa portfolio", "SLIIT cyber security", "full-stack developer Sri Lanka", "React developer", "Python engineer", "Next.js"],
}

const projects = [
  {
    name: "bella-luce-photography",
    desc: "Multi-disciplinary portfolio site built with Next.js 15, Framer Motion, and TailwindCSS. Features a Bento Grid hub and three dedicated verticals.",
    tags: ["TypeScript", "Next.js", "Framer Motion", "TailwindCSS"],
    stars: 4,
    link: "https://github.com/IT24104385",
  },
  {
    name: "flask-api-toolkit",
    desc: "Production-ready Flask REST API starter with JWT authentication, role-based access control, and automated Pytest test suite.",
    tags: ["Python", "Flask", "JWT", "PostgreSQL"],
    stars: 12,
    link: "https://github.com/IT24104385",
  },
  {
    name: "react-dashboard-kit",
    desc: "Reusable admin dashboard components library with Recharts visualizations, dark mode, and fully typed TypeScript interfaces.",
    tags: ["React", "TypeScript", "Recharts", "Storybook"],
    stars: 8,
    link: "https://github.com/IT24104385",
  },
  {
    name: "hypervisuals-cms",
    desc: "Headless CMS for managing creative portfolio assets. Built with Next.js App Router and a SQLite backend.",
    tags: ["Next.js", "SQLite", "REST API", "Node.js"],
    stars: 3,
    link: "https://github.com/IT24104385",
  },
]

const techCategories = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
  { label: "Backend", items: ["Python", "Flask", "Node.js", "REST APIs", "JWT Auth"] },
  { label: "Database", items: ["PostgreSQL", "SQLite", "Prisma ORM"] },
  { label: "Tools", items: ["Git", "GitHub Actions", "Vercel", "Netlify", "Figma"] },
]

export default function CodingPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-20">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyber-400/5 blur-[140px]" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00A3FF 1px, transparent 1px), linear-gradient(90deg, #00A3FF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4 text-cyber-400" />
            <span className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase">Software Engineering</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-playfair font-semibold text-white mb-4 leading-tight">
            Precision.<br />
            <span className="text-cyber-400">Performance.</span><br />
            Purpose.
          </h1>
          <p className="text-white/55 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            Full-stack engineer building high-quality web applications. From pixel-perfect frontends to robust
            Python APIs — every line of code is intentional.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/IT24104385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-400 text-[#0e0e0e] font-semibold rounded-xl hover:bg-cyber-300 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub Profile
            </a>
            <Link
              href="/#contact"
              className="px-6 py-3 border border-white/15 text-white/70 rounded-xl hover:border-cyber-400/40 hover:text-cyber-400 transition-all"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Me ───────────────────────────────────────────── */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portrait */}
          <div className="relative h-[400px] md:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-white/6 group">
            <Image
              src="/hypervisuals/founder.jpg"
              alt="Senuka Rosa"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />
          </div>
          {/* Education & Bio */}
          <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyber-400" />
              <span className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase">Education</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold text-white mb-3">Senuka Rosa</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-3">
              Second-year undergraduate at <span className="text-white/80">Sri Lanka Institute of Information Technology (SLIIT)</span> studying{" "}
              <span className="text-cyber-400">BSc (Hons) in Information Technology</span>, specialising in{" "}
              <span className="text-cyber-400">Cyber Security</span>.
            </p>
            <div className="flex items-center gap-2 mt-4 p-3 rounded-xl bg-white/3 border border-white/6">
              <Users className="w-4 h-4 text-cyber-400/70 shrink-0" />
              <p className="text-white/50 text-xs leading-relaxed">
                Sub-Committee Member at{" "}
                <a
                  href="https://www.facebook.com/sliit.fcmu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-400 hover:text-cyber-300 underline underline-offset-2 transition-colors"
                >
                  SLIIT Faculty of Computing Media Unit (FCMU)
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/6 flex flex-col justify-between">
            <div>
              <span className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase">Connect</span>
              <h3 className="text-xl font-playfair font-semibold text-white mt-2 mb-4">Find Me Online</h3>
            </div>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/senuka-rosa-713108219/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6 hover:border-cyber-400/30 hover:bg-cyber-400/5 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-[#0A66C2] shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">LinkedIn</p>
                  <p className="text-white/35 text-xs">senuka-rosa</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/senuka.rosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6 hover:border-pink-400/30 hover:bg-pink-400/5 transition-all group"
              >
                <Instagram className="w-5 h-5 text-pink-400 shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">Instagram</p>
                  <p className="text-white/35 text-xs">@senuka.rosa</p>
                </div>
              </a>
              <a
                href="https://www.facebook.com/senuka.rosa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all group"
              >
                <Facebook className="w-5 h-5 text-[#1877F2] shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">Facebook</p>
                  <p className="text-white/35 text-xs">senuka.rosa</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Radar + Tech Stack ────────────────────────── */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase mb-6">Proficiency Map</p>
              <SkillsRadar />
            </div>
            <div>
              <p className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase mb-6">Full Tech Stack</p>
              <div className="space-y-4">
                {techCategories.map(cat => (
                  <div key={cat.label} className="p-5 rounded-xl bg-[#1a1a1a] border border-white/6">
                    <p className="text-white/40 text-xs font-jetbrains mb-3 uppercase tracking-wider">{cat.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map(item => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1.5 rounded-lg bg-cyber-400/8 text-cyber-400/80 border border-cyber-400/15 font-jetbrains"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <p className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl font-playfair font-semibold text-white">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/6 hover:border-cyber-400/30 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyber-400/70" />
                  <p className="font-jetbrains text-sm text-white/80">{proj.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-white/30">
                    <Star className="w-3 h-3" /> {proj.stars}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-cyber-400 transition-colors"
                    aria-label={`Open ${proj.name} on GitHub`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/4 text-white/40 border border-white/6 font-jetbrains">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://github.com/IT24104385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyber-400 border border-cyber-400/30 px-5 py-2.5 rounded-xl hover:bg-cyber-400/10 transition-all"
          >
            <Github className="w-4 h-4" /> View all on GitHub
          </a>
        </div>
      </section>

      {/* ── Engineering Process ──────────────────────────────── */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="mb-10">
            <p className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase mb-3">How I Work</p>
            <h2 className="text-3xl font-playfair font-semibold text-white mb-3">Engineering Process</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Transparency and verifiable quality are non-negotiable. Here&apos;s the lifecycle of every project I ship.
            </p>
          </div>
          <ProcessAccordion />
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/30">
          <p>© {new Date().getFullYear()} Senuka Rosa</p>
          <Link href="/" className="hover:text-cyber-400 transition-colors">← Back to Hub</Link>
        </div>
      </footer>
    </main>
  )
}
