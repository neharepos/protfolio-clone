import React from 'react'

const cards = () => {
  return (
    <div className='text-white ml-[225px] mt-[100px]'>
        <div className='border-3 border-blue-500 p-[12px] cursor-pointer hover:border-blue-800 transition-colors duration-300 mt-[16px] w-[200px] h-[170px]'>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Facilis, velit!
                <h3 className='flex text-blue-500'>Read <IoIosArrowRoundForward  className='ml-[2px] mt-[7px]'/></h3>
            </div>
    </div>
  )
}

export default cards