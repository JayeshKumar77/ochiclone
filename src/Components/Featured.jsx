import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }
    const hoverScale = [useAnimation()]
    const handleScale = () => {

    }

    return (
        <div className='w-full py-10'>
            <div className="w-full px-[2.5vw] border-b-[2px] border-zinc-300 pb-[3.5vw]">
                <h1 className='text-[4.5vw]'>Featured projects</h1>
            </div>
            <div className='px-[2.5vw] cards w-full mt-[3.5vw] grid grid-cols-2 gap-[5VW] max-md:grid-cols-1'>
                <motion.div
                    onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className="cardcontainer flex flex-col gap-4 relative md:w-[45vw] md:h-[38vw]  ">
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full bg-black'></div>
                        <div className='uppercase '>fyde</div>
                    </div>
                    <div className='card overflow-hidden rounded-lg w-full h-full'>
                        <h1 className=' absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-50  text-[#CDEA68] text-[7vw] tracking-tighter leading-none font-bold'>
                            {"FYDE".split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>)}
                        </h1>
                        <img

                            className='rounded-lg transition ease-linear delay-100 duration-300 hover:scale-95 bg-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>audit</div>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>copyrighting</div>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>sales deck</div>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>slides design</div>

                    </div>
                </motion.div>
                <motion.div
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className="relative flex flex-col gap-4  cardcontainer md:w-[45vw] md:h-[38vw] ">
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full bg-black'></div>
                        <div className='uppercase '>vise</div>
                    </div>
                    <div className='card  overflow-hidden rounded-lg w-full h-full'>
                        <h1 className='absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9]  text-[#CDEA68] text-[7vw] tracking-tighter leading-none font-bold'>
                            {"VISE".split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>)}

                        </h1>
                        <img className='rounded-lg transition ease-linear delay-100 duration-300 hover:scale-95 bg-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>agency</div>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>company presentation</div>

                    </div>
                </motion.div>
                <motion.div
                    onHoverStart={() => handleHover(2)}
                    onHoverEnd={() => handleHoverEnd(2)}
                    className="cardcontainer flex flex-col gap-4 relative md:w-[45vw] md:h-[38vw] ">
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full bg-black'></div>
                        <div className='uppercase '>cardboard spaceship</div>
                    </div>
                    <div className=' card overflow-hidden rounded-lg w-full h-full'>
                        <h1 className='absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9]  text-[#CDEA68] text-[7vw] tracking-tighter leading-none font-bold'>
                            {"CARDBOARD SPACESHIP".split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[2]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>)}
                        </h1>
                        <img className='rounded-lg transition ease-linear delay-100 duration-300 hover:scale-95 bg-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>branded template</div>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>sales deck</div>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>social media templates</div>

                    </div>
                </motion.div>

                <motion.div
                    onHoverStart={() => handleHover(3)}
                    onHoverEnd={() => handleHoverEnd(3)}
                    className="relative flex flex-col gap-4 cardcontainer md:w-[45vw] md:h-[38vw] ">
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full bg-black'></div>
                        <div className='uppercase '>ah2 & matt horn</div>
                    </div>
                    <div className='card overflow-hidden rounded-lg w-full h-full'>
                        <h1 className=' absolute uppercase flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9]  text-[#CDEA68] text-[7vw] tracking-tighter leading-none font-bold'>
                            {"AH2 & MATT HORN".split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[3]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>)}

                        </h1>
                        <img className='rounded-lg transition ease-linear delay-100 duration-300 hover:scale-95 bg-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex justify-center items-center uppercase px-2 py-1 border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white transition ease-linear duration-200'>pitch deck</div>


                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Featured
