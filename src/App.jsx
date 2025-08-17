import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Blogs from './components/Blogs/Blogs'
import Notes from './components/Notes/Notes'
import Project from './components/Project/Project'
import Form from './components/Form/Form'

function App() {

  return (
    <div className='bg-black'>
      <div>
        <Navbar/>
        <Hero />

        <div className="flex flex-col md:flex-row gap-6 px-6">
          <div  className="flex-1">
              <Blogs/>
          </div>
          <div  className="flex-1">
              <Notes />
          </div>
        </div>
        
        
        <Project/>
        <Form />
      
      </div>
    </div>
  )
}

export default App
