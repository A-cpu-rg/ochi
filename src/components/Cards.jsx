import React from 'react';

function Cards() {
    return (
      <div className="w-full h-screen bg-zinc-900 flex flex-col md:flex-row items-center px-6 md:px-32 gap-5">
        {/* First Card */}
        <div className="cardcontainer1 h-[50vh] w-full md:w-1/2">
          <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
            <img
              className="w-20 md:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="Logo 1"
            />
            <button className="absolute px-3 md:px-5 py-1 border-2 rounded-full left-6 md:left-10 bottom-6 md:bottom-10 border-[#CDEA67] text-[#CDEA67] text-xs md:text-base">
              &copy;2019-2022
            </button>
          </div>
        </div>
  
        {/* Second and Third Cards */}
        <div className="cardcontainer2 flex flex-col md:flex-row gap-5 w-full md:w-1/2 h-[50vh] space-y-2 md:space-y-0">
          {/* Second Card */}
          <div className="card relative rounded-xl w-full md:w-1/2 h-full bg-[#212121] flex items-center justify-center">
            <img
              className="w-20 md:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt="Logo 2"
            />
            <button className="absolute mt-2 px-2 py-1 md:px-4 border-2 rounded-full left-4 md:left-10 bottom-6 md:bottom-10 md:-mt-32 text-xs hover:bg-white hover:text-black transition duration-300 ease-in-out">
              RATING 5.0 ON CLUTCH
            </button>
          </div>
  
          {/* Third Card */}
          <div className="card relative rounded-xl w-full md:w-1/2 h-full bg-[#212121] flex items-center justify-center">
            <img
              className="w-20 md:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt="Logo 3"
            />
            <button className="absolute px-2 py-1 md:px-4 border-2 rounded-full left-4 md:left-6 bottom-6 md:bottom-10 text-xs hover:bg-white md:mt-20 hover:text-black transition duration-300 ease-in-out">
              BUSINESS BOOTCAMP ALUMNI
            </button>
          </div>
        </div>
      </div>
    );
  }
  
export default Cards;
