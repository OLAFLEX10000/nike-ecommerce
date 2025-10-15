import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import essential, globally used components normally
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Use React.lazy() to dynamically import page components
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Cart = lazy(() => import('../pages/Cart'));
const AboutMe = lazy(() => import('../pages/AboutMe'));
const Contact = lazy(() => import('../pages/Contact'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Shop = lazy(() => import('../pages/Shop'));
const SearchResults = lazy(() => import('../pages/SearchResults'));

const App = () => {
  return (
    <div className=' overflow-hidden w-full'>
        <Router>
         <Navbar/>
            
          <Suspense fallback={
                // 💡 ENHANCED FALLBACK: The Bouncing Loader 💡
                <div className="flex flex-col justify-center items-center h-screen bg-neutral-900 text-white p-4">
                    
                    {/* Bouncing Dot/Ball Animation */}
                    <div className="flex space-x-2 justify-center items-center">
                        <div className="h-4 w-4 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-4 w-4 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-4 w-4 bg-red-600 rounded-full animate-bounce"></div>
                    </div>
                    
                    {/* Text */}
                    <p className="mt-8 text-xl font-semibold tracking-wider uppercase text-gray-300">
                        Loading Page... Run Faster.
                    </p>
                </div>
            }>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/shop" element={<Shop />} /> 
               <Route path="/about" element={<About />} />
               <Route path="/product/:id" element={<ProductDetail />} />
               <Route path="/cart" element={<Cart />} />
               <Route path='/search' element={<SearchResults/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/about-me' element={<AboutMe/>}/>
                {/* 404 Route */}
                <Route path="*" element={<div className="h-screen bg-black text-white flex justify-center items-center text-4xl">404 | Page Not Found</div>} />
            </Routes>
            </Suspense>

          <Footer/>
        </Router>
    </div>
  )
}

export default App