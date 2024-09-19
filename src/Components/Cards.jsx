import React from 'react'

function Cards() {
    return (
        <div className="px-[2.5vw] border-t-[2px] border-zinc-300 py-[7vw] w-full  grid grid-cols-2 gap-[1vw] max-xl:flex max-lg:grid max-lg:grid-rows-2 max-lg:grid-cols-1 ">
            <div className="cardcontainer max-lg:w-full max-xl:w-1/2 h-[60vh] ">
                <div className="flex relative justify-center items-center card rounded-xl w-full h-full bg-[#004D43]">
                    <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <div className='absolute bottom-5 left-4 text-[#CDEA68] border-[1px] rounded-full border-[#CDEA68] px-2 py-1'>&#169; 2019-2022</div>
                </div>
            </div>

            <div className="cardcontainer gap-[1vw] w-full flex max-[560px]:flex-col h-[60vh] ">
                <div className="flex relative justify-center items-center card rounded-xl w-full h-full bg-[#212121]">
                    <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <div className='absolute bottom-5 left-4 text-zinc-200 border-[1px] rounded-full border-zinc-200 px-2 py-1 hover:bg-white hover:text-[#212121] transition ease-linear duration-200'>RATING 5.0 ON CLUTCH</div>
                </div>
                <div className="flex relative justify-center items-center card rounded-xl w-full h-full bg-[#212121]">
                    <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <div className='absolute bottom-5 left-4 text-zinc-200 border-[1px] rounded-full border-zinc-200 px-2 py-1 hover:bg-white hover:text-[#212121] transition ease-linear duration-200'>BUSINESS BOOTCAMP ALUMNI</div>
                </div>
            </div>

        </div>
    )
}

export default Cards
