import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';

const HireMe = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-20 text-center relative overflow-hidden transition-colors duration-500 shadow-2xl rounded-2xl border ${isDark ? 'bg-gray-900 text-white border-gray-700' : 'bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 border-gray-200'}`}
    >
      {/* Background Elements */}
      <motion.div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-100 via-white to-gray-200'} opacity-50 blur-[180px] -z-10`} />
      
      <div className="container mx-auto relative z-10 px-6">
        <h2 className={`text-6xl font-extrabold mb-6 bg-gradient-to-r transition-all duration-500 ${isDark ? 'from-purple-400 to-pink-500' : 'from-blue-500 to-indigo-600'} text-transparent bg-clip-text drop-shadow-xl`}>
          Interested in Working with Me?
        </h2>
        <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          I'm available for freelance projects or full-time work. Feel free to reach out!
        </p>
        
        {/* Hire Me Button */}
        <motion.a
          href="mailto:mraheez32@gmail.com"
          className="relative inline-block text-center py-4 px-8 text-lg font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg transform transition duration-300 hover:scale-105 overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-indigo-500 opacity-30 rounded-lg blur-md animate-pulse" />
          <span className="relative z-10">Hire Me</span>
        </motion.a>
        
        <div className="border-t-2 my-8 w-full mx-auto max-w-md ${isDark ? 'border-gray-600' : 'border-gray-400'}" />
        
        {/* LinkedIn Link */}
        <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Let's connect on LinkedIn!</p>
        <motion.a
          href="https://www.linkedin.com/in/raheez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 font-semibold hover:underline transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Connect with me
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HireMe;