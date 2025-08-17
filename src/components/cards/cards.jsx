import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Cards = (props) => {
  return (
    <div>
        <div className='border-3 border-blue-500 backdrop-blur-md rounded-2xl  p-[20px] cursor-pointer shadow-lg mt-[16px]  sm:w-[380px] sm:h-[230px]  md:w-[500px] md:h-[240px] lg:w-[620px] xl:h[250]'>
                <h2 className='font-bold text-xl text-white '>{props.title}</h2>
                <h3 className='font-semibold text-white'>{props.date}</h3>
                <p className='text-gray-400'>{props.description}</p>
                <h3 className='flex text-blue-500'>Read <IoIosArrowRoundForward  className='ml-[2px] mt-[7px]'/></h3>

                
          
            </div>
    </div>
  )
}

export default Cards