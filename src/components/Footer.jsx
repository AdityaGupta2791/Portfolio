import { personal } from "../data/personal";

const Footer = () => {
  return (
    <footer className="relative bg-base/80 backdrop-blur-md text-center">
      <div className="w-full h-[2px] mx-auto bg-gradient-to-r from-transparent via-accent to-transparent rounded-full shadow-glow-accent-soft animate-pulse" />
      <p className="text-sm text-gray-300 py-6">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer