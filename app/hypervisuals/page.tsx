"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"

/* ── HyperVisuals brand palette (from logo) ── */
const BRAND = {
  dark: "#1C2333",
  blue: "#3A7BD5",
  blueLight: "#5A9AE6",
  blueMuted: "rgba(58, 123, 213, 0.15)",
  blueGlow: "rgba(58, 123, 213, 0.25)",
}

/* ── Gallery photos (dummy — replace with actual) ── */
const galleryPhotos = [
  { src: "/hypervisuals/photo1.jpg", alt: "HyperVisuals work 1" },
  { src: "/hypervisuals/photo2.jpg", alt: "HyperVisuals work 2" },
  { src: "/hypervisuals/photo3.jpg", alt: "HyperVisuals work 3" },
  { src: "/hypervisuals/photo4.jpg", alt: "HyperVisuals work 4" },
  { src: "/hypervisuals/photo5.jpg", alt: "HyperVisuals work 5" },
  { src: "/hypervisuals/photo6.jpg", alt: "HyperVisuals work 6" },
  { src: "/hypervisuals/photo7.jpg", alt: "HyperVisuals work 7" },
  { src: "/hypervisuals/photo8.jpg", alt: "HyperVisuals work 8" },
  { src: "/hypervisuals/photo9.jpg", alt: "HyperVisuals work 9" },
  { src: "/hypervisuals/photo10.jpg", alt: "HyperVisuals work 10" },
  { src: "/hypervisuals/photo11.jpg", alt: "HyperVisuals work 11" },
  { src: "/hypervisuals/photo12.jpg", alt: "HyperVisuals work 12" },
]

/* ── Software tools ── */
const tools = [
  { name: "After Effects", logo: "/hypervisuals/tools/after-effects.svg" },
  { name: "Premiere Pro", logo: "/hypervisuals/tools/premiere-pro.svg" },
  { name: "DaVinci Resolve", logo: "/hypervisuals/tools/davinci-resolve.svg" },
  { name: "Illustrator", logo: "/hypervisuals/tools/illustrator.svg" },
  { name: "Photoshop", logo: "/hypervisuals/tools/photoshop.svg" },
  { name: "Lightroom Classic", logo: "/hypervisuals/tools/lightroom.svg" },
]

/* ── Infinite scroll gallery row ── */
function ScrollingRow({ images, direction = "left", speed = 35 }: {
  images: typeof galleryPhotos
  direction?: "left" | "right"
  speed?: number
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animId: number
    let offset = 0
    const totalWidth = el.scrollWidth / 2 // We duplicate content

    const tick = () => {
      if (!isPaused) {
        offset += direction === "left" ? 0.5 : -0.5
        if (direction === "left" && offset >= totalWidth) offset = 0
        if (direction === "right" && Math.abs(offset) >= totalWidth) offset = 0
        el.style.transform = `translateX(${-offset}px)`
      }
      animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [direction, isPaused])

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={scrollRef} className="flex gap-4 w-max will-change-transform">
        {/* Duplicate for seamless loop */}
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[320px] h-[210px] md:w-[420px] md:h-[280px] rounded-2xl overflow-hidden group border border-white/6"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div
              className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 transition-all duration-300 pointer-events-none"
              style={{ "--tw-ring-color": `${BRAND.blue}40` } as React.CSSProperties}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════ PAGE ═══════════════════ */

export default function HyperVisualsPage() {
  return (
    <main className="min-h-screen bg-[#0c0e14] pt-20">

      {/* ── HERO SECTION ─────────────────────────────────────── */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
            style={{ background: BRAND.blue }}
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
            style={{ background: BRAND.blueLight }}
          />
        </div>

        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <Image
                src="/hypervisuals/logo.png"
                alt="HyperVisuals Logo"
                width={500}
                height={180}
                className="h-20 sm:h-32 md:h-44 w-auto"
                priority
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10 px-4 sm:px-0"
            >
              Premium visual content creation, motion graphics, and multimedia branding built to make your brand or event unforgettable.
            </motion.p>

            {/* Visit Website CTA */}
            <motion.a
              href="https://www.hypervisuals.lk/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:brightness-110 hover:gap-3 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.blueLight})`,
                boxShadow: `0 4px 25px ${BRAND.blueMuted}`,
              }}
            >
              Visit HyperVisuals.lk <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── FOUNDER SECTION ──────────────────────────────────── */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p
              className="font-jetbrains text-xs tracking-widest uppercase mb-5"
              style={{ color: BRAND.blue }}
            >
              The Founder
            </p>

            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-6 p-1" style={{ background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.blueLight})` }}>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2" style={{ borderColor: BRAND.dark }}>
                <Image
                  src="/hypervisuals/founder.jpg"
                  alt="Senuka Rosa - Founder of HyperVisuals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-white mb-5">
              Senuka Rosa
            </h2>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-4">
              I founded HyperVisuals with a simple belief. Every brand deserves visuals that
              demand attention. From cinematic motion graphics and video edits to polished brand identities,
              I combine technical precision in post-production with a designer&apos;s eye for storytelling.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              What started as a passion for editing and design has grown into a full-service creative
              studio. Whether it&apos;s a YouTube intro, a brand launch video, or a complete visual identity —
              HyperVisuals delivers work that speaks louder than words.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SOFTWARE TOOLS ────────────────────────────────────── */}
      <section className="py-14 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-jetbrains text-xs tracking-widest uppercase text-center mb-8"
              style={{ color: BRAND.blue }}
            >
              Powered By
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5 max-w-4xl mx-auto">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.15, duration: 0.4 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/6 bg-white/[0.02] hover:border-white/12 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 relative">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-white/40 text-[10px] md:text-xs font-medium text-center leading-tight">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY — Infinite Scroll ──────────────────────────── */}
      <section className="py-20 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p
              className="font-jetbrains text-xs tracking-widest uppercase mb-4"
              style={{ color: BRAND.blue }}
            >
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-3">
              Visual Showcase
            </h2>
            <p className="text-white/40 text-sm">
              Hover to pause · Selected projects from our portfolio
            </p>
          </motion.div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="mb-4">
          <ScrollingRow
            images={galleryPhotos.slice(0, 6)}
            direction="left"
          />
        </div>

        {/* Row 2 — scrolls right */}
        <div>
          <ScrollingRow
            images={galleryPhotos.slice(6, 12)}
            direction="right"
          />
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* White logo variant */}
            <div className="mb-6">
              <Image
                src="/hypervisuals/logo-white.png"
                alt="HyperVisuals"
                width={240}
                height={80}
                className="h-12 md:h-16 w-auto mx-auto opacity-60"
              />
            </div>

            <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
              Ready to elevate your brand&apos;s visual identity? Let&apos;s create something extraordinary.
            </p>

            <a
              href="https://www.hypervisuals.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:brightness-110 hover:gap-3"
              style={{
                background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.blueLight})`,
                boxShadow: `0 4px 25px ${BRAND.blueMuted}`,
              }}
            >
              Visit HyperVisuals.lk <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/25">
          <p>© {new Date().getFullYear()} Senuka Rosa</p>
          <Link href="/" className="transition-colors" style={{ color: BRAND.blue + "90" }}>
            ← Back to Hub
          </Link>
        </div>
      </footer>
    </main>
  )
}
