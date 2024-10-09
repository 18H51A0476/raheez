// src/components/Footer.js
import { useTheme } from '../ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-6 text-center ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-white'}`}>
      <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
        &copy; 2024 Mohammed Raheez. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="https://github.com/18h51a0476" className={`flex items-center transition duration-300 ${theme === 'light' ? 'text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-gray-300'}`}>
          <FaGithub className="mr-1" /> GitHub
        </a>
        <a href="https://linkedin.com/in/raheez" className={`flex items-center transition duration-300 ${theme === 'light' ? 'text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-gray-300'}`}>
          <FaLinkedin className="mr-1" /> LinkedIn
        </a>
        <a href="https://twitter.com/mohammed_raheez" className={`flex items-center transition duration-300 ${theme === 'light' ? 'text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-gray-300'}`}>
          <FaTwitter className="mr-1" /> Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
