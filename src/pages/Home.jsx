import React from 'react'
import InvestComponent from '../FixedComponent/InvestComponent'
import TopCourses from '../components/TopCourses'
import HeroSection from '../FixedComponent/HeroSection'
import Slider from '../FixedComponent/Slider'
import NewestCourses from '../components/NewestCourses'

function Home() {
  return (
    <>
    <Slider />
    <HeroSection />
   <TopCourses />
   <InvestComponent />
    <NewestCourses />
    </>
  )
}

export default Home