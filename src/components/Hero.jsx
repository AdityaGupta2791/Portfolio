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
      className="relative flex flex-col items-center justify-center text-center px-6 min-h-[100vh] max-w-5xl mx-auto overflow-hidden bg-[#0D1117]"
    >
      {/* --- Animated Abstract Background Shapes --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/40 rounded-lg rotate-12 animate-float-slow" />
        <div className="absolute top-1/4 left-80 w-6 h-6 bg-cyan-400/30 rounded-full animate-float-fast" />
        <div className="absolute top-80 w-10 h-10 bg-gray-500/30 rounded-full animate-float-fast" />
        <div className="absolute bottom-50 left-1/6 w-10 h-10 bg-orange-400/25 rounded-md rotate-45 animate-float-slow" />
        <div className="absolute bottom-16 left-8 w-16 h-16 bg-cyan-400/30 rounded-full animate-float-medium" />

        {/* Right Shapes */}
        <div className="absolute top-12 right-10 w-20 h-20 bg-cyan-400/30 rounded-full animate-float-medium" />
        <div className="absolute top-1/4 right-1/8 w-8 h-8 bg-gray-400/30 rounded-md rotate-12 animate-float-fast" />
        <div className="absolute bottom-1/3 right-2 w-6 h-6 bg-orange-400/30 rounded-md animate-float-medium" />
        <div className="absolute bottom-1/5 right-1/4 w-10 h-10 bg-gray-500/25 rounded-full animate-float-medium" />
        <div className="absolute bottom-10 right-12 w-14 h-14 bg-orange-500/35 rounded-md rotate-12 animate-float-slow" />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <p className="text-3xl tracking-wide text-gray-200">
          Hello<span className="text-orange-500 font-bold">.</span>
        </p>


        <h1 className="text-5xl font-extrabold mt-2 pb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          I’m Aditya Gupta
        </h1>

        {/* Impactful Line */}
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          A <span className="text-orange-400 font-semibold">Full-Stack Developer </span>
          passionate about building elegant, efficient, and engaging web experiences 
          that blend creativity with powerful <span className="text-orange-400 font-semibold">MERN</span> technologies.
        </p>

        {/* SkilledIn Icons */}
        <div className="flex justify-center gap-10 mt-8 mb-8 flex-wrap">
          {skilledIn.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="flex flex-col items-center gap-1 text-gray-300 hover:text-orange-400 transition-smooth"
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
        className="flex gap-5 justify-center mt-4"
      >
        <a
          href="#contact"
          className="inline-block px-7 py-3 text-black text-lg font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_20px_rgba(255,140,0,0.25)] hover:shadow-[0_0_30px_rgba(255,140,0,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
        >
          Let’s Connect
        </a>

        <a
          href="https://drive.google.com/file/d/1H6cVdQtXQk9wzm5QuFJm3C1asnmQk_Ci/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 text-lg font-semibold rounded-xl border-2 border-orange-500/60 backdrop-blur-sm hover:border-orange-400 hover:scale-[1.03] active:scale-[0.98] transition-smooth duration-300"
        >
          My Resume
        </a>
      </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero
