// src/components/HireMe.js
import { useTheme } from '../ThemeContext';

const HireMe = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className={`py-12 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
      <div className="container mx-auto text-center">
        <h2 className={`text-6xl font-extrabold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-gray-200'}`}>
          Interested in Working with Me?
        </h2>
        <p className={`text-lg mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-400'}`}>
          I'm available for freelance projects or full-time work. Feel free to reach out!
        </p>
        <a
          href="mailto:mraheez32@gmail.com"
          className={`bg-white text-indigo-600 py-3 px-8 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105`}
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default HireMe;
