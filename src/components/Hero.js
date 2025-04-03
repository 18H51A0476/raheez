import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaProjectDiagram, FaChalkboardTeacher } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden transition-colors duration-500 ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Background Elements */}
      <motion.div
        className={`absolute inset-0 transition-all duration-500 ${isDark ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" : "bg-gradient-to-br from-gray-200 via-white to-gray-300"} opacity-50 blur-[180px] -z-10`}
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

      {/* Hero Content */}
      <div className="relative z-10 px-6">
        <motion.h1
          className={`text-6xl md:text-8xl font-extrabold bg-gradient-to-r transition-all duration-500 ${isDark ? "from-purple-400 to-pink-500" : "from-blue-500 to-indigo-600"} text-transparent bg-clip-text drop-shadow-xl`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mohammed Raheez
        </motion.h1>
        <motion.p
          className={`text-lg md:text-2xl mt-5 font-medium tracking-wide transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Software Engineer | Full Stack Developer | AI Enthusiast
        </motion.p>
        <motion.p
          className={`text-base md:text-lg mt-3 italic transition-colors duration-500 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Building scalable, high-performance applications with cutting-edge technologies.
        </motion.p>
      </div>

      {/* Feature Icons */}
      <div className="flex flex-wrap justify-center gap-10 mt-14 relative z-10">
        {[
          { icon: FaCode, title: "Development", color: "text-yellow-400", skills: ["Full Stack & AI Integration", "MERN, Go, AWS"] },
          { icon: FaLaptopCode, title: "Tech Stack", color: "text-blue-400", skills: ["React, Tailwind, Docker", "Microservices & Cloud"] },
          { icon: FaProjectDiagram, title: "Projects", color: "text-green-400", skills: ["Scalable Web & Mobile Apps", "Cloud-Native Solutions"] },
          { icon: FaChalkboardTeacher, title: "Community", color: "text-red-400", skills: ["Tech Blogging & Mentorship", "Workshops & Open Source"] }
        ].map(({ icon: Icon, title, color, skills }, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 ${isDark ? "bg-white/10 backdrop-blur-md" : "bg-gray-50 shadow-xl"} hover:scale-110 hover:shadow-2xl`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
          >
            <Icon className={`text-6xl mb-4 ${color} drop-shadow-lg`} />
            <h3 className={`text-lg font-semibold transition-colors duration-500 ${isDark ? "text-gray-200" : "text-gray-800"}`}>{title}</h3>
            {skills.map((skill, idx) => (
              <p key={idx} className={`text-sm transition-colors duration-500 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{skill}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;