import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../data/experience";
import { cardVariants, staggerContainer } from "../animations/variants";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

const Experience = () => {
  return (
    <Section id="experience" className="text-center">
      <SectionHeader
        title="Experience"
        subtitle="Journey of learning, building, and growing through hands-on projects"
      />

      <div className="relative flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.25)}
          className="flex flex-col gap-10 w-full items-center"
        >
          {experiences.map((exp) => (
            <Card
              key={`${exp.company}-${exp.period}`}
              className="p-6 text-left max-w-3xl ml-14"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div
                aria-hidden="true"
                className="absolute -left-[2.15rem] top-7 flex flex-col items-center shadow-glow-accent"
              >
                <div className="absolute top-0 w-4 h-4 border-[2px] border-accent rounded-full bg-base"></div>
                <div className="absolute top-5 w-[1.6px] -bottom-70 bg-gradient-to-b from-accent to-accent-soft/40"></div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-accent" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-heading">{exp.role}</h3>
              </div>
              <p className="text-lg text-body font-medium mb-2">{exp.company}</p>
              <p className="text-sm text-body mb-3">{exp.period}</p>
              <p className="text-body leading-relaxed mb-3">{exp.desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;
