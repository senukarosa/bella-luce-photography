import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Camera, Sun, Heart, MapPin, Mail, Phone, MessageCircle, Instagram, Check } from "lucide-react"
import MasonryGallery from "@/components/masonry-gallery"

export const metadata: Metadata = {
  title: "Bella Luce",
  description:
    "Capturing authentic emotion through natural golden light. Portrait, family, and wedding photography in Negombo, Sri Lanka.",
  keywords: ["Bella Luce Photography", "portrait photographer Negombo", "wedding photographer Sri Lanka", "golden hour photography"],
}

const packages = [
  {
    title: "Basic",
    price: "LKR 12,000",
    tagline: "Perfect for individuals & social media",
    features: ["1 hour session", "1 location", "15 edited photos", "Digital delivery", "Basic retouching"],
    cta: "Book Basic",
    featured: false,
  },
  {
    title: "Deluxe",
    price: "LKR 16,000",
    tagline: "Most popular for couples & families",
    features: [
      "2 hours session",
      "2 locations",
      "35 edited photos",
      "Digital delivery",
      "Advanced retouching",
      "Optional: 5×7 prints (on request)",
    ],
    cta: "Book Deluxe",
    featured: true,
  },
  {
    title: "Premium",
    price: "LKR 28,000",
    tagline: "Full coverage for portraits, couples & events",
    features: [
      "4 hours session",
      "Multiple locations",
      "40-50 edited photos",
      "Digital delivery",
      "Premium retouching",
      "Optional: 5×7 prints",
      "Optional: 11×14 mounted print",
    ],
    cta: "Book Premium",
    featured: false,
  },
]

const testimonials = [
  {
    quote: "Bella Luce captured our photoshoot perfectly. The photos are absolutely stunning and really captured the emotions of the day.",
    name: "Shehara & Chrishalya",
    location: "Naples, Italy",
  },
  {
    quote: "I was nervous about my portrait session, but the photographer made me feel so comfortable. The results exceeded my expectations!",
    name: "Pawanya",
    location: "Kochchikade",
  },
  {
    quote: "The family photoshoot was a wonderful experience. The photos are treasures we'll cherish forever. Highly recommend!",
    name: "The Fernando Family",
    location: "Negombo",
  },
]

const pillars = [
  { icon: Sun, label: "Golden Light", desc: "Every session is timed to the magic hour." },
  { icon: Heart, label: "Authenticity", desc: "Real moments, not posed perfection." },
  { icon: MapPin, label: "Negombo & Beyond", desc: "Sri Lanka and destination shoots." },
]

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-20">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DSC01202.jpg"
            alt="Bella Luce Photography — golden hour portrait session in Negombo Sri Lanka"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16">
          <div className="flex items-center gap-2 mb-3">
            <Camera className="w-4 h-4 text-amber-400" />
            <span className="font-jetbrains text-xs text-amber-400 tracking-widest uppercase">Bella Luce Photography</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-playfair font-semibold text-white mb-3 leading-tight">
            Timeless Portraits<br />in Golden Light
          </h1>
          <p className="text-white/60 text-sm sm:text-lg max-w-xl">
            Capturing the essence of every soul through elegant photography. Based in Negombo, Sri Lanka.
          </p>
        </div>
      </section>

      {/* ── Brand Pillars ──────────────────────────────────────── */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/6 hover:border-amber-400/30 transition-colors group">
              <Icon className="w-6 h-6 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-playfair font-semibold text-lg mb-1">{label}</h3>
              <p className="text-white/50 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="py-8 pb-20 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-jetbrains text-xs text-amber-400 tracking-widest uppercase mb-4">About Bella Luce</p>
            <h2 className="text-3xl font-playfair font-semibold text-white mb-6">
              Photography as a <span className="text-amber-400">Language</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              At Bella Luce, we specialize in capturing authentic moments with elegance and emotion. Our work blends
              natural light and artistic composition to tell stories that last a lifetime.
            </p>
            <p className="text-white/60 leading-relaxed">
              We believe the best photographs happen when you feel comfortable. That's why we create a relaxed
              environment where natural moments can shine because the most beautiful light is the one that
              reveals who you truly are.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden border border-white/6">
            <Image
              src="/images/about-2.jpg"
              alt="Bella Luce Photography — behind the scenes"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ── Gallery / Viewing Room ──────────────────────────────── */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="font-jetbrains text-xs text-amber-400 tracking-widest uppercase mb-3">Viewing Room</p>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white">Best Captures</h2>
          </div>
          <MasonryGallery />
        </div>
      </section>

      {/* ── Packages ────────────────────────────────────────────── */}
      <section id="packages" className="py-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="font-jetbrains text-xs text-amber-400 tracking-widest uppercase mb-3">Investment</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-3">Photography Packages</h2>
          <p className="text-white/50 max-w-xl mx-auto">Every session is crafted to capture your unique story. Choose the package that fits your vision.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${pkg.featured
                ? "bg-amber-400/8 border-amber-400/40 shadow-lg shadow-amber-400/10"
                : "bg-[#1a1a1a] border-white/8 hover:border-amber-400/20"
                }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-[#0e0e0e] text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-playfair font-semibold text-white mb-1">{pkg.title}</h3>
              <p className="text-white/40 text-sm mb-4">{pkg.tagline}</p>
              <p className="text-3xl font-playfair font-bold text-amber-400 mb-6">{pkg.price}</p>
              <ul className="space-y-2.5 mb-8">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                    <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${pkg.featured
                  ? "bg-amber-400 text-[#0e0e0e] hover:bg-amber-300"
                  : "border border-amber-400/40 text-amber-400 hover:bg-amber-400/10"
                  }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-sm mt-8">
          Looking for something custom?{" "}
          <a href="#book" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">Contact for a tailored package.</a>
        </p>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="font-jetbrains text-xs text-amber-400 tracking-widest uppercase mb-3">Kind Words</p>
            <h2 className="text-3xl font-playfair font-semibold text-white">Client Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/6 hover:border-amber-400/20 transition-colors">
                <div className="text-4xl text-amber-400/30 font-playfair mb-4">&ldquo;</div>
                <p className="text-white/65 italic text-sm leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ──────────────────────────────────────────── */}
      <section id="book" className="py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-jetbrains text-xs text-amber-400 tracking-widest uppercase mb-4">Book Your Session</p>
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Ready to Capture Your Story?</h2>
          <p className="text-white/50 mb-8">Reach out and let&apos;s create something beautiful together.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:bellaluce.creative@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-[#0e0e0e] font-semibold rounded-xl hover:bg-amber-300 transition-colors"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a
              href="https://wa.me/94767618727"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href="tel:+94767618727"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/70 rounded-xl hover:border-amber-400/40 hover:text-amber-400 transition-all"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href="https://www.instagram.com/bellaluce.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-500 hover:via-pink-400 hover:to-orange-300 text-white font-semibold rounded-xl transition-all"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/30">
          <p>© {new Date().getFullYear()} Bella Luce Photography · Senuka Rosa</p>
          <Link href="/" className="hover:text-amber-400 transition-colors">← Back to Hub</Link>
        </div>
      </footer>
    </main>
  )
}
