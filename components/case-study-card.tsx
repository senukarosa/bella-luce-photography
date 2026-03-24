"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"

interface CaseStudy {
  id: string
  label: string
  title: string
  category: string
  problem: string
  solution: string
  impact: string
  tools: string[]
  tags: string[]
}

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      className="rounded-2xl bg-[#1a1a1a] border border-white/6 hover:border-orange-400/30 transition-colors duration-300 overflow-hidden"
    >
      {/* Header — always visible */}
      <button
        className="w-full text-left p-6 group"
        onClick={() => setExpanded(e => !e)}
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-jetbrains text-xs text-orange-400 tracking-widest uppercase">{study.label}</span>
              <span className="text-white/20 text-xs">·</span>
              <span className="font-jetbrains text-xs text-white/30 uppercase tracking-wider">{study.category}</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold text-white group-hover:text-orange-400 transition-colors">
              {study.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {study.tools.map(tool => (
                <span key={tool} className="text-xs px-2.5 py-1 rounded-md bg-orange-400/8 text-orange-400/70 border border-orange-400/15">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1 shrink-0">
            <span className="text-xs text-white/30 font-jetbrains">{expanded ? "collapse" : "case study"}</span>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown className="w-4 h-4 text-orange-400/60" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Expanded case study */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-5 border-t border-white/5 pt-5">
              {[
                { step: "Problem", text: study.problem, color: "text-red-400/80" },
                { step: "Solution", text: study.solution, color: "text-orange-400/80" },
                { step: "Impact", text: study.impact, color: "text-green-400/80" },
              ].map(({ step, text, color }) => (
                <div key={step}>
                  <p className={`font-jetbrains text-xs tracking-widest uppercase mb-1.5 ${color}`}>{step}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{text}</p>
                </div>
              ))}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {study.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/8 text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
