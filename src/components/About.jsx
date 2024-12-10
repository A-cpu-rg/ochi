import React from 'react'
function About() {
  return (

    <div style={{ color: '#212121' }} className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] text-5xl leading-[4.6vw] max-sm:text-xl max-sm:text-white'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds, sell prod­ucts, ex­plain com­plex ideas</span>, and hire great peo­ple.</h1>
        <div className=' flex  w-full border-t-[1px] mt-20 border-[#a1b562] pt-10 max-sm:flex max-sm:gap-9 max-sm:pt-4'>
            <div className='w-1/2'>
                <h1 className='text-6xl max-sm:text-3xl max-sm:text-nowrap '>Our approach:</h1>
                <a href="https://www.linkedin.com/company/ochi-design/" target="_blank" rel="noopener noreferrer">
  <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 max-sm:px-2 max-sm:py-2 max-sm:text-sm'>
    READ MORE
    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
  </button>
</a>


            </div>
            <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg' className='w-1/2 rounded-2xl max-sm:mt-12'></img>
        </div>

    </div>

  )
}

export default About