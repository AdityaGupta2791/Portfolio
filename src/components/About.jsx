import React from "react";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
      className="relative px-6 py-24 max-w-6xl mx-auto text-center min-h-[100vh]"
    >
      {/* --- Title --- */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-orange-400 mb-3"
      >
        About Me
      </motion.h2>

      {/* --- Journey Paragraph --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg mb-14"
      >
        My journey into tech began with curiosity — what started as experimenting with simple
        websites soon turned into a love for full-stack development. I enjoy building
        real-world solutions, learning continuously, and turning ideas into products that make
        an impact.
      </motion.p>

      {/* --- Strengths Grid --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.05 },
          },
        }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {strengths.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-[#0D1117]/70 backdrop-blur-md border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-400 transition-smooth"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-200">{item.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
