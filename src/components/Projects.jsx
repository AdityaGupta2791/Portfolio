import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const projects = [
    {
      title: "Fullstack E-com Website",
      desc: "Developed a fullstack e-commerce website with user authentication, product listings, and shopping cart functionality.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      img: "/Ecom.png",
      code: "https://github.com/AdityaGupta2791/Full-stack-E-com-Website",
      live: "https://github.com/AdityaGupta2791/Full-stack-E-com-Website",
    },
    {
      title: "Paytm-Like Payment System",
      desc: "Developed a payment system similar to Paytm with features like user authentication, transaction history, and payment gateway integration.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      img: "/payment.png",
      code: "https://github.com/AdityaGupta2791/Paytm-Like-Payment-System",
      live: "https://github.com/AdityaGupta2791/Paytm-Like-Payment-System",
    },
  ];

  return (
    <section id="projects" className="min-h-[100vh] px-6 py-28 max-w-6xl mx-auto text-center">
      {/* --- Title --- */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-orange-400"
      >
        Projects
        <p className="text-gray-300 text-lg mb-14">
          A showcase of projects that reflect my growth and passion
        </p>
      </motion.h2>

      {/* --- Projects Grid --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 text-left"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-[#0D1117]/70 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-400"
          >
            {/* Image (60%) */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-60 md:h-64 object-cover border-b border-gray-700"
            />

            {/* Details (40%) */}
            <div className="px-6 py-2">
              <h3 className="text-xl font-semibold text-gray-200">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed mt-1 mb-2">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#161b22]/60 text-gray-300 px-2 py-1 rounded-lg border border-gray-700 hover:border-orange-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-orange-500 px-4 py-2 rounded-md text-black font-semibold bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_20px_rgba(255,140,0,0.25)] hover:shadow-[0_0_30px_rgba(255,140,0,0.45)]"
                >
                  <FaGithub size={15} /> Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-md font-semibold border-2 border-orange-400 backdrop-blur-sm"
                >
                  <ExternalLink size={15} /> Live
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects
