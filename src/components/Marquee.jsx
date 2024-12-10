import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return (
      <div className=' relative w-full py-20 rounded-3xl bg-[#004D43] overflow-hidden'>
        <div className='sticky top-0'>
          <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap pr-10'>
            <motion.h1
              initial={{ x: "0" }} 
              animate={{ x: "-100%" }} 
              transition={{ ease: "linear", repeat: Infinity, duration: 10 }} 
              className='text-[22vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold'
            >
              WE ARE OCHI
            </motion.h1>
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
              className='text-[22vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] font-semibold'
            >
              WE ARE OCHI
            </motion.h1>
          </div>
        </div>
      </div>
    )
  }
  
  export default Marquee;