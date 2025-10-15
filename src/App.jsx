import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import essential, globally used components normally
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// === REMOVED REACT.LAZY AND SUSPENSE ===
// Import all page components directly (synchronous loading)
import Home from '../pages/Home';
import About from '../pages/About';
import Cart from '../pages/Cart';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import ProductDetail from '../pages/ProductDetail';
import Shop from '../pages/Shop';
import SearchResults from '../pages/SearchResults';

const App = () => {
  return (
    <div className=' overflow-hidden w-full'>
        <Router>
         <Navbar/>
            
          {/* The <Suspense> component is no longer needed/used */}
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/shop" element={<Shop />} /> 
               <Route path="/about" element={<About />} />
               <Route path="/product/:id" element={<ProductDetail />} />
               <Route path="/cart" element={<Cart />} />
               <Route path='/search' element={<SearchResults/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/about-me' element={<AboutMe/>}/>
        
            </Routes>
          

          <Footer/>
        </Router>
    </div>
  )
}

export default App