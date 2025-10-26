import React from 'react'
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Divider from "./components/Divider.jsx"

export default function App() {

  return (
    <div className="bg-[#0d1117] text-white font-[Inter]">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
    </div>
  )
}