import { useTheme } from '../ThemeContext'; 
import { FaCode, FaLaptopCode, FaProjectDiagram, FaChalkboardTeacher } from 'react-icons/fa'; 

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={`h-screen flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}>
      <div className="text-center mb-6 px-4">
        <h1 className="text-4xl md:text-6xl font-bold animate-bounce bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Hi, I'm Mohammed Raheez
        </h1>
        <p className="text-lg md:text-2xl mt-4 font-light tracking-wide animate-fade-in">
          Software Developer and Instructor | PROBLEM SOLVING ENTHUSIAST
        </p>
        <p className="text-base md:text-xl mt-2 italic animate-fade-in">
          Lifelong Student | Versatile MERN & Java Full Stack Developer | Tech Enthusiast
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mt-6">
        {/* Expertise */}
        <div className="flex flex-col items-center text-center transition duration-300 transform hover:scale-110">
          <FaCode className="text-4xl mb-2 text-yellow-500 filter drop-shadow-glow animate-spin-slow" />
          <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">Expertise</h3>
          <p className="text-sm">Full Stack Development</p>
          <p className="text-sm">Java & MERN Stack</p>
        </div>

        {/* Skills */}
        <div className="flex flex-col items-center text-center transition duration-300 transform hover:scale-110">
          <FaLaptopCode className="text-4xl mb-2 text-blue-500 filter drop-shadow-glow animate-spin-slow" />
          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">Skills</h3>
          <p className="text-sm">AWS, React, Docker</p>
          <p className="text-sm">API Development</p>
        </div>

        {/* Projects */}
        <div className="flex flex-col items-center text-center transition duration-300 transform hover:scale-110">
          <FaProjectDiagram className="text-4xl mb-2 text-green-500 filter drop-shadow-glow animate-spin-slow" />
          <h3 className="text-lg font-semibold bg-gradient-to-r from-green-400 to-lime-500 text-transparent bg-clip-text">Projects</h3>
          <p className="text-sm">Scalable Applications</p>
          <p className="text-sm">Real-Time Systems</p>
        </div>

        {/* Mentoring */}
        <div className="flex flex-col items-center text-center transition duration-300 transform hover:scale-110">
          <FaChalkboardTeacher className="text-4xl mb-2 text-red-500 filter drop-shadow-glow animate-spin-slow" />
          <h3 className="text-lg font-semibold bg-gradient-to-r from-red-400 to-pink-500 text-transparent bg-clip-text">Mentoring</h3>
          <p className="text-sm">Helping Budding Developers</p>
          <p className="text-sm">Building Solutions</p>
        </div>
      </div>

      {/* Stylish and Animated Hire Me Button */}
      <a
        href="#contact"
        className={`relative mt-8 inline-block py-4 px-8 rounded-lg font-semibold transition duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg ${
          theme === 'light' ? 'bg-black' : 'bg-white text-gray-900'
        }`}
      >
        {/* Glowing animation */}
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-400 to-purple-600 opacity-75 rounded-lg filter blur-md animate-pulse"></span>
        <span className="relative z-10">Hire Me</span>
      </a>
    </section>
  );
};

export default Hero;
