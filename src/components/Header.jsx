import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
      <h1 className="text-xl font-semibold hover:text-orange-400">Aditya Gupta</h1>
      <nav className="flex gap-8 text-sm">
        <a href="#home" className="text-base hover:text-orange-400">Home</a>
        <a href="#about" className="text-base hover:text-orange-400">About</a>
        <a href="#projects" className="text-base hover:text-orange-400">Projects</a>
        <a href="#contact" className="text-base hover:text-orange-400">Contacts</a>
      </nav>
    </div>
  )
}

export default Header