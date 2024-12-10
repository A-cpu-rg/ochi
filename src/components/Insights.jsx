import React from 'react';

function Insights() {
  return (
    <div id='insights'>
    <div className='w-screen min-h-screen bg-[#18181B] overflow-auto'>
      <div className='text-white text-7xl font-[Test_Founders_Grotesk_X-Condensed] pt-12 pl-12 md:text-9xl md:pt-16 md:pl-16'>INSIGHTS</div>
      <div className='text-gray-300 text-xs uppercase tracking-widest flex justify-center mt-4 gap-x-2 md:text-sm md:mt-6 md:gap-x-5'>
        <button className='py-1 px-3 bg-gray-800 rounded text-xs md:py-1 md:px-4 md:text-sm'>All</button>
        <button className='py-1 px-3 bg-gray-800 rounded text-xs md:py-1 md:px-4 md:text-sm'>News</button>
        <button className='py-1 px-3 bg-gray-800 rounded text-xs md:py-1 md:px-4 md:text-sm'>Pitch deck</button>
        <button className='py-1 px-3 bg-gray-800 rounded text-xs md:py-1 md:px-4 md:text-sm'>Presentation agency</button>
        <button className='py-1 px-3 bg-gray-800 rounded text-xs md:py-1 md:px-4 md:text-sm'>Presentation template</button>
        <button className='py-1 px-3 bg-gray-800 rounded text-xs md:py-1 md:px-4 md:text-sm'>Public speaking</button>
        <button className='py-1 px-3 bg-gray-800 rounded text-xs md:py-1 md:px-4 md:text-sm'>Storytelling</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-16'>
        <div className='bg-gray-700 p-2 md:p-4'>
          <div className='bg-gray-800 p-2 md:p-4'>
            <img src='https://ochi.design/wp-content/uploads/2022/12/Frame-4064-650x650.png' alt='Article Preview' className='w-full' />
            <h2 className='text-white text-lg md:text-xl'>Why hiring a presentation agency will boost your business</h2>
            <button className='text-blue-400'>Read Article</button>
          </div>
        </div>
        <div className='bg-gray-700 p-2 md:p-4'>
          <img src='https://ochi.design/wp-content/uploads/2023/11/v3_0-663x663.png' alt='trawa' className='w-full' />
          <div className='text-gray-300 text-base md:text-lg'>Our client trawa raises €10M in seed funding</div>
          <div className='text-blue-400 text-sm md:text-base'>31 Jul. 24</div>
        </div>
        <div className='bg-gray-700 p-2 md:p-4'>
          <img src='https://ochi.design/wp-content/uploads/2024/07/trawa_website-663x497.png' alt='speaker' className='w-full' />
          <div className='text-gray-300 text-base md:text-lg'>Developing company-wide presentation template for Premium Blend</div>
          <div className='text-blue-400 cursor-pointer text-sm md:text-base pt-16'>Read More</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Insights;
