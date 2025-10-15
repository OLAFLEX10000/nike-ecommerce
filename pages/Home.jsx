import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ProductCard from '../components/ProductCard'
import ShritSection from '../components/ShritSection'
import BagSection from '../components/BagSection'
import Testimonial from '../components/Testimonial'


const Home = () => {
  return (
    <div className='m-0 box-border'>
  
        <Hero/>
      <About/>
      <ProductCard/>
      <ShritSection/>
      <BagSection/>
      <Testimonial/>
    </div>
  )
}

export default Home
