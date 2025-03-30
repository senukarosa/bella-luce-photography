"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PackageCardProps {
  title: string
  price: string
  features: string[]
  featured?: boolean
  delay?: number
}

export default function PackageCard({ title, price, features, featured = false, delay = 0 }: PackageCardProps) {
  return (
    <div
      className={`
        border p-8 transition-all duration-300 animate-on-scroll
        ${featured ? "border-stone-800 shadow-lg transform -translate-y-4 relative" : "border-stone-200 hover:border-stone-400"}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {featured && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-800 text-white px-4 py-1 text-sm">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-playfair font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-semibold mb-6">{price}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-stone-800 mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={`w-full ${featured ? "bg-stone-800 hover:bg-stone-700 text-white" : "bg-white border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white"}`}
      >
        <Link href="#contact">Book Now</Link>
      </Button>
    </div>
  )
}

