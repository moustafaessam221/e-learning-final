import React from "react";
import InvestComponent from "../FixedComponent/InvestComponent";
import TopCourses from "../components/TopCourses";
import HeroSection from "../FixedComponent/HeroSection";
import Slider from "../FixedComponent/Slider";
import NewestCourses from "../components/NewestCourses";
import Testimonials from "../FixedComponent/Testimonials";
import BannerImage from "../components/InstructorBanner";

function Home() {
  return (
    <>
      <Slider />
      <HeroSection />
      <TopCourses />
      <InvestComponent />
      <NewestCourses />
      <Testimonials />
      <BannerImage />
    </>
  );
}

export default Home;
