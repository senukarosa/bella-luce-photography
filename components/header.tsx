"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Camera, Code2, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Hub",           href: "/",              accent: "#FFBF00" },
  { name: "Bella Luce",    href: "/bellaluce",     accent: "#FFBF00", icon: Camera },
  { name: "Portfolio",      href: "/portfolio",     accent: "#00A3FF", icon: Code2 },
  { name: "HyperVisuals",  href: "/hypervisuals",  accent: "#FF5C00", icon: Sparkles },
  { name: "Contact",       href: "/#contact",      accent: "#ffffff" },
]

export default function Header() {
  const [isOpen, setIsOpen]       = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine active accent colour from pathname
  const activeAccent =
    pathname.startsWith("/bellaluce")    ? "#FFBF00" :
    pathname.startsWith("/portfolio")     ? "#00A3FF" :
    pathname.startsWith("/hypervisuals") ? "#FF5C00" :
    "#FFBF00"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-[#0e0e0e]/95 backdrop-blur-lg shadow-lg shadow-black/40 py-3 border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl font-playfair font-semibold text-white tracking-wide">
            Senuka
          </span>
          <span
            className="text-xl font-playfair font-semibold transition-colors duration-300"
            style={{ color: activeAccent }}
          >
            Rosa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group"
                    style={{ color: isActive ? item.accent : "rgba(255,255,255,0.65)" }}
                  >
                    <span className="relative z-10 group-hover:opacity-100 transition-colors duration-200"
                      style={{ color: isActive ? item.accent : undefined }}
                      onMouseEnter={e => (e.currentTarget.style.color = item.accent)}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.65)" }}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: `${item.accent}14` }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-[#0e0e0e] z-50 flex flex-col"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="container mx-auto px-4 py-5 flex justify-between items-center border-b border-white/5">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-playfair font-semibold">
                  <span className="text-white">Senuka</span>{" "}
                  <span style={{ color: activeAccent }}>Rosa</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-2">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center gap-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.07 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 text-2xl font-playfair py-3 px-6 rounded-xl transition-all duration-200"
                        style={{ color: item.accent }}
                      >
                        {Icon && <Icon className="w-6 h-6" />}
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
