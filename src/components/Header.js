// src/components/Header.js
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import {
  FaUserAlt,
  FaProjectDiagram,
  FaToolbox,
  FaPaperPlane,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full transition-all duration-500 ease-in-out ${
        theme === "light"
          ? "bg-gradient-to-r from-gray-200 to-white text-black shadow-lg"
          : "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-4xl font-cursive tracking-wide">Mohammed Raheez</h1>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="flex items-center transition duration-300 hover:text-gray-700"
          >
            <FaUserAlt className="mr-1" /> About
          </a>
          <a
            href="#skills"
            className="flex items-center transition duration-300 hover:text-gray-700"
          >
            <FaToolbox className="mr-1" /> Skills
          </a>
          <a
            href="#contact"
            className="flex items-center transition duration-300 hover:text-gray-700"
          >
            <FaPaperPlane className="mr-1" /> Hire Me
          </a>
          <button
            onClick={toggleTheme}
            className={`flex items-center px-4 py-2 rounded-md font-semibold transition duration-300 ${
              theme === "light"
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {theme === "light" ? (
              <FaMoon className="mr-2" />
            ) : (
              <FaSun className="mr-2" />
            )}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${
            theme === "light"
              ? "bg-gray-100 text-gray-800"
              : "bg-gray-900 text-white"
          } transition-all duration-500 ease-in-out`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#about"
              className={`flex items-center transition duration-300 hover:text-gray-700 ${
                theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700"
              }`}
            >
              <FaUserAlt className="mr-1" /> About
            </a>

            <a
              href="#skills"
              className={`flex items-center transition duration-300 hover:text-gray-700 ${
                theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700"
              }`}
            >
              <FaToolbox className="mr-1" /> Skills
            </a>
            <a
              href="#contact"
              className={`flex items-center transition duration-300 hover:text-gray-700 ${
                theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700"
              }`}
            >
              <FaPaperPlane className="mr-1" /> Hire Me
            </a>
            <button
              onClick={toggleTheme}
              className={`flex items-center px-4 py-2 rounded-md font-semibold transition duration-300 ${
                theme === "light"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {theme === "light" ? (
                <FaMoon className="mr-2" />
              ) : (
                <FaSun className="mr-2" />
              )}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
