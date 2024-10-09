// src/components/About.js
import { useTheme } from '../ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-12 flex flex-col items-center ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}
    >
      <div className="container mx-auto text-center px-4">
        <h2
          className={`text-6xl font-extrabold mb-6 ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'} font-cursive`}
        >
          About Me
        </h2>
        <p className={`text-lg mb-4 leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          Hey there! I'm <span className="font-bold text-indigo-600">Mohammed Raheez</span>, a passionate developer and instructor.
        </p>
        <p className={`text-lg mb-4 leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          I thrive on building innovative solutions, combining my love for coding with my enthusiasm for teaching budding developers.
        </p>
        <h3 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
          Key Skills
        </h3>
        <ul className={`list-disc text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} text-left mx-auto max-w-2xl`}>
          <li className="mb-2">🌐 Full Stack MERN Development</li>
          <li className="mb-2">🔧 Robust API Development</li>
          <li className="mb-2">📱 Mobile App Push Notifications</li>
          <li className="mb-2">🛠️ Proficient in C, C++, Java, JavaScript, and Python</li>
          <li className="mb-2">☁️ Experience with Docker and AWS</li>
        </ul>
        <p className={`text-lg mb-4 leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          My experience includes interning as a <span className="font-bold text-indigo-600">Java Full Stack Engineer</span> at Cognizant, where I honed my skills in professional development.
        </p>
        <p className={`text-lg mb-4 leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          In a startup, I contributed as an SDE, exploring Docker and AWS to build scalable solutions while mentoring aspiring developers.
        </p>
        <div className={`border-t-2 border-gray-300 my-8 w-full ${theme === 'light' ? 'border-gray-400' : 'border-gray-600'}`} />
        <p className={`text-lg mb-4 leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          In a nutshell, I'm a multi-talented developer with a passion for innovation and a track record of creating exceptional software. I’m excited to explore new horizons and nurture the next generation of developers.
        </p>
      </div>
    </section>
  );
};

export default About;
