import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-0.1" className='font-["Neue Montreal"] w-full py-[6vw] bg-[rgb(205,234,104)] rounded-t-2xl  '>
      <h1 className='max-md:text-[30px] px-[3vw] text-[4vw] leading-none tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='flex gap-5 max-md:flex-col px-[3vw] mt-[10vw] w-full border-t-[1px] border-[#A6BD58]'>
        <div className="w-1/2 ">
        <h1 className='text-[3.5vw] tracking-tighter'>Our approach:</h1>
        <button className='mt-4 flex items-center gap-[2vw] uppercase bg-zinc-900 hover:bg-black transition ease-linear duration-200 px-6 py-4 max-[330px]:px-[4vw] max-[330px]:py-[2vw] rounded-full text-white max-[330px]:text-[4vw]'>read more
          <div className='w-3 h-3 rounded-full bg-white'></div>
        </button>
        </div>
        <div className="mt-[1vw] w-1/2 max-md:w-full max-md:h-[70vw] h-[33vw] rounded-xl bg-[#78911d] overflow-hidden">
              <img className='bg-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
