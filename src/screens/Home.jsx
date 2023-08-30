import React from 'react'
import Clip from '../components/clip/Clip'
import Details from '../components/details/Details'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Clip/>
        <Details/>
        <Footer/>
    </div>
  )
}

export default Home