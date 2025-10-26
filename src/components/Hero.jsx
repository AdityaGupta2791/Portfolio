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
      className="relative flex flex-col items-center justify-center text-center px-6 min-h-[100vh] max-w-5xl mx-auto overflow-hidden bg-[#0B0F19]"
    >
      {/* --- Animated Abstract Background Shapes --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Corner */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-orange-500/40 rounded-lg rotate-12 animate-float-slow" />
        <div className="absolute top-32 left-24 w-10 h-10 bg-gray-500/30 rounded-full animate-float-fast" />

        {/* Bottom Left */}
        <div className="absolute bottom-16 left-8 w-16 h-16 bg-cyan-400/30 rounded-full animate-float-medium" />
        <div className="absolute bottom-32 left-1/6 w-10 h-10 bg-orange-400/25 rounded-md rotate-45 animate-float-slow" />

        {/* Top Right */}
        <div className="absolute top-12 right-10 w-20 h-20 bg-cyan-400/30 rounded-full animate-float-medium" />
        <div className="absolute top-1/4 right-1/8 w-8 h-8 bg-gray-400/30 rounded-md rotate-12 animate-float-fast" />

        {/* Bottom Right */}
        <div className="absolute bottom-10 right-12 w-14 h-14 bg-orange-500/35 rounded-md rotate-12 animate-float-slow" />
        <div className="absolute bottom-1/5 right-1/4 w-10 h-10 bg-gray-500/25 rounded-full animate-float-medium" />

        {/* Mid Edges */}
        <div className="absolute top-1/3 left-2 w-6 h-6 bg-cyan-400/30 rounded-full animate-float-fast" />
        <div className="absolute bottom-1/3 right-2 w-6 h-6 bg-orange-400/30 rounded-md animate-float-medium" />

        {/* Tiny Dots */}
        <div className="absolute top-8 right-1/3 w-2 h-2 bg-orange-400/40 rounded-full animate-float-slow" />
        <div className="absolute bottom-12 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-float-medium" />
        <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-gray-400/40 rounded-full animate-float-fast" />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <p className="text-3xl tracking-wide">
          Hello<span className="text-orange-500">.</span>
        </p>

        <h1 className="text-5xl font-extrabold mt-2 pb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          I’m Aditya Gupta
        </h1>

        {/* Impactful Line */}
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
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
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-orange-400 transition-smooth"
            >
              <div className="text-3xl">{s.icon}</div>
              <p className="text-sm">{s.name}</p>
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
          <a
            href="#contact"
            className="inline-block bg-orange-500 px-6 py-2 rounded-lg font-medium text-lg shadow-md hover:shadow-orange-500/40 hover:bg-orange-600 transition"
          >
            Let's Connect
          </a>
          <a
            href="https://drive.google.com/file/d/1WNm5fkwWnNr9DUrtXQdFh2m0_7qsK8NQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-orange-500 px-6 py-2 rounded-lg font-medium text-lg shadow-md hover:bg-orange-500 hover:text-white hover:shadow-orange-500/40 transition"
          >
            My Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
