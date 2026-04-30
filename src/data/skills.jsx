import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCloudUploadAlt,
  FaUserShield,
  FaLock,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiVite,
  SiMongoose,
} from "react-icons/si";
import { TbBrandVscode, TbApiApp } from "react-icons/tb";

// Hero "highlights" — featured stack icons shown above the CTAs
export const heroHighlights = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
];

// Full skill matrix — rendered as 3 cards in the Skills section
export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Axios", icon: <TbApiApp className="text-blue-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-sky-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "RESTful APIs", icon: <TbApiApp className="text-purple-400" /> },
      { name: "Mongoose (ODM)", icon: <SiMongoose className="text-red-400" size={30} /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "JWT", icon: <FaUserShield className="text-red-400" /> },
      { name: "bcrypt", icon: <FaLock className="text-yellow-400" /> },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Docker", icon: <FaDocker className="text-sky-400" /> },
      { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
      { name: "Netlify", icon: <FaCloudUploadAlt className="text-green-400" /> },
      { name: "MongoDB Compass", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL Workbench", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
];
