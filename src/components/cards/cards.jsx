import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Cards = (props) => {
  return (
    <div>
        <div className='transition duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
         backdrop-blur-md rounded-2xl  p-[20px] cursor-pointer shadow-lg mt-[16px]  sm:w-[380px] sm:h-[230px]  md:w-[500px] md:h-[240px] lg:w-[620px] xl:h[250] group'>
                <h2 className='font-bold text-xl text-white font-poppins'>{props.title}</h2>
                <h3 className='font-semibold text-white font-poppins'>{props.date}</h3>
                <p className='text-gray-400 font-quicksand'>{props.description}</p>
                <span className='text-blue-500 cursor-pointer'>Read</span>
                {/* <h3 className='flex text-blue-500 cursor-pointer'>Read <IoIosArrowRoundForward  className='ml-[2px] mt-[2px] w-6 h-6 transition-transform duration-300 group-hover:translate-x-2'/></h3> */}
                <span className='inline-block text-blue-500 ml-[2px] w-6 h-6 transition-transform duration-300 group-hover:translate-x-2'>&#8594;</span> 

                
          
            </div>
    </div>
  )
}

export default Cards