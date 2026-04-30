import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

const SkillCard = ({ title, skills }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="bg-[#0D1117]/70 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-400"
  >
    <h3 className="text-xl font-semibold text-gray-200 mb-4 text-center">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#161b22]/60 hover:bg-[#1e242e] border border-gray-700 hover:border-orange-400"
        >
          <div className="text-2xl">{skill.icon}</div>
          <p className="text-gray-300 font-medium">{skill.name}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="min-h-[100vh] px-6 py-28 max-w-6xl mx-auto text-center">
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
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} title={cat.title} skills={cat.skills} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills
