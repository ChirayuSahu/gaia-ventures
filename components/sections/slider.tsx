"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80', // Replace with your bridge image
    title: 'GAIA VENTURES',
    description: 'Mainstreaming Sustainability... GAIA is the Greek word for Mother Earth....'
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80',
    title: 'SUSTAINABLE FUTURE',
    description: 'Innovating for a greener tomorrow and a better planet for all.'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[60vh] w-full bg-black font-varela">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1 
          key={`title-${currentIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium mb-4"
        >
          {slides[currentIndex].title}
        </motion.h1>
        
        <motion.p 
          key={`desc-${currentIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-2xl text-sm md:text-lg tracking-wide font-light text-gray-100 italic"
        >
          {slides[currentIndex].description}
        </motion.p>

        <motion.button
          key={`button-${currentIndex}`}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 bg-orange-600 text-white px-7 py-3 rounded-xl text-sm font-bold cursor-pointer shadow-lg shadow-orange-600/20 hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          Know More
        </motion.button>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="hidden absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 text-white/50 hover:text-orange-600 transition-colors cursor-pointer"
      >
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="hidden absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 text-white/50 hover:text-orange-600 transition-colors cursor-pointer"
      >
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[2px] w-8 transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;