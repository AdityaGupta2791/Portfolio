import React from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'
import { motion } from 'framer-motion'

const Hero = () => {
  const skilledIn = [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  ]

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto overflow-hidden bg-[#0B0F19]"
    >
      
      {/* --- Main Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <p className="text-2xl tracking-wide">
          Hello<span className="text-orange-500">.</span>
        </p>

        <h1 className="text-5xl font-extrabold mt-2 pb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          I’m Aditya
        </h1>

        {/* Impactful Line */}
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          A <span className="text-orange-400 font-semibold">Full-Stack Developer </span>
          passionate about building elegant, efficient, and engaging web experiences 
          that blend creativity with powerful <span className="text-cyan-400 font-semibold">MERN</span> technologies.
        </p>

        {/* SkilledIn Icons */}
        <div className="flex justify-center gap-10 mt-8 mb-8 flex-wrap">
          {skilledIn.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-orange-400 transition-transform"
            >
              <div className="text-3xl">{s.icon}</div>
              <p className="text-xs">{s.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex gap-5 justify-center"
        >
          <button className="bg-orange-500 px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-orange-500/40 hover:bg-orange-600 transition">
            Let's Connect
          </button>
          <button className="border border-orange-500 px-6 py-2 rounded-lg font-medium shadow-md hover:bg-orange-500 hover:text-white hover:shadow-orange-500/40 transition">
            My Resume
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
