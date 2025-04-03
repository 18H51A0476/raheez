import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { motion } from "framer-motion";
import { FaUserAlt, FaToolbox, FaPaperPlane, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 shadow-xl backdrop-blur-md bg-opacity-90 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.h1
          className={`text-3xl md:text-4xl font-extrabold tracking-wide relative cursor-pointer text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${
            theme === "dark" ? "from-purple-400 to-pink-500" : "from-blue-500 to-indigo-600"
          }`}
          whileHover={{ scale: 1.1 }}
        >
          Mohammed Raheez
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          {[
            { href: "#about", icon: <FaUserAlt />, label: "About" },
            { href: "#skills", icon: <FaToolbox />, label: "Skills" },
            { href: "#contact", icon: <FaPaperPlane />, label: "Hire Me" },
          ].map(({ href, icon, label }, idx) => (
            <motion.a
              key={idx}
              href={href}
              className={`flex items-center space-x-2 transition transform hover:scale-110 ${
                theme === "dark" ? "text-gray-100 hover:text-pink-500" : "text-gray-800 hover:text-indigo-600"
              }`}
              whileHover={{ x: 5 }}
            >
              <span className="text-inherit">{icon}</span>
              <span className="text-inherit">{label}</span>
            </motion.a>
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="flex items-center px-4 py-2 rounded-md transition-all duration-300 font-semibold shadow-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-indigo-500 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "light" ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button */}
      {/* Mobile Menu Toggle Button */}
<div className="md:hidden">
  <button 
    onClick={toggleMenu} 
    className={`text-3xl focus:outline-none transition-all duration-300 ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}
  >
    {isMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
</div>

      </nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.5 }}
        className={`md:hidden absolute top-full left-0 w-full flex flex-col items-center py-5 space-y-6 shadow-lg transition-all duration-500 ${
          theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800 shadow-md"
        }`}
      >
        {[
          { href: "#about", icon: <FaUserAlt />, label: "About" },
          { href: "#skills", icon: <FaToolbox />, label: "Skills" },
          { href: "#contact", icon: <FaPaperPlane />, label: "Hire Me" },
        ].map(({ href, icon, label }, idx) => (
          <motion.a
            key={idx}
            href={href}
            className={`flex items-center space-x-2 text-lg font-medium transition transform hover:scale-110 ${
              theme === "dark" ? "text-gray-100 hover:text-pink-500" : "text-gray-800 hover:text-indigo-600"
            }`}
            whileHover={{ x: 5 }}
          >
            <span className="text-inherit">{icon}</span>
            <span className="text-inherit">{label}</span>
          </motion.a>
        ))}

        {/* Theme Toggle Button for Mobile */}
        <motion.button
          onClick={toggleTheme}
          className="flex items-center px-4 py-2 rounded-md transition-all duration-300 font-semibold shadow-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-indigo-500 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === "light" ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
