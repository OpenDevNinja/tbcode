import React from 'react'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import PortfolioSection from './PortfolioSection'
import ShopSection from './ShopSection'
import BlogSection from './BlogSection'
import AboutSection from './AboutSection'

import ContactSection from './ContactSection'
import SkillSection from './SkillSection'
import BackToTop from '../components/BackToTop'

const Home = () => {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <SkillSection/>
    <ServicesSection />
    <PortfolioSection />
   {/*  <ShopSection/> */}
    {/* <BlogSection/> */}
    <ContactSection />
    <BackToTop/>
    </>
  )
}

export default Home