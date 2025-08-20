import React from 'react'
import { RiFacebookCircleFill } from "react-icons/ri";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8 border-t">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <ul className="flex flex-wrap justify-center space-x-6 mb-6">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li><a href="#" className="hover:text-black">Blog</a></li>
          <li><a href="#" className="hover:text-black">Notes</a></li>
          <li><a href="#" className="hover:text-black">Projects</a></li>
          <li><a href="#" className="hover:text-black">About</a></li>
          <li><a href="#" className="hover:text-black">Contact</a></li>
        </ul>

        <div className="flex gap-6 text-2xl mb-4">
          <a href="#"><RiFacebookCircleFill className="hover:text-blue-600" /></a>
          <a href="#"><PiInstagramLogoLight className="hover:text-pink-500" /></a>
          <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
          <a href="#"><FaGithub className="hover:text-black" /></a>
          <a href="#"><FaDribbble className="hover:text-pink-400" /></a>
        </div>
        <p className="text-sm">&copy; 2025 Nishant Singh. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
