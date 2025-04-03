import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-6 text-center  transition-colors duration-500 shadow-lg rounded-2xl border ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-200 text-gray-900 border-gray-300'}`}
    >
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        &copy; 2024 Mohammed Raheez. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center space-x-8">
        <motion.a
          href="https://github.com/18h51a0476"
          className={`relative flex items-center transition duration-300 transform hover:scale-110 ${isDark ? 'text-white' : 'text-indigo-600'}`}
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub className="text-2xl mr-1" />
          <span className={`hover:underline ${isDark ? 'text-gray-300' : 'text-indigo-600'}`}>GitHub</span>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/raheez"
          className={`relative flex items-center transition duration-300 transform hover:scale-110 ${isDark ? 'text-white' : 'text-indigo-600'}`}
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin className="text-2xl mr-1" />
          <span className={`hover:underline ${isDark ? 'text-gray-300' : 'text-indigo-600'}`}>LinkedIn</span>
        </motion.a>
        <motion.a
          href="https://twitter.com/mohammed_raheez"
          className={`relative flex items-center transition duration-300 transform hover:scale-110 ${isDark ? 'text-white' : 'text-indigo-600'}`}
          whileHover={{ scale: 1.1 }}
        >
          <FaTwitter className="text-2xl mr-1" />
          <span className={`hover:underline ${isDark ? 'text-gray-300' : 'text-indigo-600'}`}>Twitter</span>
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;