import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect for the hero text
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50 text-stone-900 selection:bg-stone-300 selection:text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
            <Link
              href="/"
              className="group flex items-center text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <span className="text-xl font-playfair font-semibold text-stone-800">
              Senuka Rosa
            </span>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Intro Section */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-24 mb-20 md:mb-32">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-medium tracking-tight mb-8 leading-tight">
                    I’m Senuka Rosa — <br className="hidden md:block" />
                    <span className="text-stone-500 italic">systems thinker</span> <br className="hidden md:block" />
                    & digital precisionist.
                </h1>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 md:mt-24">
                <div className="md:col-span-5 relative">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                     >
                        <div className="aspect-[3/4] relative rounded-lg overflow-hidden shrink-0">
                            <Image
                                src="/dummy-photos/portrait.png"
                                alt="Senuka Rosa Portrait"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                     </motion.div>
                </div>
                
                <div className="md:col-span-7 flex flex-col justify-center space-y-8 text-lg text-stone-600 leading-relaxed font-open-sans">
                  <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                        <p>
                        My foundation is in technology. I study how networks operate, how systems fail, and how they can be secured. From core networking concepts to hands-on security practice, I’m building expertise in cybersecurity with a long-term vision of working on secure, scalable infrastructure. I approach problems analytically, prioritize structure, and focus on solutions that create measurable impact.
                        </p>
                  </motion.div>
                  
                  <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                        <p className="font-playfair text-2xl text-stone-800 italic border-l-2 border-stone-300 pl-6 py-2 my-4">
                        But I don’t only see the world in code and configurations.
                        </p>
                  </motion.div>

                  <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                        <p>
                        Photography is my creative counterpart to technology. Through visual storytelling, I explore composition, light, and emotion with the same discipline I apply to technical systems. Where cybersecurity demands logic and control, photography demands intuition and timing. Balancing both keeps me sharp — technically precise and creatively aware.
                        </p>
                  </motion.div>
                  
                   <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  >
                        <p>
                        This portfolio reflects that dual mindset: structured thinking backed by creative execution. Whether I’m analyzing a network, developing technical solutions, or capturing a moment through a lens, the goal is the same — clarity, depth, and intention.
                        </p>
                        <p className="mt-6 font-medium text-stone-800">
                        I’m continuously learning, refining, and building toward becoming a professional who understands both systems and stories.
                        </p>
                  </motion.div>
                </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-stone-900 text-stone-50 py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-playfair mb-6 tracking-wide">Selected Works</h2>
                    <p className="text-stone-400 max-w-xl mx-auto text-lg">A showcase of moments where light, composition, and technical execution align.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="group flex flex-col gap-4"
                     >
                        <div className="aspect-[4/5] relative overflow-hidden bg-stone-800 rounded-sm">
                            <Image
                                src="/dummy-photos/abstract.png"
                                alt="Digital Canvas"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div>
                             <h3 className="text-lg font-playfair tracking-wide">Digital Canvas</h3>
                             <p className="text-sm text-stone-400">Structure & Detail</p>
                        </div>
                     </motion.div>
                     
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="group flex flex-col gap-4 md:mt-16"
                     >
                        <div className="aspect-[4/5] relative overflow-hidden bg-stone-800 rounded-sm">
                            <Image
                                src="/dummy-photos/camera.png"
                                alt="Optical Precision"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                         <div>
                             <h3 className="text-lg font-playfair tracking-wide">Optical Precision</h3>
                             <p className="text-sm text-stone-400">Focus & Light</p>
                        </div>
                     </motion.div>

                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="group flex flex-col gap-4 lg:mt-32"
                     >
                        <div className="aspect-[4/5] relative overflow-hidden bg-stone-800 rounded-sm">
                            <Image
                                src="/dummy-photos/city.png"
                                alt="Urban Flow"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                         <div>
                             <h3 className="text-lg font-playfair tracking-wide">Urban Flow</h3>
                             <p className="text-sm text-stone-400">Motion & Time</p>
                        </div>
                     </motion.div>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}
