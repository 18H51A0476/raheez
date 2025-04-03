import { useTheme } from "../ThemeContext";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaToolbox, FaCogs, FaNetworkWired, FaLinux, FaServer } from "react-icons/fa";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "AWS",
  "Python",
  "C++",
  "MongoDB",
  "MySQL",
  "Core Java",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Data Structures",
  "Algorithms",
  "MERN Stack",
  "Java Full Stack",
  "TypeScript",
  "Problem Solving",
  "Instructor",
  "Mentor",
  "DevOps",
  "Go Lang",
  "Kubernetes",
  "Data Plane",
  "Control Plane",
  "Operating Systems",
  "Networking",
  "Linux"
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-16 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden shadow-xl rounded-2xl ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900"
          : "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
      }`}
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-12 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
      >
        My Skills
      </h2>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.6 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center justify-center text-lg font-semibold p-5 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden ${
              theme === "light"
                ? "bg-white text-gray-900 hover:bg-gray-200"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {index % 7 === 0 ? <FaCode className="mr-2 text-blue-500" /> : null}
            {index % 7 === 1 ? <FaDatabase className="mr-2 text-green-500" /> : null}
            {index % 7 === 2 ? <FaCloud className="mr-2 text-yellow-500" /> : null}
            {index % 7 === 3 ? <FaToolbox className="mr-2 text-pink-500" /> : null}
            {index % 7 === 4 ? <FaCogs className="mr-2 text-red-500" /> : null}
            {index % 7 === 5 ? <FaNetworkWired className="mr-2 text-indigo-500" /> : null}
            {index % 7 === 6 ? <FaLinux className="mr-2 text-gray-500" /> : null}
            <span>{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
