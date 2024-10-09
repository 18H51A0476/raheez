// src/components/Footer.js
import { useTheme } from '../ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import "./Footer.css";
const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-6 text-center ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-white'}`}>
      <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} font-cursive`}>
        &copy; 2024 Mohammed Raheez. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center space-x-8">
        <a
          href="https://github.com/18h51a0476"
          className={`relative flex items-center transition duration-300 transform hover:scale-110 ${theme === 'light' ? 'text-indigo-600' : 'text-white'}`}
        >
          <FaGithub className="text-2xl mr-1 glow" />
          <span className={`font-cursive ${theme === 'light' ? 'text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-gray-300'} glow-text`}>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/raheez"
          className={`relative flex items-center transition duration-300 transform hover:scale-110 ${theme === 'light' ? 'text-indigo-600' : 'text-white'}`}
        >
          <FaLinkedin className="text-2xl mr-1 glow" />
          <span className={`font-cursive ${theme === 'light' ? 'text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-gray-300'} glow-text`}>LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/mohammed_raheez"
          className={`relative flex items-center transition duration-300 transform hover:scale-110 ${theme === 'light' ? 'text-indigo-600' : 'text-white'}`}
        >
          <FaTwitter className="text-2xl mr-1 glow" />
          <span className={`font-cursive ${theme === 'light' ? 'text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-gray-300'} glow-text`}>Twitter</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
