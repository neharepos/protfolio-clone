import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Blogs from './components/Blogs/Blogs'
import Notes from './components/Notes/Notes'
import Project from './components/Project/Project'
import Form from './components/Form/Form'
import Information from './components/Information/Information'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='bg-black'>
      <div>
        <Navbar />
        <Hero />

        <div className="flex flex-col md:flex-row gap-6 px-6">
          <div className="flex-1">
            <Blogs />
          </div>
          <div className="flex-1">
            <Notes />
          </div>
        </div>


        <Project />
        
        
         <div className="relative flex flex-col items-center lg:w-[1300px] lg:ml-13 lg:mb-10">
      
      <Form />

      
      <div className="mt-6 lg:mt-8 w-full lg:absolute lg:bottom-[-40px] lg:right-[-80px] lg:w-1/2">
        <Information />
        
      </div>
    </div>
    <Footer/>



        
      </div>

    </div>

  )
}

export default App
