import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Blogs from './components/Blogs/Blogs'
import Notes from './components/Notes/Notes'
import Project from './components/Project/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900'>
      <div>
        <Navbar/>
        <Hero />
        <Blogs/>
        <Notes />
        <Project/>
      
      </div>
    </div>
  )
}

export default App
