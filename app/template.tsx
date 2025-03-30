"use client"

import type React from "react"

import { motion } from "framer-motion"
import ScrollAnimations from "./scroll-animations"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <ScrollAnimations />
      {children}
    </motion.div>
  )
}

