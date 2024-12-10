import React, { useEffect, useRef } from "react";
import { Link } from 'react-scroll';

function Info() {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-lineGrow");
          } else {
            entry.target.classList.remove("animate-lineGrow");
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
    <div id="aboutUs" className="bg-gray-50">
      <div className="w-screen min-h-screen px-4 py-16 lg:px-16">
        {/* Heading "ABOUT US" */}
        <h1 className="font-['Test_Founders_Grotesk_X-Condensed'] text-6xl md:text-9xl text-black tracking-tight mb-12">
          ABOUT US
        </h1>

        {/* Horizontal divider */}
        <div className="border-zinc-700 w-full border-b-[1px] pt-4 md:pt-16 mb-16"></div>

        {/* Main content area */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Text content */}
          <div className="text-gray-700 font-['Neue_Montreal'] leading-relaxed">
            <p className="text-base md:text-lg">
              In Ukrainian, ochi - means eyes. It's not just a beautiful word, but
              our philosophy. Almost everything that needs to be communicated is
              better shown than explained.
            </p>
            <br />
            <p className="text-base md:text-lg">
              We believe a great presentation evokes interest and drives business
              results far better than any saying can. Hence, we founded ochi to
              help you persuade colleagues and clients by creating eye-opening
              presentations.
            </p>
          </div>

          {/* Button */}
          <div className="mt-10">
            <Link to="ourWork" smooth={true} duration={1000} offset={-80}>
              <button className="flex items-center space-x-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition">
                <span>OUR WORKS</span>
                <span>↗</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image section with paragraphs */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* EYE-OPENING Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Asset-52@2x-20-1.jpg"
              alt="Eye-Opening"
              className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="mt-4">
              <p className="text-gray-800 text-lg font-semibold">EYE-OPENING</p>
              <p className="text-gray-600 text-base font-['Neue_Montreal'] mt-2">
                Whether the presentation needs to convince or educate it always has
                to change audience perception. We seek insights to make decks
                unexpectedly enlightening for our audience.
              </p>
            </div>
          </div>

          {/* EYE-CATCHING Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Asset-51@2x-20-1.jpg"
              alt="Eye-Catching"
              className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="mt-4">
              <p className="text-gray-800 text-lg font-semibold">EYE-CATCHING</p>
              <p className="text-gray-600 text-base font-['Neue_Montreal'] mt-2">
                The presentation helps to see what's hidden, unseen, or simply
                never known before. We use design to drive their attention, focus
                them to clearly see, and help them feel the message.
              </p>
            </div>
          </div>
        </div>

        {/* Dotted line after image */}
        <div
          ref={lineRef}
          className="border-zinc-100 w-full border-dotted border-b-[1px] pt-8 md:pt-28 mt-16"
        ></div>
      </div>
      <footer className="w-full py-8 bg-black text-white text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ochi Team. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Info;
