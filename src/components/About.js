import { useTheme } from "../ThemeContext";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaTools, FaBuilding, FaLaptopCode, FaRocket } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-20 flex flex-col items-center relative overflow-hidden transition-colors duration-500 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.div
        className={`absolute inset-0 transition-all duration-500 ${isDark ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" : "bg-gradient-to-br from-gray-100 via-white to-gray-200"} opacity-50 blur-[180px] -z-10`}
      />
      <motion.div
        className={`absolute w-80 h-80 transition-all duration-500 ${isDark ? "bg-gradient-to-br from-purple-500 to-pink-600" : "bg-gradient-to-br from-blue-300 to-indigo-400"} opacity-50 rounded-full -top-24 -left-24`}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className={`absolute w-52 h-52 transition-all duration-500 ${isDark ? "bg-gradient-to-br from-blue-500 to-indigo-700" : "bg-gradient-to-br from-yellow-300 to-orange-400"} opacity-50 rounded-full -bottom-24 -right-24`}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto text-center px-6 relative z-10">
        <h2 className={`text-6xl font-extrabold mb-6 bg-gradient-to-r transition-all duration-500 ${isDark ? "from-purple-400 to-pink-500" : "from-blue-500 to-indigo-600"} text-transparent bg-clip-text drop-shadow-xl`}>
          About Me
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Hey there! I'm <span className="font-bold text-indigo-600 dark:text-indigo-400">Mohammed Raheez</span>, a passionate developer and instructor.
        </p>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {[
            { icon: <FaLightbulb className="text-yellow-500 text-3xl" />, text: "I thrive on building innovative solutions, combining my love for coding with my enthusiasm for teaching budding developers." },
            { icon: <FaCode className="text-blue-500 text-3xl" />, text: "Skilled in full-stack development, specializing in modern web technologies." },
            { icon: <FaTools className="text-red-500 text-3xl" />, text: "Proficient in C, C++, Java, JavaScript, and Python, with hands-on experience in Docker and AWS." },
            { icon: <FaBuilding className="text-green-500 text-3xl" />, text: "Worked as a Java Full Stack Engineer Intern at Cognizant, honing professional development skills." },
            { icon: <FaLaptopCode className="text-purple-500 text-3xl" />, text: "Mentor and educator, guiding aspiring developers while building scalable solutions in a startup." },
            { icon: <FaRocket className="text-orange-500 text-3xl" />, text: "Always eager to explore and implement cutting-edge technologies in modern development." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-2xl transition-transform transform hover:scale-105 ${isDark ? "bg-white/10 text-white" : "bg-gray-100 text-gray-900"}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {item.icon}
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className={`border-t-2 my-8 w-full ${isDark ? "border-gray-600" : "border-gray-400"}`} />
        <p className="text-lg mb-6 leading-relaxed">
          In a nutshell, I'm a multi-talented developer with a passion for innovation and a track record of creating exceptional software. I’m
          excited to explore new horizons and nurture the next generation of developers.
        </p>
        <motion.div className="relative mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }}>
          <a
            href="https://linkedin.com/in/raheez"
            className="relative inline-block text-center py-4 px-6 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transform transition duration-300 hover:scale-105"
          >
            🌟 Let's Connect! 🌟
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;