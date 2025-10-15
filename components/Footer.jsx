import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">Shop</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Men</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Women</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Kids</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">New Arrivals</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">Help</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">FAQs</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Returns</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Orders</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">About Nike</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Careers</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Investors</li>
            <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Sustainability</li>
          </ul>
        </div>

        {/* Developer */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">Developer</h3>
          <p className="text-sm leading-relaxed mb-4">
            Crafted with passion by <span className="text-white font-medium">Awolesi Olamide Michael</span>.
            Every line of code represents dedication, creativity, and love for clean design.
            This Nike project is a masterpiece built with React, Tailwind, and purpose.
          </p>

          <Link
         to="/about-me"
         className="inline-block mt-2 text-red-500 hover:underline font-medium transition-colors duration-200"
         >
         Learn more about me →
        </Link>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/OLAFLEX10000" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/awolesi-olamide-michael-53ba802aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/OlamideAwolesi?t=X4gSEUKMGHGiQJA_FbVzPA&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/ola_flexz?igsh=eHh2ZndqY20waHA0" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 Nike Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
