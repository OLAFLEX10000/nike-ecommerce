import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Eagerly loaded components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import LoadingSpinner from '../components/LoadingSpinner'; // 👈 Import your new spinner

// Lazy Loaded Components
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));
const Cart = React.lazy(() => import('../pages/Cart'));
const SearchResults = React.lazy(() => import('../pages/SearchResults'));
const Contact = React.lazy(() => import('../pages/Contact'));
const AboutMe = React.lazy(() => import('../pages/AboutMe'));
const About = React.lazy(() => import('../pages/About'));
const Shop = React.lazy(() => import('../pages/Shop'));


const App = () => {
  return (
    <div className=' overflow-hidden w-full'>
      <Router basename={import.meta.env.BASE_URL}>
        <Navbar/>
        
        {/* ⏳ Suspense Boundary with your custom LoadingSpinner */}
        <Suspense fallback={<LoadingSpinner />}> {/* 👈 Use your custom component here */}
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Lazy-loaded Routes */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/search' element={<SearchResults/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about-me' element={<AboutMe/>}/>
            {/* Example of other lazy routes if you add them: */}
            {/* <Route path='/shop' element={<Shop/>}/> */} 
            {/* <Route path='/about' element={<About/>}/> */}
          </Routes>
        </Suspense>
        
        <Footer/>
      </Router>
    </div>
  )
}

export default App;