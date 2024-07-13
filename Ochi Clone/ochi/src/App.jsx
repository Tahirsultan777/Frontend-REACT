// import React from 'react'

import About from "./components/About"
import Landingpage from "./components/Landingpage"
import Marquee from "./components/Marquee"
import Navbars from "./components/Navbars"


function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
        <Navbars/>
        <Landingpage/>
        <Marquee/>
        <About/>
    </div>
  )
}

export default App