import React from "react";
// 💡 IMPORT FRAMER MOTION
import { motion } from "framer-motion"; 

import shoeImg from "../src/assets/nike-shoe.jpg";
import shirtImg from "../src/assets/nike-shirt.jpg"
import bagImg from "../src/assets/nike-bag.jpg";
import capImg from "../src/assets/nike-cap.jpg";
import sockImg from "../src/assets/nike-socks.jpg";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2,   
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: {
        type: "spring", 
        stiffness: 100,
        damping: 10
    }
  },
};

const About = () => {
  const gridItems = [ 
    { img: shirtImg, text: "Street Style" },
    { img: bagImg, text: "Carry Power" },
    { img: capImg, text: "Everyday Classic" },
    { img: sockImg, text: "Comfort Fit" },
  ];

  return (
    <section className="bg-black text-black py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Title with Framer Motion Entry */}
        <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-wide text-center mb-12 text-white"
        >
          About <span className="text-red-600">Nike</span>
        </motion.h2>

        {/* Grid Container with Staggered Entry */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Start animation when component comes into view
            viewport={{ once: true, amount: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {/* Large shoe image (First Item) */}
          <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03, zIndex: 1 }} // Slight lift on hover
                className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl group cursor-pointer"
          >
            <img
              src={shoeImg}
              alt="Nike Shoes"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Step Up Your Game</p>
            </div>
          </motion.div>

          {/* Other grid items (Mapped Items) */}
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, zIndex: 1 }} // Slight lift on hover
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;