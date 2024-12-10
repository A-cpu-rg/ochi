import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feautured from './components/Feautured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import ReadyToStart from './components/ReadyToStart'
import Services from './components/Services'
import Ourwork from './components/Ourwork'
import Info from './components/Info'
import Insights from './components/Insights'
import Contactus from './components/Contactus'



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feautured/>
      <Cards/>
      <ReadyToStart/>
      <Services/>
      <Ourwork/>
      <Info/>
      <Insights/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App