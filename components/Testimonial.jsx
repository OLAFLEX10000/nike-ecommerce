import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Sample Data tailored for the Nike/Sportswear theme
const testimonialsData = [
  {
    id: 1,
    name: 'Alex M.',
    title: 'Marathon Runner',
    quote: "The Air Zoom Pegasus gave me the edge I needed. Unbeatable cushioning and responsiveness. It's truly performance redefined.",
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 2,
    name: 'Sarah K.',
    title: 'Basketball Trainer',
    quote: "Their apparel holds up to the most intense training sessions. The fit is perfect, and the designs are always sharp. No compromises.",
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 3,
    name: 'David L.',
    title: 'Fitness Enthusiast',
    quote: "From checkout to delivery, the experience was seamless. The shoes arrived quickly and look even better in person. 10/10 shopping experience.",
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    // Framer Motion for subtle entry animation
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      
      // Card Styling - Fixed Height and Shadow for uniformity
      className="bg-white p-8 rounded-xl shadow-2xl flex flex-col h-[300px] 
hover:shadow-red-300 transition-shadow duration-300 border-t-4 border-red-600"
    >
        
      {/* Quote Icon and Rating */}
      <div className="flex justify-between items-center mb-4">
        <FaQuoteLeft className="text-red-600 text-3xl opacity-70" />
        <div className="flex space-x-1 text-yellow-500">
          {Array(5).fill().map((_, i) => <FaStar key={i} className="w-4 h-4" />)}
        </div>
      </div>

      {/* Quote Text - Flex-grow to fill space evenly */}
      <p className="text-gray-700 italic text-lg flex-grow leading-relaxed mb-4 line-clamp-4">
        "{testimonial.quote}"
      </p>

      {/* Separator */}
      <div className="w-full h-px bg-neutral-200 my-4"></div>

      {/* Reviewer Info */}
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-red-600 mr-4"
        />
        <div>
          <p className="font-bold text-lg text-black">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonial = () => {
  return (
    <section className="bg-neutral-100 py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tighter uppercase mb-4">
            Hear From Our <span className="text-red-600">Athletes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The gear is tested and trusted on the track, the court, and the street. See what our community has to say.
          </p>
        </div>

        {/* Testimonial Grid (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;