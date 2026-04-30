import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { personal } from "./personal";

export const socials = [
  {
    icon: <FaEnvelope className="text-accent" size={26} />,
    title: "Email",
    desc: personal.email,
    link: `mailto:${personal.email}`,
  },
  {
    icon: <FaLinkedin className="text-accent" size={26} />,
    title: "LinkedIn",
    desc: "linkedin.com/in/adityagupta2791",
    link: "https://linkedin.com/in/adityagupta2791",
  },
  {
    icon: <FaGithub className="text-accent" size={26} />,
    title: "GitHub",
    desc: "github.com/adityagupta2791",
    link: "https://github.com/adityagupta2791",
  },
];
