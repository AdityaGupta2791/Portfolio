import React from "react";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: <Code2 className="text-orange-400" size={26} />,
      title: "Clean & Scalable Code",
      desc: "I focus on writing modular, maintainable, and high-performance code that scales effortlessly.",
    },
    {
      icon: <Lightbulb className="text-cyan-400" size={26} />,
      title: "Creative Problem Solving",
      desc: "I enjoy translating ideas into elegant technical solutions through critical thinking and experimentation.",
    },
    {
      icon: <Users className="text-orange-400" size={26} />,
      title: "Collaboration & Adaptability",
      desc: "Strong communicator who loves working in teams, learning fast, and adapting to evolving tech stacks.",
    },
  ];

  return (
    <section
      id="about"
      className="relative px-6 py-24 max-w-6xl mx-auto text-center md:text-left min-h-[100vh]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent text-center md:text-left"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0 text-lg"
      >
        My journey into tech began out of curiosity. What started as experimenting with basic websites soon turned into a deep interest in full-stack development. Over time, I found joy in solving problems, learning new things, and turning ideas into real, impactful products that give me a deep sense of satisfaction.
      </motion.p>

      {/* --- Strengths Grid --- */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
        {strengths.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-[#0D1117]/80 backdrop-blur-md border border-gray-700 p-6 rounded-2xl shadow-lg hover:border-orange-400/60 transition-smooth"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              {item.icon}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
