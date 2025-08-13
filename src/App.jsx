import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

import Blogs from './components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900'>
      <div>
        <Navbar/>
        <Hero />
        <Blogs/>
      </div>
    </div>
  )
}

export default App
