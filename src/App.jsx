import React from 'react'
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"

export default function App() {

  return (
    <div className="bg-[#0d1117] text-white font-[Inter]">
      <Navbar />
      <Hero />
    </div>
  )
}