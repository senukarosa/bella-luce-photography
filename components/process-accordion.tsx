"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  {
    phase: "01 · Discovery",
    title: "Requirements & Research",
    detail:
      "Define the problem space, conduct user interviews, audit existing solutions. Document constraints and success criteria in a structured planning artifact.",
  },
  {
    phase: "02 · Architecture",
    title: "System Design",
    detail:
      "Design the data model, API contracts, and component tree. Review architecture for scalability, then get stakeholder sign-off before writing a single line of code.",
  },
  {
    phase: "03 · Implementation",
    title: "Iterative Development",
    detail:
      "Build in short sprints. Each feature is accompanied by unit tests and linting checks. PRs are reviewed against the architectural plan — any scope creep returns to step 02.",
  },
  {
    phase: "04 · Verification",
    title: "Testing & QA",
    detail:
      "Automated tests (Jest / Pytest) validate business logic. Browser subagent checks UI responsiveness. Core Web Vitals audited — LCP target < 2.5s.",
  },
  {
    phase: "05 · Deployment",
    title: "Ship & Monitor",
    detail:
      "CI/CD pipeline (GitHub Actions) deploys to Vercel / Netlify. Post-launch monitoring with error tracking and analytics. Iteration based on real usage data.",
  },
]

export default function ProcessAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-2">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
            open === i ? "border-cyber-400/40 bg-cyber-400/5" : "border-white/6 bg-[#1a1a1a] hover:border-white/12"
          }`}
        >
          <button
            className="w-full text-left px-5 py-4 flex items-center justify-between"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center gap-4">
              <span className="font-jetbrains text-xs text-cyber-400/70 w-20">{step.phase}</span>
              <span className="text-white font-medium text-sm">{step.title}</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-white/40 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-white/50 text-sm leading-relaxed">{step.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
