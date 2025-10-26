import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub,
  FaDocker, FaCloudUploadAlt, FaUserShield, FaLock
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiMysql, SiNextdotjs, SiPostman,
  SiTailwindcss, SiVite, SiMongoose
} from "react-icons/si";
import { TbBrandVscode, TbApiApp } from "react-icons/tb";

const SkillCard = ({ title, skills }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="bg-[#0D1117]/70 backdrop-blur-md border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-400 transition-smooth"
  >
    <h3 className="text-xl font-semibold text-white mb-4 text-center">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#161b22]/60 hover:bg-[#1e242e] border border-gray-700 hover:border-orange-400 transition-smooth"
        >
          <div className="text-2xl">{skill.icon}</div>
          <p className="text-gray-300 font-medium">{skill.name}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const frontend = [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "Axios", icon: <TbApiApp className="text-blue-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-sky-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "RESTful APIs", icon: <TbApiApp className="text-purple-400" /> },
    { name: "Mongoose (ODM)", icon: <SiMongoose className="text-red-400" size={30} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "JWT", icon: <FaUserShield className="text-red-400" /> },
    { name: "bcrypt", icon: <FaLock className="text-yellow-400" /> },
  ];

  const others = [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Docker", icon: <FaDocker className="text-sky-400" /> },
    { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
    { name: "Netlify", icon: <FaCloudUploadAlt className="text-green-400" /> },
    { name: "MongoDB Compass", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL Workbench", icon: <SiMysql className="text-blue-500" /> },
  ];

  return (
    <section id="skills" className="min-h-[100vh] px-6 py-20 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-orange-400"
      >
        Skills & Expertise
        <p className="text-gray-300 text-lg mb-14">
          Technologies and tools I use to bring my ideas to life
        </p>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <SkillCard title="Frontend" skills={frontend} />
        <SkillCard title="Backend" skills={backend} />
        <SkillCard title="Others" skills={others} />
      </motion.div>
    </section>
  );
};

export default Skills;
