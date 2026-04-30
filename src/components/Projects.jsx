import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { cardVariants, staggerContainer } from "../animations/variants";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import Button from "./ui/Button";

const Projects = () => {
  return (
    <Section id="projects" className="text-center">
      <SectionHeader
        title="Projects"
        subtitle="A showcase of projects that reflect my growth and passion"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.2)}
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 text-left"
      >
        {projects.map((p) => (
          <Card
            key={p.title}
            className="overflow-hidden"
            variants={cardVariants}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-60 md:h-64 object-cover border-b border-gray-700"
            />

            <div className="px-6 py-2">
              <h3 className="text-xl font-semibold text-gray-200">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed mt-1 mb-2">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                {p.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <Button
                  as={motion.a}
                  whileHover={{ scale: 1.05 }}
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                >
                  <FaGithub size={15} /> Code
                </Button>
                <Button
                  as={motion.a}
                  whileHover={{ scale: 1.05 }}
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  <ExternalLink size={15} /> Live
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
