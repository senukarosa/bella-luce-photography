"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
        <Menu className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto flex justify-between items-center py-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img src="/logo.svg" alt="Bella Luce" className="h-14 w-auto" />
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center">
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="text-3xl font-light text-stone-800 hover:text-stone-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="container mx-auto py-8">
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Session
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

