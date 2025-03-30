import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import ScrollAnimations from "@/components/scroll-animations"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Bella Luce Photography | Timeless Portraits in Golden Light",
  description: "Capturing the essence of every soul through elegant photography in Negombo, Sri Lanka.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.variable} ${playfair.variable} font-open-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <ScrollAnimations />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'