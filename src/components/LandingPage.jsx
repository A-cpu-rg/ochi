import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';




function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 max-sm:leading-loose">
      {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
  return (
    <div className="masker" key={index}>
        <div className="w-fit flex items-center">
        {index === 1 && (<motion.div  initial={{width:"0"}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}}  className=" flex justify-center items-center mt-2 mr-3 rounded-md overflow-hidden realtive -top-[1.2vw] w-[9vw] h-[5.7vw] mt-4 rounded-2xl"><img src="https://ugc.production.linktr.ee/1298a9cc-ac4f-48d4-a064-a2eb3154a237_Group-4780.png?io=true&size=avatar-v3_0"/></motion.div>)}
      <h1
        className="uppercase text-9xl font-semibold leading-[7.5vw] max-sm:text-5xl"
        style={{ fontFamily: "'Test Founders Grotesk X-Condensed'" }}
      >
        {item}
      </h1>
      </div>
    </div>
  );
})}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20 max-sm:mt-5 max-sm:flex-col max-sm:gap-3 max-sm:pl-0">
  {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
    return (
      <p key={index} className="text-md font-light leading-none tracking-tighter">
        {item}
      </p>
    );
  })}
  <div className="start flex items-center gap-1">
  <Link
  to="contactUs"
  smooth={true}
  duration={1000}
  offset={-80} 
>
    <button className="px-5 py-2 border-[2px] border-zinc-500 font-light text-sm rounded-full">START THE PROJECT
    </button>
    </Link>
    <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500 ">
        <span className="rotate-[45deg]">
        <FaLongArrowAltUp/>
        </span>
    </div>

  </div>
</div>

    </div>
  );
}

export default LandingPage;
