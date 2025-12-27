import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';
import './Global.css';

function App(card) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  const heroProps = {
    name: "Oitijya Islam Auvro",
    role: "Computer Science & Engineering Student",
    description: "A third-year Computer Science and Engineering student at KUET with a strong passion for web development, data science, and Unity game development. I enjoy creating dynamic, interactive websites and leveraging data-driven insights to solve real-world problems.",
    email: "oitijya2002@gmail.com",
    mobile: "01575094617",
    linkedin: "https://www.linkedin.com/in/oitijya-islam-auvro-a252a5325/",
    github: "https://github.com/AuvroIslam",
    resume: "/Oitijya_Islam_Auvro_CV.pdf"
  };

  const skillsProps = {
    programming_languages: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    web_technologies: ["HTML", "CSS", "React", "Next.js", "React Router"],
    frameworks: ["Tailwind CSS", "DaisyUI", "Shadcn UI"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: ["Git", "Android Studio", "Tableau Public", "VS Code"],
    app_development: ["React Native (Expo)", "Android Studio"],
    data_science: ["Pandas", "Matplotlib", "Fast.ai", "Selenium"]
  };

  const projectsProps = {
    projects: [
      {
        title: "Mio",
        description: "Created a React Native and Expo application that connects users based on their favorite TV shows and movies. Facilitates connections among entertainment enthusiasts and helps them discover like-minded individuals.",
        technologies: ["React Native", "Expo", "TypeScript"],
        github: "https://github.com/AuvroIslam/Mio-typeScript-",
        live: "https://play.google.com/store/apps/details?id=com.mioapp.social&hl=en",
        video: "https://www.facebook.com/watch/?v=1234744761338742"
      },
      {
        title: "Waste Recognition Model",
        description: "Developed a deep learning model for waste classification using Fast.ai and Hugging Face. Deployed it on Hugging Face with a web application built using HTML, CSS, and JavaScript.",
        technologies: ["Python", "Fast.ai", "Hugging Face", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/AuvroIslam/wasteRecognizer",
        live: "https://auvroislam.github.io/wasteRecognizer/"
      },
      {
        title: "GDP vs. Olympic Performance",
        description: "Explored the correlation between GDP and Olympic achievements utilizing Tableau Dashboards. Created and launched an interactive React website to showcase the findings.",
        technologies: ["React", "Tableau", "Data Visualization"],
        github: "https://github.com/AuvroIslam/Olympic_vs_Gdp",
        live: "https://olympic-vs-gdp-website.vercel.app"
      },
      {
        title: "3Knot3",
        description: "Developed a top-down 3D action game inspired by the 7 Bir Sreshtho (heroes) from the 1971 Bangladesh Liberation War. Designed and built in Unity with C#, featuring unique abilities and levels reflecting each hero's legacy.",
        technologies: ["Unity", "C#", "Game Development"],
        github: "https://github.com/Learnathon-By-Geeky-Solutions/studio71",
        live: "https://studio-71.itch.io/echoes-of-71",
        video: "https://www.facebook.com/share/v/1CdAbhr8m9/"
      }
    ]
  };

  return (
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <button className="mode-toggle" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
        <Header name="Oitijya Islam Auvro" />
        <Hero {...heroProps} />
        <Skills {...skillsProps} />
        <Projects {...projectsProps} />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
