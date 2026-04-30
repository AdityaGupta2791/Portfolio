import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { navItems } from "../data/nav";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-base/90 backdrop-blur-md border-2 border-gray-700 text-white rounded-full px-8 py-3 flex items-center justify-between gap-20 shadow-lg z-50 transition-all duration-500 hover:shadow-glow-accent">
      {/* Left side - Nav items */}
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative cursor-pointer font-medium px-3 py-1 text-gray-300 hover:text-accent transition-colors"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {item}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              whileHover={{
                borderColor: "var(--color-accent)",
                transition: { duration: 0.4 },
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* Right side - Theme toggle */}
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={darkMode}
        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-600 hover:border-accent transition-colors"
      >
        {darkMode ? (
          <Sun className="text-accent" size={22} aria-hidden="true" />
        ) : (
          <Moon className="text-gray-300" size={22} aria-hidden="true" />
        )}
      </button>
    </nav>
  );
};

export default Navbar