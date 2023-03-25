import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App
