"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Camera, Code2, Sparkles, Mail, Phone,
  ArrowRight, Github, Instagram, Facebook, Linkedin, MessageCircle,
  Coffee, Laptop, Aperture
} from "lucide-react"
import { BentoGrid, BentoTile } from "@/components/bento-grid"

/* ── Typewriter hook ─────────────────────────────────────────────── */
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), pause)
      } else if (deleting && charIdx > 0) {
        setText(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else {
        setDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return text
}

/* ── Tech badges ─────────────────────────────────────────────────── */
const techStack = [
  "React", "Next.js", "Python", "TypeScript", "Flask",
  "TailwindCSS", "Node.js", "Figma",
]

/* ── GitHub projects (static) ─────────────────────────────────────── */
const projects = [
  { name: "bella-luce-photography", desc: "Photography portfolio — Next.js 15 + Framer Motion", lang: "TypeScript", stars: 4 },
  { name: "flask-api-toolkit", desc: "Reusable Flask REST API starter with JWT auth", lang: "Python", stars: 12 },
]

/* ── Social links ─────────────────────────────────────────────────── */
const socials = [
  { icon: Instagram, href: "https://www.instagram.com/senuka.rosa/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/senuka.rosa", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/senuka-rosa-713108219/", label: "LinkedIn" },
]

/* ═══════════════════════════════════════════════════════════════════ */

export default function HubPage() {
  const typeText = useTypewriter(["Creator.", "Engineer.", "Visionary.", "Designer."], 90, 1600)

  return (
    <main className="min-h-screen bg-[#121212]">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/6 blur-[120px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-cyber-400/6 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-orange-400/6 blur-[100px]" />
        </div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 font-jetbrains mb-8 tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Negombo, Sri Lanka · Available for work
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Senuka Rosa
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl md:text-4xl font-playfair font-semibold mb-8 h-10 sm:h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white/40 mr-3">—</span>
            <span className="text-amber-400">{typeText}</span>
            <span className="ml-1 text-amber-400 animate-pulse">|</span>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Photographer capturing golden moments. Engineer building precision tools.
            Creative director crafting bold visual identities.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <Link
              href="#verticals"
              className="px-7 py-3 bg-amber-400 text-[#0e0e0e] font-semibold rounded-xl hover:bg-amber-300 transition-colors duration-200 text-sm"
            >
              Explore My Work
            </Link>
            <Link
              href="#contact"
              className="px-7 py-3 border border-white/15 text-white/80 rounded-xl hover:border-white/30 hover:text-white transition-all duration-200 text-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs font-jetbrains tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-white/20"
            animate={{ scaleY: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── BENTO GRID — MISSION CONTROL ─────────────────────────── */}
      <section id="verticals" className="py-20 px-4 md:px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-jetbrains text-xs text-white/30 tracking-widest uppercase mb-3">Mission Control</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white">
            Three Disciplines. One Vision.
          </h2>
        </motion.div>

        <BentoGrid>
          {/* ── Bella Luce Hero tile ── */}
          <BentoTile colSpan={8} rowSpan={4} accent="amber" delay={0}>
            <Link href="/bellaluce" className="block w-full h-full group">
              <div className="absolute inset-0">
                <Image
                  src="/gallery/photo1.jpg"
                  alt="Bella Luce Photography — golden hour portrait"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-amber-400" />
                  <span className="font-jetbrains text-xs text-amber-400 tracking-widest uppercase">Bella Luce</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white mb-1">
                  Timeless Portraits
                </h3>
                <p className="text-white/60 text-sm mb-4">in Golden Light · Negombo, Sri Lanka</p>
                <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  View Gallery <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-400 text-xs font-jetbrains">
                Photography
              </div>
            </Link>
          </BentoTile>

          {/* ── Portfolio card ── */}
          <BentoTile colSpan={4} rowSpan={2} accent="cyber" delay={1}>
            <Link href="/portfolio" className="block w-full h-full group p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-cyber-400" />
                <span className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase">Portfolio</span>
              </div>
              <div className="font-jetbrains text-xs text-white/30 mb-4 leading-relaxed">
                <span className="text-cyber-400">const</span>{" "}
                <span className="text-white/70">dev</span>{" "}
                <span className="text-white/40">=</span>{" "}
                <span className="text-amber-400">&quot;fullstack&quot;</span>
                <br />
                <span className="text-cyber-400">import</span>{" "}
                <span className="text-white/70">&#123; passion &#125;</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-1">Software Engineering</h3>
              <p className="text-white/50 text-xs mb-2">React · Python · Next.js · Flask</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-2 transition-all duration-200" style={{ color: "#3A7BD5", transform: "translateY(-4px)" }}>
                View<ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </BentoTile>

          {/* ── HyperVisuals card ── */}
          <BentoTile colSpan={4} rowSpan={2} accent="orange" delay={2}>
            <Link href="/hypervisuals" className="block w-full h-full group p-5 md:p-6 relative overflow-hidden">
              {/* Logo background */}
              <div className="absolute top-3 right-6 w-16 h-16 md:w-20 md:h-20 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image src="/hypervisuals/logo-white.png" alt="" fill className="object-contain" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4" style={{ color: "#3A7BD5" }} />
                  <span className="font-jetbrains text-xs tracking-widest uppercase" style={{ color: "#3A7BD5" }}>HyperVisuals</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-1">Multimedia & Branding</h3>
                <p className="text-white/50 text-xs mb-4">Video · Motion · Visual Identity</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {["After Effects", "Premiere Pro", "DaVinci Resolve"].map(s => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md border" style={{ background: "rgba(58,123,213,0.1)", color: "rgba(58,123,213,0.85)", borderColor: "rgba(58,123,213,0.2)" }}>
                      {s}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-200" style={{ color: "#3A7BD5" }}>
                  View Work <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </BentoTile>

          {/* ── About snippet ── */}
          <BentoTile colSpan={4} rowSpan={2} accent="neutral" delay={3}>
            <div className="p-5 md:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center mb-4">
                  <Aperture className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-playfair font-semibold text-white mb-2">Senuka Rosa</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Expierienced Photographer. Blending technical precision with artistic vision since 2020.
                </p>
              </div>
              <div className="flex items-center gap-2.5 mt-5 pt-4 border-t border-white/5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-amber-400/30 hover:bg-amber-400/10 transition-all group"
                  >
                    <Icon className="w-4 h-4 text-white/50 group-hover:text-amber-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </BentoTile>

          {/* ── Tech stack ── */}
          <BentoTile colSpan={4} rowSpan={2} accent="cyber" delay={4}>
            <div className="p-5 md:p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Laptop className="w-4 h-4 text-cyber-400" />
                <span className="font-jetbrains text-xs text-cyber-400 tracking-widest uppercase">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 + 0.2 }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-cyber-400/10 text-cyber-400/90 border border-cyber-400/20 font-jetbrains"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </BentoTile>

          {/* ── Latest project ── */}
          <BentoTile colSpan={4} rowSpan={2} accent="neutral" delay={5}>
            <div className="p-5 md:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Github className="w-4 h-4 text-white/60" />
                  <span className="font-jetbrains text-xs text-white/40 tracking-widest uppercase">Recent Projects</span>
                </div>
                <div className="space-y-3">
                  {projects.map(p => (
                    <div key={p.name} className="p-3 rounded-xl bg-white/3 border border-white/6">
                      <p className="font-jetbrains text-xs text-white/80 truncate">{p.name}</p>
                      <p className="text-white/40 text-xs mt-1 leading-snug">{p.desc}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-white/30 font-jetbrains">{p.lang}</span>
                        <span className="text-xs text-white/30">★ {p.stars}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/portfolio" className="text-xs text-cyber-400 hover:text-cyber-300 font-jetbrains mt-3 flex items-center gap-1">
                See all projects <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </BentoTile>

          {/* ── Contact CTA ── */}
          <BentoTile colSpan={4} rowSpan={2} accent="amber" delay={6}>
            <div className="p-5 md:p-6 h-full flex flex-col justify-between" id="contact">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-4 h-4 text-amber-400" />
                  <span className="font-jetbrains text-xs text-amber-400 tracking-widest uppercase">Let&apos;s Talk</span>
                </div>
                <h3 className="text-lg font-playfair font-semibold text-white mb-2">Start a Conversation</h3>
                <div className="space-y-2.5">
                  <a href="mailto:graphicshouse.lk@gmail.com" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-amber-400/70 shrink-0" />
                    graphicshouse.lk@gmail.com
                  </a>
                  <a href="tel:+94718706242" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-amber-400/70 shrink-0" />
                    071 870 6242
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/94718706242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0e0e0e] font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </BentoTile>

          {/* ── Gallery preview strip ── */}
          <BentoTile colSpan={8} rowSpan={2} accent="amber" delay={7} className="cursor-pointer min-h-[180px] sm:min-h-0">
            <Link href="/bellaluce" className="block w-full h-full group">
              <div className="absolute inset-0 flex">
                {["/gallery/photo2.jpg", "/gallery/photo4.jpg", "/gallery/photo6.jpg"].map((src, i) => (
                  <div key={i} className="flex-1 relative overflow-hidden">
                    <Image
                      src={src}
                      alt={`Gallery preview ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="px-5 py-2.5 rounded-xl bg-black/40 backdrop-blur-sm border border-amber-400/40 text-amber-400 text-sm font-medium group-hover:bg-black/60 transition-all">
                  Open Viewing Room →
                </span>
              </div>
            </Link>
          </BentoTile>
        </BentoGrid>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-10 mt-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-playfair text-white/40 text-sm">
            © {new Date().getFullYear()} Senuka Rosa. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/bellaluce" className="hover:text-amber-400 transition-colors">Photography</Link>
            <Link href="/portfolio" className="hover:text-cyber-400 transition-colors">Portfolio</Link>
            <Link href="/hypervisuals" className="hover:text-orange-400 transition-colors">HyperVisuals</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
