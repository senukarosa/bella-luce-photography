"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  { src: "/gallery/photo1.jpg", alt: "Portrait in cafe - warm tones" },
  { src: "/gallery/photo2.jpg", alt: "Couple portrait at European Castle - warm tones" },
  { src: "/gallery/photo3.jpg", alt: "Natural light editorial - Bella Luce signature style" },
  { src: "/gallery/photo4.jpg", alt: "Graduation portrait session - candid emotion" },
  { src: "/gallery/photo5.jpg", alt: "Portrait in cafe - warm tones" },
  { src: "/gallery/photo6.jpg", alt: "Shehara & Chrishalya's portrait session" },
  { src: "/gallery/photo7.jpg", alt: "Graduation portrait session - candid emotion" },
  { src: "/gallery/photo8.jpg", alt: "Pawanya's 21st birthday" },
  { src: "/gallery/photo9.jpg", alt: "Pawanya's 21st birthday" },
  { src: "/gallery/photo10.jpg", alt: "Chamidu's portrait session with Classic Bikes" },
  { src: "/gallery/photo11.jpg", alt: "Chaniru's 4th birthday" },
  { src: "/gallery/photo12.jpg", alt: "Chaniru's 4th birthday" },
  { src: "/gallery/photo13.jpg", alt: "Shehara & Chrishalya's portrait session" },
  { src: "/gallery/photo14.jpg", alt: "Shehara & Chrishalya's portrait session" },
  { src: "/gallery/photo15.jpg", alt: "53rd wedding anniversary" },
]

export default function MasonryGallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const open = (i: number) => { setSelected(i); document.body.style.overflow = "hidden" }
  const close = () => { setSelected(null); document.body.style.overflow = "" }
  const nav = (dir: 1 | -1) => {
    if (selected === null) return
    setSelected((selected + dir + galleryImages.length) % galleryImages.length)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") close()
    if (e.key === "ArrowRight") nav(1)
    if (e.key === "ArrowLeft") nav(-1)
  }

  return (
    <>
      {/* Masonry grid using CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group border border-white/5"
            onClick={() => open(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
              <p className="text-white/0 group-hover:text-white/80 text-xs px-4 pb-4 transition-all duration-300 font-open-sans leading-snug">
                {img.alt}
              </p>
            </div>
            {/* Amber border glow on hover */}
            <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-amber-400/30 transition-all duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
              onClick={close}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
              onClick={e => { e.stopPropagation(); nav(-1) }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              className="relative w-[88vw] h-[85vh] mx-16"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
              onClick={e => { e.stopPropagation(); nav(1) }}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setSelected(i) }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === selected ? "bg-amber-400 scale-125" : "bg-white/30"
                    }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            {/* Caption */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white/40 text-xs font-open-sans text-center max-w-sm">
              {galleryImages[selected].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
