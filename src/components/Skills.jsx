import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { cardVariants, staggerContainer } from "../animations/variants";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

const SkillCard = ({ title, skills }) => (
  <Card className="p-6" variants={cardVariants}>
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
  </Card>
);

const Skills = () => {
  return (
    <Section id="skills" className="text-center">
      <SectionHeader
        title="Skills & Expertise"
        subtitle="Technologies and tools I use to bring my ideas to life"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.2)}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} title={cat.title} skills={cat.skills} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
