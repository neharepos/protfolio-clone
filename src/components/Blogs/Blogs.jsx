import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Blogs = () => {
  return (
    <div className='text-white ml-[225px] mt-[100px]'>
        <div>
            <h1 className='font-bold text-4xl flex cursor-pointer no-underline hover:underline'>Blogs <IoIosArrowRoundForward  className='ml-[2px] mt-[7px]'/></h1>
            <p className='mt-[6px]'>Things I have written</p>
            <div className='border-3 border-blue-500 p-[12px] cursor-pointer hover:border-blue-800 transition-colors duration-300 mt-[16px] w-[200px] h-[170px]'>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Facilis, velit!
                <h3 className='flex text-blue-500'>Read <IoIosArrowRoundForward  className='ml-[2px] mt-[7px]'/></h3>
            </div>
        </div>
    </div>
  )
}

export default Blogs