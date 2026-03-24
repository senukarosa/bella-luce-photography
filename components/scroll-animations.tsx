"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            // Optional: stop observing once visible
            // observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -150px 0px" }
    )

    elements.forEach((el) => observer.observe(el))

    // Clean up
    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

