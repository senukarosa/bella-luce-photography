"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      // Show the cookie consent after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 max-w-md bg-stone-200 rounded-lg shadow-lg z-50 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="p-6">
            <h3 className="text-lg font-medium text-stone-800 mb-2">This website uses cookies.</h3>
            <p className="text-stone-600 text-sm mb-4">
              We use cookies to analyze website traffic and optimize your website experience. By accepting our use of
              cookies, your data will be aggregated with all other user data.
            </p>
            <Button onClick={handleAccept} className="w-full bg-stone-800 hover:bg-stone-700 text-white">
              Accept
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

