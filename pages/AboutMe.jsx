import React from 'react';
import { motion } from 'framer-motion';
import AboutMeImg from '../src/assets/About-me-img.jpg'
// 💡 Only importing the main 'fa' and 'md' collections now for reliability
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaGitAlt, FaPython, FaPuzzlePiece, FaBolt, FaCode } from 'react-icons/fa';


// Define the skills with their reliable icons and colors
const skills = [
  { name: 'React', icon: FaReact, color: 'text-sky-400' },
  { name: 'Zustand', icon: FaPuzzlePiece, color: 'text-red-500' }, 
  { name: 'Tailwind CSS', icon: FaCode, color: 'text-cyan-500' }, 
  { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-500' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600' },
  { name: 'Vite', icon: FaBolt, color: 'text-purple-500' }, 
  { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-gray-700' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-600' },
];

const AboutMe = () => {
    // Framer Motion variants for staggered entry
    const containerVariants = {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    };

    const itemVariants = {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

    return (
        <section className="bg-neutral-900 text-white py-20 px-4 md:px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
             <div className='w-full flex items-center justify-center  '>
              <img src={AboutMeImg}
              className='w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 
              border-red-600 shadow-lg mb-8'
               alt="" />
             </div>

                {/* Header: Your Name and Title */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                        Olamide <span className="text-red-600">Michael</span>
                    </h1>
                    <p className="text-3xl font-light text-gray-300">
                        Front-End Developer & UI/UX Specialist
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Profile and Mission */}
                    <motion.div
                        variants={itemVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.5 }}
                        className="lg:col-span-1 p-8 bg-neutral-800 rounded-xl shadow-2xl border-t-4 border-red-600"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-red-600 border-b border-neutral-700 pb-2">
                            Who I Am
                        </h3>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            I am Olamide Michael, a results-driven Front-End Developer dedicated to crafting vibrant, high-performance web experiences. My passion lies in bridging the gap between elegant design and complex functionality. I specialize in building robust, modern applications that prioritize user satisfaction and blazing speed.
                        </p>
                    </motion.div>

                    {/* Right Column: Project Insights */}
                    <motion.div
                        variants={itemVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.5 }}
                        className="lg:col-span-2 p-8 bg-neutral-800 rounded-xl shadow-2xl"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-red-600 border-b border-neutral-700 pb-2">
                            Key Takeaways from the Nike Project
                        </h3>
                        <div className="space-y-4 text-gray-400">
                            <p>
                                Building this Nike E-commerce clone has been a momentous speed run, pushing my skills beyond typical component creation.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    API & Data Manipulation: I gained extensive experience dealing with APIs, handling incoming data, structuring complex objects (like product variations), and displaying them efficiently.
                                </li>
                                <li>
                                    State Management Mastery: I solidified my understanding of Zustand (and Redux principles), proving I can handle global state for shopping carts, user authentication, and persistent UI elements effectively.
                                </li>
                                <li>
                                    Advanced Component Design: The project required deep knowledge of OOP principles in React, building reusable components like the dynamic testimonial section and handling edge cases like form submission state and auto-clearing.
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>

                {/* Skills Section: Vibrant Hover Effect */}
                <div className="mt-20">
                    <h3 className="text-4xl font-bold mb-8 text-red-600 border-b-2 border-red-600 inline-block pb-1 uppercase tracking-wider">
                        Specialized Stack
                    </h3>
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05, 
                                    boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
                                }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col items-center justify-center p-6 bg-neutral-800 rounded-lg cursor-pointer transition-all duration-300 border border-neutral-700 hover:border-red-600"
                            >
                                <skill.icon className={`w-10 h-10 mb-2 ${skill.color}`} />
                                <p className="font-semibold text-sm text-gray-200">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;