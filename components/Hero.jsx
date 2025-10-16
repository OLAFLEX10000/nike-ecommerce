import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Your image imports
import hero1 from "../src/assets/hero_shoe.png";
import hero2 from "../src/assets/nike-img2.png";
import hero3 from "../src/assets/nike-img4.png";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto switch image (4000ms = 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
     setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle dot clicks
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-16 px-6 lg:px-12 overflow-hidden bg-white">
      
      {/* LEFT TEXT - Use Black/Red for a strong look */}
      <div className="relative z-20 w-full md:w-1/2 space-y-6 text-center md:text-start max-w-xl mx-auto md:mx-0">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-900 leading-none tracking-tighter"
        >
          The Fearless Game Is
          <br />
          <span className="text-red-600">Unstoppable.</span>
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-neutral-700 text-lg md:text-xl max-w-lg mx-auto md:mx-0"
        >
          Step into your power with the latest Nike Air collection built for comfort, performance, and style.
        </motion.p>

        {/* Bolder Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 mt-8 justify-center md:justify-start"
        >
          <Link
           
            className="bg-red-600 text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider shadow-lg hover:bg-black transition-all duration-300"
          >
            Shop Now
          </Link>

          <Link
           
            className="bg-black text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-neutral-700 transition-all duration-300"
          >
            Explore
          </Link>
        </motion.div>
      </div>

      {/* RIGHT IMAGE - Dynamic Slider with Backdrop */}
      <div className="relative md:w-1/2 w-full flex justify-center mt-16 md:mt-0">
        {/* Large, contrasting backdrop circle for visual focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 50 }}
          className="absolute inset-0 m-auto w-[450px] h-[450px] md:w-[650px] md:h-[650px] bg-red-100/50 rounded-full blur-3xl opacity-50 z-10"
        ></motion.div>

        <div className="relative w-[400px] h-[400px] md:w-[550px] md:h-[550px] z-20">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Nike Shoe ${currentIndex + 1}`}
              initial={{ x: 100, opacity: 0, rotate: 10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              exit={{ x: -100, opacity: 0, rotate: -10 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl brightness-110"
            />
          </AnimatePresence>
        </div>
        
        {/* Manual Navigation Dots for feel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-red-600 scale-125"
                  : "bg-neutral-400 hover:bg-neutral-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;