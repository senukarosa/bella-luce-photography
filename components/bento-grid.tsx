"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

interface BentoTileProps {
  children: React.ReactNode
  className?: string
  colSpan?: number
  rowSpan?: number
  accent?: "amber" | "cyber" | "orange" | "neutral"
  delay?: number
  onClick?: () => void
  href?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-4",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12",
        "[grid-auto-rows:auto] sm:[grid-auto-rows:90px]",
        className
      )}
    >
      {children}
    </div>
  )
}

const accentMap = {
  amber:   "bento-amber   hover:border-amber-400/40",
  cyber:   "bento-cyber   hover:border-cyber-400/40",
  orange:  "bento-orange  hover:border-orange-400/40",
  neutral: "hover:border-white/15",
}

export function BentoTile({
  children,
  className,
  colSpan = 4,
  rowSpan = 2,
  accent = "neutral",
  delay = 0,
}: BentoTileProps) {
  // Responsive: on small screens always full-width
  const colClass =
    colSpan === 12 ? "col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-12" :
    colSpan === 8  ? "col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-8"  :
    colSpan === 6  ? "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-6"  :
    colSpan === 5  ? "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5"  :
    colSpan === 4  ? "col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-4"  :
    colSpan === 3  ? "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3"  :
                     "col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-4"

  const rowClass =
    rowSpan === 4 ? "row-span-1 sm:row-span-4" :
    rowSpan === 3 ? "row-span-1 sm:row-span-3" :
    rowSpan === 2 ? "row-span-1 sm:row-span-2" :
                    "row-span-1"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        colClass,
        rowClass,
        "relative overflow-hidden rounded-2xl",
        "bg-[#1a1a1a] border border-white/8",
        "transition-all duration-300",
        "hover:scale-[1.01] hover:-translate-y-0.5",
        accentMap[accent],
        className
      )}
    >
      {children}
    </motion.div>
  )
}
