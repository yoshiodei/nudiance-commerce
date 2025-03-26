"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full w-full mx-auto">
      {/* Image Display */}
      <div className="overflow-hidden rounded-lg relative w-full xl:h-[450px] lg:h-[350px] h-[85vw] bg-slate-200">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Prev & Next Buttons */}
      <Button
        variant="ghost"
        className="absolute h-[40px] w-[40px] top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </Button>

      <Button
        variant="ghost"
        className="absolute h-[40px] w-[40px] top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </Button>

      {/* Indicators */}
      <div className="flex sm:justify-center justify-between md:gap-4 sm:gap-3 gap-2 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`xl:w-[120px] xl:h-[120px] lg:w-[110px] lg:h-[110px] md:w-[100px] md:h-[100px] sm:w-[100px] sm:h-[100px] w-[19.5vw] h-[19.5vw] rounded ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
