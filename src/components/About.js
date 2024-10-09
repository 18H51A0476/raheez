// src/components/About.js
import { useTheme } from "../ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-12 flex flex-col items-center relative ${
        theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-900 text-white"
      } overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-600 opacity-20 blur-md animate-pulse"></div>
      <div className="container mx-auto text-center px-4 relative z-10">
        <h2
          className={`text-6xl font-extrabold mb-6 ${
            theme === "light" ? "text-gray-800" : "text-gray-200"
          } font-cursive`}
        >
          About Me
        </h2>
        <p
          className={`text-lg mb-4 leading-relaxed ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Hey there! I'm{" "}
          <span className="font-bold text-indigo-600">Mohammed Raheez</span>, a
          passionate developer and instructor.
        </p>
        <p
          className={`text-lg mb-4 leading-relaxed ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          I thrive on building innovative solutions, combining my love for
          coding with my enthusiasm for teaching budding developers.
        </p>
        <h3
          className={`text-4xl font-bold mb-4 ${
            theme === "light" ? "text-gray-800" : "text-gray-200"
          }`}
        >
          Key Skills
        </h3>
        <ul
          className={`list-disc text-lg mb-6 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          } text-left mx-auto max-w-2xl`}
        >
          {[
            "🌐 Full Stack MERN Development",
            "🔧 Robust API Development",
            "📱 Mobile App Push Notifications",
            "🛠️ Proficient in C, C++, Java, JavaScript, and Python",
            "☁️ Experience with Docker and AWS",
          ].map((skill, index) => (
            <li
              key={index}
              className="mb-2 hover:underline transition duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
        <p
          className={`text-lg mb-4 leading-relaxed ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          My experience includes interning as a{" "}
          <span className="font-bold text-indigo-600">
            Java Full Stack Engineer
          </span>{" "}
          at Cognizant, where I honed my skills in professional development.
        </p>
        <p
          className={`text-lg mb-4 leading-relaxed ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          In a startup, I contributed as an SDE, exploring Docker and AWS to
          build scalable solutions while mentoring aspiring developers.
        </p>
        <div
          className={`border-t-2 border-gray-300 my-8 w-full ${
            theme === "light" ? "border-gray-400" : "border-gray-600"
          }`}
        />
        <p
          className={`text-lg mb-4 leading-relaxed ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          In a nutshell, I'm a multi-talented developer with a passion for
          innovation and a track record of creating exceptional software. I’m
          excited to explore new horizons and nurture the next generation of
          developers.
        </p>
      
        <div className="relative mt-8">
  <a
    href="https://linkedin.com/in/raheez"
    className={`relative inline-block text-center transition duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg ${
      theme === "light" ? "bg-black" : "bg-white text-gray-900"
    }`}
  >
    {/* Glowing animation */}
    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-75 rounded-lg filter blur-md animate-pulse"></span>
    <div className="rounded-lg py-4 px-6 relative z-10">
      <span className="font-cursive text-2xl">🌟 Let's Connect! 🌟</span>
    </div>
  </a>
</div>

      </div>
      <style jsx>{`
        .shining-effect {
          position: relative;
          padding: 10px 20px;
          border-radius: 5px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          display: inline-block;
          animation: shine 1s infinite linear;
        }

        .shining-text {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        @keyframes shine {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
