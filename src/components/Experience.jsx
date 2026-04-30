import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "CortexDynamics",
      period: "Dec 2024 – Mar 2025",
      desc: "Built the official corporate website using React.js and Tailwind CSS, enhancing the company’s online presence by ~25%. Engineered responsive and accessible UI sections including Navbar, Home, and Services. Built secure Login & Signup flows with optimized authentication logic, reducing user onboarding time by 30% while ensuring a smooth and consistent user experience.",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "Frontend Architecture"],
    },
    {
      role: "Web Developer Intern",
      company: "DentalHiFi",
      period: "Mar 2024 – Jun 2024",
      desc: "Developed the frontend of the company’s official website using React.js, increasing user engagement by 20%. Built responsive and modular UI components tailored for all device sizes. Collaborated closely with senior developers to streamline deployment workflows, resulting in a 30% improvement in overall website usability and performance.",
      skills: ["React.js", "JavaScript", "Responsive UI", "Component Design"],
    },
  ];

  return (
    <section 
      id="experience" 
      className="min-h-[100vh] px-6 py-28 max-w-6xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-orange-400"
      >
        Experience
        <p className="text-gray-300 text-lg mb-14">
          Journey of learning, building, and growing through hands-on projects
        </p>
      </motion.h2>

      <div className="relative flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="flex flex-col gap-10 w-full items-center"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative bg-[#0D1117]/70 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-left max-w-3xl ml-14 hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-400"
            >
              <div className="absolute -left-[2.15rem] top-7 flex flex-col items-center shadow-[0_0_10px_rgba(251,146,60,0.4)]">
                {/* Outlined circle marker */}
                <div className="absolute top-0 w-4 h-4 border-[2px] border-orange-400 rounded-full bg-[#0D1117]"></div>

                {/* Thin gradient line */}
                <div className="absolute top-5 w-[1.6px] -bottom-70 bg-gradient-to-b from-orange-400 to-orange-300/40"></div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-orange-400" />
                <h3 className="text-xl font-semibold text-gray-200">{exp.role}</h3>
              </div>
              <p className="text-lg text-gray-300 font-medium mb-2">{exp.company}</p>
              <p className="text-sm text-gray-300 mb-3">{exp.period}</p>
              <p className="text-gray-300 leading-relaxed mb-3">{exp.desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#161b22]/60 text-gray-300 px-2 py-1 rounded-lg border border-gray-700 hover:border-orange-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience
