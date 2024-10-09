// src/components/Skills.js
import { useTheme } from "../ThemeContext";

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
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`py-12 ${
        theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="container mx-auto text-center px-4">
        <h2
          className={`text-6xl font-extrabold mb-8 ${
            theme === "light" ? "text-gray-800" : "text-gray-200"
          }`}
        >
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`bg-opacity-90 rounded-lg py-4 px-6 shadow-lg transition-transform transform hover:scale-105 ${
                theme === "light"
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              <span className="font-semibold">{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
