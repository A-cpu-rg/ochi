import React from 'react'
import { Link } from 'react-scroll';


function ReadyToStart() {
  return (
<div className='bg-[#CDEA67] w-screen h-screen flex items-center justify-center flex-col'>
    <h1 className='font-["Test_Founders_Grotesk_X-Condensed"] text-[#212121] text-center uppercase font-semibold 
        leading-tight
        text-4xl md:text-6xl lg:text-8xl xl:text-9xl 
        md:leading-[6vw] lg:leading-[7vw] xl:leading-[7.5vw]'>
        READY<br />TO START<br />THE PROJECT?
    </h1>
    <Link
  to="contactUs"
  smooth={true}
  duration={1000}
  offset={-80} 
>
  <button className='mt-8 border-2 rounded-full bg-[#000000] border-white px-6 py-2 transition-transform duration-300 ease-in-out transform hover:scale-105'>
    START THE PROJECT
  </button>
</Link>
</div>


  )
}

export default ReadyToStart