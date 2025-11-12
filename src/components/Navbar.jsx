import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-[#0D1117]/90 dark:bg-[#0D1117]/90 backdrop-blur-md border-2 border-gray-700 text-white rounded-full px-8 py-3 flex items-center justify-between gap-20 shadow-lg z-50 transition-all duration-500 hover:shadow-[0_0_15px_#fb923c70]">
      {/* Left side - Nav items */}
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative cursor-pointer font-medium px-3 py-1 text-gray-300 hover:text-orange-400 transition-colors"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {item}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              whileHover={{
                borderColor: "#fb923c",
                transition: { duration: 0.4 },
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* Right side - Theme toggle */}
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-600 hover:border-orange-400 transition-colors"
      >
        {darkMode ? (
          <Sun className="text-orange-400" size={22} />
        ) : (
          <Moon className="text-gray-300" size={22} />
        )}
      </div>
    </nav>
  );
};

export default Navbar