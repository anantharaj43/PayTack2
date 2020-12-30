import React from 'react'
import HeroBanner from '../components/Home/HeroBanner'
import HomeRetain from '../components/Home/HomeRetain'
import HowItWorks from '../components/Home/HowItWorks'
import BenefitEveryone from '../components/Home/BenefitEveryone'
import CustomerSlicks from '../components/Home/CustomerSlicks'
import FAQ from '../components/Home/FAQ'
import Contact from '../components/Home/Contact'
// import Subcribtion from '../components/Home/Subcribtion'

const Home = () => {
    return (
        <>
            <HeroBanner />
            <HomeRetain />
            <HowItWorks />
            <BenefitEveryone />
            <CustomerSlicks />
            <FAQ />
            <Contact />
        </>
    )
}

export default Home;
