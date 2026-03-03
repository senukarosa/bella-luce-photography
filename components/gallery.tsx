"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  { src: "/gallery/photo1.jpg", width: 1200, height: 800, alt: "Gallery photo 1" },
  { src: "/gallery/photo2.jpg", width: 1200, height: 800, alt: "Gallery photo 2" },
  { src: "/gallery/photo3.jpg", width: 1200, height: 800, alt: "Gallery photo 3" },
  { src: "/gallery/photo4.jpg", width: 1200, height: 800, alt: "Gallery photo 4" },
  { src: "/gallery/photo5.jpg", width: 1200, height: 800, alt: "Gallery photo 5" },
  { src: "/gallery/photo6.jpg", width: 1200, height: 800, alt: "Gallery photo 6" },
  { src: "/gallery/photo7.jpg", width: 1200, height: 800, alt: "Gallery photo 7" },
  { src: "/gallery/photo8.jpg", width: 1200, height: 800, alt: "Gallery photo 8" },
  { src: "/gallery/photo9.jpg", width: 1200, height: 800, alt: "Gallery photo 9" },
  { src: "/gallery/photo10.jpg", width: 1200, height: 800, alt: "Gallery photo 10" },
  { src: "/gallery/photo11.jpg", width: 1200, height: 800, alt: "Gallery photo 11" },
  { src: "/gallery/photo12.jpg", width: 1200, height: 800, alt: "Gallery photo 12" },
  { src: "/gallery/photo13.jpg", width: 1200, height: 800, alt: "Gallery photo 13" },
  { src: "/gallery/photo14.jpg", width: 1200, height: 800, alt: "Gallery photo 14" },
  { src: "/gallery/photo15.jpg", width: 1200, height: 800, alt: "Gallery photo 15" },
  { src: "/gallery/photo16.jpg", width: 1200, height: 800, alt: "Gallery photo 16" },
  { src: "/gallery/photo17.jpg", width: 1200, height: 800, alt: "Gallery photo 17" },
]

export default function Gallery({ maxItems }: { maxItems?: number }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const displayedImages = maxItems ? galleryImages.slice(0, maxItems) : galleryImages

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % displayedImages.length)
    } else {
      setSelectedImage((selectedImage - 1 + displayedImages.length) % displayedImages.length)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox()
    } else if (e.key === "ArrowRight") {
      navigateImage("next")
    } else if (e.key === "ArrowLeft") {
      navigateImage("prev")
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden cursor-pointer animate-on-scroll"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>

            <motion.div
              className="relative w-[90vw] h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={displayedImages[selectedImage].src || "/placeholder.svg"}
                alt={displayedImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
              {displayedImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === selectedImage ? "bg-white" : "bg-gray-500"}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(index)
                  }}
                />
              ))}
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

