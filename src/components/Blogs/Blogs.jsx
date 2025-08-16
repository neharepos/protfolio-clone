import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Cards from '../Cards/Cards.jsx'
import Heading from '../Heading/Heading.jsx';


const blogData = [
  {
    title: "First Blog Post",
    date: "Aug 15, 2025",
    description: "This is a short description for the first blog post."
  },
  {
    title: "Second Blog Post",
    date: "Aug 12, 2025",
    description: "Description for the second blog post goes here."
  },
  {
    title: "Third Blog Post",
    date: "Aug 10, 2025",
    description: "Third post description with some interesting details."
  },
];

const Blogs = () => {
  return (
    <div className='text-white ml-[16px] mt-[5px]'>
        <div>
            <Heading heading="Blogs" description="Things I have written recently"/>
            
            {blogData.map((blog, index) => (
            <Cards 
            key={index}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            />
            ))}
        <h3 className='flex ml-[26px] mt-[10px] text-blue-500'>View all</h3>
        </div>
    </div>
  )
}

export default Blogs