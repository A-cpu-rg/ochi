import React from "react";

function Services() {
  return (
    <>
    <div id="services">
     <div className="w-screen min-h-screen bg-[#18181B] ">
  <h1 className='text-white font-["Test_Founders_Grotesk_X-Condensed"] text-5xl md:text-9xl pt-20 md:pt-40 ml-10 md:ml-20'>
    SERVICES
  </h1>
  <div className="border-zinc-700 w-screen border-b-[1px] pt-12 md:pt-28"></div>
  <div className='font-["Neue_Montreal"] text-white text-2xl md:text-5xl pt-6 md:pt-10 pl-6 md:pl-14 leading-tight font-normal'>
    We create <u>eye-catching</u> and <u>eye-opening</u> <br />
    presentations that educate, inspire and influence
    <br /> action.
  </div>
  <div className="border-zinc-700 w-screen border-b-[1px] pt-12 md:pt-20"></div>
</div>

<div className="w-screen min-h-screen bg-[#CDEA67]">
  <div>
    <h1 className='font-["Test_Founders_Grotesk_X-Condensed"] text-5xl md:text-9xl text-center text-[#212121] mt-10'>
      CLIENT'S REVIEWS
    </h1>
  </div>

  {/* Reviews Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mt-10 md:mt-16 px-4">
    
    {/* First Review */}
    <div className="flex justify-center items-center bg-[#CDEA67] p-5 md:p-10">
      <div className="flex flex-col justify-center items-center bg-white p-6 md:p-8 rounded-lg shadow-xl">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
          src="https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?w=360"
        />
        <div className="bg-black text-white p-4 md:p-6 rounded-lg shadow-md max-w-sm md:max-w-lg mt-6 md:mt-10">
          <p className="text-center font-['Neue_Montreal'] text-sm md:text-base">
            The team at Ochi was highly attentive and responsive. They listened to
            our needs and provided creative solutions throughout the project. Their
            professionalism ensured a seamless experience, and I couldn't be
            happier with the outcome! 5/5
          </p>
        </div>
      </div>
    </div>

    {/* Second Review */}
    <div className="flex justify-center items-center bg-[#CDEA67] p-5 md:p-10">
      <div className="flex flex-col justify-center items-center bg-white p-6 md:p-8 rounded-lg shadow-xl">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
          src="https://petapixel.com/assets/uploads/2022/01/VAI_01-22_People_Panther_JPG_white_hor_046-800x460.jpg"
        />
        <div className="bg-black text-white p-4 md:p-6 rounded-lg shadow-md max-w-sm md:max-w-lg mt-6 md:mt-10">
          <p className="text-center font-['Neue_Montreal'] text-sm md:text-base">
            Ochi's team was very thorough and professional. The whole process
            was smooth, and they made sure to incorporate all our feedback. I
            was impressed with their creativity and dedication to delivering a
            high-quality design. 5/5
          </p>
        </div>
      </div>
    </div>

    {/* Third Review */}
    <div className="flex justify-center items-center bg-[#CDEA67] p-5 md:p-10">
      <div className="flex flex-col justify-center items-center bg-white p-6 md:p-8 rounded-lg shadow-xl">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
          src="https://petapixel.com/assets/uploads/2022/01/VAI_01-22_People_Panther_JPG_white_hor_007-800x460.jpg"
        />
        <div className="bg-black text-white p-4 md:p-6 rounded-lg shadow-md max-w-sm md:max-w-lg mt-6 md:mt-10">
          <p className="text-center font-['Neue_Montreal'] text-sm md:text-base">
            Excellent work and great attention to detail. They understood our
            needs perfectly and delivered an outstanding product. Their
            communication throughout the project was clear and timely. Highly
            recommend! 5/5
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
</div>

    </>
  );
}

export default Services;
