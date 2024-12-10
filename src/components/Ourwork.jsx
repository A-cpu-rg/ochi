import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Ourwork() {
  const lineRef = useRef(null);
  const [isHoveringCard1, setHoveringCard1] = useState(false);
  const [isHoveringCard2, setHoveringCard2] = useState(false);
  const [isHoveringCard3, setHoveringCard3] = useState(false);
  const [isHoveringCard4, setHoveringCard4] = useState(false);

  // IntersectionObserver for dotted line animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-lineGrow');
          } else {
            entry.target.classList.remove('animate-lineGrow');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div id='ourWork'>
    <div className='w-screen h-auto bg-[#18181B]'>
      {/* Header Section */}
      <h1 className='font-["Test_Founders_Grotesk_X-Condensed"] text-9xl pt-20 pl-10 text-white'>
        WORK
      </h1>

      {/* Dotted Line Section with Space */}
      <div className="relative w-screen flex items-center justify-start mb-12">
        <div
          ref={lineRef}
          className="border-zinc-100 w-full border-dotted border-b-[1px] pt-8 md:pt-28"
        ></div>
      </div>
      <div className='font-["Neue_Montreal"] text-5xl text-white leading-snug px-10 md:px-20'>
        <h2 className='max-w-4xl'>
          Purpose driven, <span className='underline'>strategy-led presentations</span> that people care about.
        </h2>
      </div>


      {/* Card Section */}
      <div className="px-20">
        <div className="cards w-full flex flex-wrap justify-between gap-10 mt-10 max-sm:flex-col max-sm:h-fit max-sm:w-fit">
          
          {/* First Card */}
          <div
            onMouseEnter={() => setHoveringCard1(true)}
            onMouseLeave={() => setHoveringCard1(false)}
            className="cardcontainer relative w-[48%] h-[75vh] overflow-hidden transform transition-transform duration-500 ease-in-out max-sm:w-full max-sm:h-1/2"
            style={{
              transform: isHoveringCard1 ? 'scale(1.1)' : 'scale(1.05)',
            }}
          >
            <motion.h1
              className="absolute text-[#CDEA68] z-[10] text-8xl font-['Test_Founders_Grotesk_X-Condensed'] leading-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={isHoveringCard1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {'FYDE'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={isHoveringCard1 ? { y: '0' } : { y: '100%' }}
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
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1100.png"
                alt="Featured project 1"
              />
            </div>
          </div>

          {/* Second Card */}
          <div
            onMouseEnter={() => setHoveringCard2(true)}
            onMouseLeave={() => setHoveringCard2(false)}
            className="cardcontainer relative w-[48%] h-[75vh] overflow-hidden transform transition-transform duration-500 ease-in-out max-sm:w-full max-sm:h-1/2"
            style={{
              transform: isHoveringCard2 ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <motion.h1
              className="absolute text-[#CDEA68] z-[10] text-8xl font-['Test_Founders_Grotesk_X-Condensed'] leading-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={isHoveringCard2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {'BLACK'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={isHoveringCard2 ? { y: '0' } : { y: '100%' }}
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
                src="https://ochi-website-clone.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject8.4892d4fa.webp&w=1920&q=75"
                alt="Featured project 2"
              />
            </div>
          </div>

          {/* Third Card */}
          <div
            onMouseEnter={() => setHoveringCard3(true)}
            onMouseLeave={() => setHoveringCard3(false)}
            className="cardcontainer relative w-[48%] h-[75vh] overflow-hidden transform transition-transform duration-500 ease-in-out mt-10 max-sm:w-full max-sm:h-1/2"
            style={{
              transform: isHoveringCard3 ? 'scale(1.1)' : 'scale(1.05)',
            }}
          >
            <motion.h1
              className="absolute text-[#CDEA68] z-[10] text-8xl font-['Test_Founders_Grotesk_X-Condensed'] leading-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={isHoveringCard3 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {'TRAWA'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={isHoveringCard3 ? { y: '0' } : { y: '100%' }}
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
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1100.jpg"
                alt="Featured project 3"
              />
            </div>
          </div>

          {/* Fourth Card */}
          <div
            onMouseEnter={() => setHoveringCard4(true)}
            onMouseLeave={() => setHoveringCard4(false)}
            className="cardcontainer relative w-[48%] h-[75vh] overflow-hidden transform transition-transform duration-500 ease-in-out mt-10 max-sm:w-full max-sm:h-1/2"
            style={{
              transform: isHoveringCard4 ? 'scale(1.1)' : 'scale(1.05)',
            }}
          >
            <motion.h1
              className="absolute text-[#CDEA68] z-[10] text-8xl font-['Test_Founders_Grotesk_X-Condensed'] leading-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={isHoveringCard4 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {'STAR'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={isHoveringCard4 ? { y: '0' } : { y: '100%' }}
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
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1100.png"
                alt="Featured project 4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-zinc-700 w-screen border-b-[1px] pt-12 md:pt-28"></div>

    </div>
    </div>
  );
}

export default Ourwork;
