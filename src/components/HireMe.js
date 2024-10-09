// src/components/HireMe.js
import { useTheme } from '../ThemeContext';

const HireMe = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className={`py-12 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
      <div className="container mx-auto text-center">
        <h2 className={`text-6xl font-extrabold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-gray-200'} font-cursive`}>
          Interested in Working with Me?
        </h2>
        <p className={`text-lg mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-400'} font-cursive`}>
          I'm available for freelance projects or full-time work. Feel free to reach out!
        </p>
        <a
          href="mailto:mraheez32@gmail.com"
          className={`bg-white text-indigo-600 py-3 px-8 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 relative overflow-hidden`}
        >
          {/* Glowing effect */}
          <span className="absolute top-0 left-0 w-full h-full bg-indigo-500 opacity-50 rounded-lg filter blur-md animate-pulse"></span>
          <span className="relative z-10">Hire Me</span>
        </a>
        <div className="mt-6">
          <p className={`text-lg mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-400'} font-cursive`}>
            Let's connect on LinkedIn!
          </p>
          <a
            href="https://www.linkedin.com/in/raheez"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-indigo-600 font-semibold hover:underline transition duration-300`}
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
