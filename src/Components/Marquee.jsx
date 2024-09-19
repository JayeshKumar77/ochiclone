import { motion } from "framer-motion";
import React from "react";

function Marquee() {
    
  return (
      <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-[5vw] rounded-t-2xl bg-[#004D43] text-white">
        <div className=" text border-t border-b border-zinc-500 flex  whitespace-nowrap mt-[3vw]">
          <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 12}}  className='text-[22vw] leading-[19vw] font-["Founders Grotesk"] font-bold uppercase pr-4 '>
            we are ochi
          </motion.h1>
          <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 12}}  className='text-[22vw] leading-[19vw] font-["Founders Grotesk"] font-bold uppercase pr-4 '>
            we are ochi
          </motion.h1>
        </div>
      </div>
  );
}

export default Marquee;
