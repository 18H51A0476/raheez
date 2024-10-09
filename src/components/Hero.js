// src/components/Hero.js
import { useTheme } from '../ThemeContext'; // Importing the useTheme hook

const Hero = () => {
  const { theme } = useTheme(); // Using the theme from context

  return (
    <section className={`h-screen flex items-center justify-center transition-all duration-500 ease-in-out ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}>
      <div className="text-center">
        <h1 className="text-6xl font-bold">Hi, I'm Mohammed Raheez</h1>
        <p className="text-2xl mt-4">Software Developer and Instructor | PROBLEM SOLVING ENTHUSIAST</p>
        <p className="text-xl mt-2">Lifelong Student | Versatile MERN & Java Full Stack Developer | Tech Enthusiast</p>
        <a
          href="#contact"
          className={`mt-8 inline-block py-4 px-8 rounded-lg font-semibold transition duration-300 transform hover:scale-105 ${theme === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-gray-900 hover:bg-gray-200'}`}
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
