import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Heading from './components/Heading/Heading'
import Cards from './components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900'>
      <div>
        <Navbar/>
        <Hero />
        <Heading heading="Blogs" task="Things I have written recently"/>
      
      </div>
    </div>
  )
}

export default App
