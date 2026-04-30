import { motion } from "framer-motion";
import { strengths } from "../data/strengths";
import { cardVariants, staggerContainer } from "../animations/variants";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

const About = () => {
  return (
    <Section id="about" className="text-center">
      <SectionHeader title="About Me" className="mb-3" />

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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.2, 0.05)}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {strengths.map((item) => (
          <Card key={item.title} className="p-6" variants={cardVariants}>
            <div className="flex items-center justify-center gap-3 mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-200">{item.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export default About;
