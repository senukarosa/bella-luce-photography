"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    // 1. Check if we are on the homepage
    const isHomePage = pathname === "/"

    // 2. Text should be dark if we've scrolled down OR if we are on a sub-page
    const isDarkText = isScrolled || !isHomePage

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        // Check initial scroll position on load
        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // Updated navigation links to match our new pages
    const navItems = [
        { name: "About", href: "/about" },
        { name: "Packages", href: "/packages" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-playfair font-semibold transition-colors duration-300"
                    style={{ color: isDarkText ? "#1c1917" : "#ffffff" }}
                >
                    Bella Luce
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`text-sm tracking-wide transition-colors duration-300 ${
                                        isDarkText
                                            ? "text-stone-800 hover:text-stone-500"
                                            : "text-white hover:text-white/80"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className={`md:hidden ${isDarkText ? "text-stone-800" : "text-white"}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <Menu className="h-6 w-6" />
                </Button>

                {/* Mobile Menu (Overlay) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 bg-white z-50 flex flex-col"
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                                <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-playfair font-semibold text-stone-800"
                                >
                                    Bella Luce
                                </Link>
                                <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
                                    <X className="h-6 w-6 text-stone-800" />
                                </Button>
                            </div>

                            <div className="flex-1 flex flex-col justify-center items-center">
                                <nav>
                                    <ul className="space-y-6 text-center">
                                        {navItems.map((item, index) => (
                                            <motion.li
                                                key={item.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 + 0.2 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="text-3xl font-playfair text-stone-800 hover:text-stone-500 transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}