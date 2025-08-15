import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Cards from '../Cards/Cards.jsx'

const Heading = (props) => {
  return (
    <div className='text-white ml-[16px] mt-[5px]'>
        <div>
            <h1 className='font-bold text-4xl flex cursor-pointer '>{props.heading}<IoIosArrowRoundForward  className='ml-[2px] mt-[7px]'/></h1>
            <p className='mt-[6px]'>{props.task}</p>
            <Cards 
            title="My First Blog"
            date="publised on: 11-2-24" 
            description="For a first-time visitor to Delhi, 
            it's recommended to explore iconic landmarks 
            like the Red Fort, Qutub Minar, and Humayun's Tomb,
             which showcase the city's rich history."
        />
        <h3 className='flex ml-[26px] mt-[10px] text-blue-500'>View all</h3>
        </div>
    </div>
  )
}

export default Heading