import React from 'react'
import InvestComponent from '../FixedComponent/InvestComponent'
import TopCourses from '../components/TopCourses'
import HeroSection from '../FixedComponent/HeroSection'
import Slider from '../FixedComponent/Slider'

function Home() {
  return (
    <>
    <Slider />
    <HeroSection />
   <TopCourses />
   <InvestComponent />
    
    </>
  )
}

export default Home