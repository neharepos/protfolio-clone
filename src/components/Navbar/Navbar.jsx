import React, { useState }  from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='sticky top-0 z-50 flex justify-end text-white gap-4 mr-10 mt-6 text-lg font-quicksand font-extrabold'>
      
       <div className=' hidden lg:flex gap-4'>
        
        <ul className='flex gap-4 backdrop-blur'>
            <li><a href="#" className=' hover:text-blue-600'>Home</a></li>
            <li><a href="#" className=' hover:text-blue-600'>Blogs</a></li>
            <li><a href="#" className=' hover:text-blue-600'>Notes</a></li>
            <li><a href="#" className=' hover:text-blue-600'>Projects</a></li>
            <li><a href="#" className=' hover:text-blue-600'>About</a></li>
        </ul> 
        </div>
        
          <div className='inline lg:hidden font-bold cursor-pointer ' onClick={toggleMenu}>
             {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        
        </div>
        {isOpen && (
        <div className=' flex flex-col items-start gap-4 px-4 pb-4 lg:hidden text-lg'>
          <a href="#" className='hover:text-blue-600'>Home</a>
          <a href="#" className='hover:text-blue-600'>Blogs</a>
          <a href="#" className='hover:text-blue-600'>Notes</a>
          <a href="#" className='hover:text-blue-600'>Projects</a>
          <a href="#" className='hover:text-blue-600'>About</a>
        </div>
        )}
    </div>

  )
}

export default Navbar