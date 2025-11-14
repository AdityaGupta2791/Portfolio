import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#0D1117]/80 backdrop-blur-md text-center">
      <div className="w-full h-[2px] mx-auto bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full shadow-[0_0_12px_rgba(251,146,60,0.35)] animate-pulse" />
      <p className="text-sm text-gray-300 py-6">
          © {new Date().getFullYear()} Aditya Gupta. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer