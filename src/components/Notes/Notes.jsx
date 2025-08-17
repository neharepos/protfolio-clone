import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Heading from '../Heading/Heading';

import Cards from '../Cards/Cards'

const notesData = [
  {
    title: "Learn Tailwind CSS",
    description: "Review Tailwind utility classes and practice building responsive layouts.",
    date: "2025-08-15"
  },
  {
    title: "React Project Setup",
    description: "Initialize a new React app and configure ESLint, Prettier, and Tailwind CSS.",
    date: "2025-08-14"
  },
  {
    title: "JavaScript Practice",
    description: "Solve 5 coding problems from LeetCode and review ES6 concepts.",
    date: "2025-08-13"
  },
  {
    title: "Read about APIs",
    description: "Understand REST API concepts and fetch data from a public API.",
    date: "2025-08-12"
  },
  {
    title: "Networking Fundamentals",
    description: "Revise OSI model layers and practice related MCQs.",
    date: "2025-08-11"
  }
];


const Notes = () => {

  return (
    <div className='text-white ml-[16px] mt-[5px]'>
        <div>
            <Heading heading="Notes" description="Things I have been done recently"/>
            
            {notesData.map((notes, index) => (
            <Cards 
            key={index}
            title={notes.title}
            date={notes.date}
            description={notes.description}
            />
            ))}
            <h3 className='flex ml-[26px] mt-[10px] text-blue-500'>View all</h3>
        </div>
    </div>
  )
}

export default Notes