import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import ScrollAnimations from "@/components/scroll-animations"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Senuka Rosa | Creative Multi-Disciplinary Professional",
  description:
    "Senuka Rosa — Photographer, Software Engineer, and Creative Director. Explore Bella Luce Photography, coding projects, and HyperVisuals branding work.",
  keywords: [
    "Senuka Rosa",
    "Bella Luce Photography",
    "photographer Sri Lanka",
    "software engineer",
    "HyperVisuals",
    "Negombo photographer",
    "full-stack developer",
    "branding multimedia",
  ],
  openGraph: {
    title: "Senuka Rosa | Creative Multi-Disciplinary Professional",
    description:
      "Photographer, Software Engineer & Creative Director based in Negombo, Sri Lanka.",
    type: "website",
    url: "https://senukarosa.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${openSans.variable} ${playfair.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="font-open-sans bg-[#121212] text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <ScrollAnimations />
          {children}
        </ThemeProvider>

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Senuka Rosa",
                  url: "https://senukarosa.com",
                  jobTitle: "Photographer, Software Engineer & Creative Director",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Negombo",
                    addressCountry: "LK",
                  },
                  sameAs: [
                    "https://www.instagram.com/senuka.rosa/",
                    "https://web.facebook.com/profile.php?id=61574952052773",
                  ],
                },
                {
                  "@type": "Photographer",
                  name: "Bella Luce Photography",
                  url: "https://senukarosa.com/bellaluce",
                  description:
                    "Timeless portraits in golden light. Based in Negombo, Sri Lanka.",
                  founder: { "@type": "Person", name: "Senuka Rosa" },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}