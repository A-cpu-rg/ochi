import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [isHoveringCard1, setHoveringCard1] = useState(false);
  const [isHoveringCard2, setHoveringCard2] = useState(false);

  return (
    <div className="w-full py-20 max-sm:py-10">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10 max-sm:mr-6">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10">
          <div
            onMouseEnter={() => setHoveringCard1(true)}
            onMouseLeave={() => setHoveringCard1(false)}
            className="cardcontainer relative w-full md:w-1/2 h-auto overflow-hidden transition-transform duration-500 ease-in-out"
            style={{
              transform: isHoveringCard1 ? "scale(1.05)" : "scale(1)",
            }}
          >
            <motion.h1
              className="absolute text-[#CDEA68] z-[10] text-8xl font-['Test_Founders_Grotesk_X-Condensed'] leading-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={isHoveringCard1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringCard1 ? { y: "0" } : { y: "100%" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </motion.h1>
            <div className="card w-full h-full rounded-xl overflow-hidden bg-zinc-100">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt="Featured project 1"
              />
            </div>
          </div>

          <div
            onMouseEnter={() => setHoveringCard2(true)}
            onMouseLeave={() => setHoveringCard2(false)}
            className="cardcontainer relative w-full md:w-1/2 h-auto overflow-hidden transition-transform duration-500 ease-in-out"
            style={{
              transform: isHoveringCard2 ? "scale(1.05)" : "scale(1)",
            }}
          >
            <motion.h1
              className="absolute text-[#CDEA68] z-[10] text-8xl font-['Test_Founders_Grotesk_X-Condensed'] leading-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={isHoveringCard2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringCard2 ? { y: "0" } : { y: "100%" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </motion.h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt="Featured project 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
