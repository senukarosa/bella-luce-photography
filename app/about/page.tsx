"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
}

export default function AboutPage() {
    const horizontalScrollRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: horizontalScrollRef })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    return (
        <main className="min-h-screen bg-stone-50 overflow-hidden pt-28 pb-16 md:pt-36">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* HERO SECTION */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row gap-16 items-center mb-32"
                >
                    {/* Left: Strong Portrait Image */}
                    <motion.div variants={fadeUpVariant} className="w-full lg:w-5/12">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-stone-900/10 z-10 mix-blend-overlay"></div>
                            {/* Replace with a sharp, professional portrait */}
                            <Image
                                src="/images/DSC05527.jpg"
                                alt="Senuka Rosa - Portrait"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right: Structured Text & Authority Signals */}
                    <motion.div variants={fadeUpVariant} className="w-full lg:w-7/12 flex flex-col space-y-10">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-stone-900 mb-4 tracking-tight">
                                Systems & <span className="italic text-stone-500">Stories.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-stone-700 font-open-sans font-light border-l-4 border-stone-800 pl-6 py-2">
                                I’m Senuka Rosa — an IT undergraduate focused on cybersecurity, systems thinking, and digital precision.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 font-open-sans leading-relaxed">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-stone-900 tracking-wider uppercase text-sm">Technical Focus</h3>
                                <p>
                                    My foundation is in technology. Studying at SLIIT, I analyze how networks operate, how systems fail, and how they can be secured. From core networking concepts to hands-on security practice, I prioritize structure and measurable impact.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-stone-900 tracking-wider uppercase text-sm">Creative Vision</h3>
                                <p>
                                    Photography is my creative counterpart. Where cybersecurity demands logic and control, capturing light demands intuition and timing. Balancing both keeps me sharp — technically precise and creatively aware.
                                </p>
                            </div>
                        </div>

                        {/* Authority Signals & Skills */}
                        <div className="space-y-5 pt-4 border-t border-stone-200">
                            <h3 className="font-playfair text-2xl text-stone-800">Arsenal & Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200 py-1.5 px-3">Cybersecurity</Badge>
                                <Badge variant="outline" className="bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200 py-1.5 px-3">Network Security</Badge>
                                <Badge variant="outline" className="bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200 py-1.5 px-3">Linux</Badge>
                                <Badge variant="outline" className="bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200 py-1.5 px-3">Next.js / TypeScript</Badge>
                                <Badge variant="outline" className="bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200 py-1.5 px-3">Visual Storytelling</Badge>
                                <Badge variant="outline" className="bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200 py-1.5 px-3">Adobe Creative Suite</Badge>
                            </div>
                        </div>

                        {/* Interactions / Links */}
                        <div className="flex gap-4 pt-2">
                            <Link href="https://github.com/IT24104385" target="_blank" className="p-2 text-stone-500 hover:text-stone-900 transition-colors">
                                <Github className="w-6 h-6" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/senuka-rosa-713108219/" target="_blank" className="p-2 text-stone-500 hover:text-stone-900 transition-colors">
                                <Linkedin className="w-6 h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="mailto:senukadishararosa388@gmail.com" className="p-2 text-stone-500 hover:text-stone-900 transition-colors">
                                <Mail className="w-6 h-6" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* HORIZONTAL SCROLLING REEL */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full bg-stone-900 py-24 relative"
            >
                <div className="container mx-auto px-4 md:px-6 mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-playfair text-white font-light">Selected Captures</h2>
                        <p className="text-stone-400 mt-2 font-open-sans">Moments frozen in golden light.</p>
                    </div>
                    <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-stone-300 hover:text-white transition-colors group">
                        View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Snap-scrolling native implementation for smooth horizontal feel */}
                <div className="flex overflow-x-auto pb-8 pt-4 px-4 md:px-6 snap-x snap-mandatory gap-6 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {[
                        "/gallery/photo1.jpg",
                        "/gallery/photo2.jpg",
                        "/gallery/photo3.jpg",
                        "/gallery/photo4.jpg",
                        "/gallery/photo5.jpg"
                    ].map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] h-[50vh] md:h-[65vh] snap-center rounded-sm overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Selected capture ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                <div className="container mx-auto px-4 mt-8 md:hidden">
                    <Link href="/portfolio" className="flex items-center justify-center gap-2 text-stone-300 hover:text-white transition-colors">
                        View Full Gallery <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </motion.section>
        </main>
    )
}
