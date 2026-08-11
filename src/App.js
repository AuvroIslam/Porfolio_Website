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
import Achievements from './Components/Achievements/Achievements';
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
    description: "I am a fourth-year Computer Science and Engineering student at KUET, passionate about mobile app development, AI, and DevOps. I love building impactful mobile applications, integrating intelligent AI features, and creating scalable, automated deployment workflows using modern cloud technologies.",
    email: "oitijya2002@gmail.com",
    mobile: "01575094617",
    linkedin: "https://www.linkedin.com/in/oitijya-islam-auvro-a252a5325/",
    github: "https://github.com/AuvroIslam",
    resume: "/Oitijya Islam Auvro_CV.pdf"
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
        description: "Created a React Native and Expo application that connects users based on their favorite Anime and K-dramas. Facilitates connections among entertainment enthusiasts and helps them discover like-minded individuals. Achieved 10,000+ downloads on Play Store.",
        technologies: ["React Native", "Expo", "TypeScript"],
        github: "https://github.com/AuvroIslam/Mio-typeScript-",
        live: "https://play.google.com/store/apps/details?id=com.mioapp.social&hl=en",
        video: "https://www.facebook.com/watch/?v=1234744761338742"
      },
      {
        title: "Nongor",
        description: "Offline AI flood companion for Bangladesh. Phone-to-phone SOS, shelter routing, first aid, and emergency translation for six languages—powered by on-device Gemma 4. No internet required.",
        technologies: ["Kotlin", "Gemma 4", "Offline AI"],
        github: "https://github.com/AuvroIslam/Nongor",
        live: "https://drive.google.com/file/d/1af8fL-YRcx70QRs9BCzoBBnNbIbghsjY/view?usp=drive_link",
        video: "https://youtu.be/9GsZ_ATN0ZQ"
      },
      {
        title: "FitAlarmly",
        description: "An alarm app you dismiss by doing exercise or solving math. The camera counts your reps live using Google ML Kit pose detection. Built with React Native and a custom Kotlin alarm module.",
        technologies: ["React Native", "TypeScript", "Kotlin", "Google ML Kit"],
        github: "https://github.com/AuvroIslam/FitAlarmly",
        live: "https://drive.google.com/file/d/1-Xp5B-PM4ITskeFS9VFqWi9tjU4uEgg9/view?usp=sharing"
      },
      {
        title: "DeenQuest",
        description: "A Duolingo-style mobile and web app for building a daily Quran habit. Features guided recitation lessons, streak recovery, mood-based ayahs, and full Quran.com sync via OAuth2.",
        technologies: ["React Native", "Expo", "TypeScript", "Next.js", "Firebase"],
        github: "https://github.com/AuvroIslam/DeenQuestMobileApp",
        live: "https://quran-hackathon-omega.vercel.app/"
      },
      {
        title: "Bloodshot",
        description: "A fast-paced action game where every bullet costs health. Play as a goblin and fight for your survival against waves of human soldiers.",
        technologies: ["Unity", "C#", "Game Development"],
        github: "https://github.com/AuvroIslam/BloodShot",
        live: "https://auvro-islam.itch.io/bloodshot",
        video: "https://youtu.be/bQRioChJImM?si=CB3LfQxl1ddhc8Q5"
      },
      {
        title: "FrostByte Logistics Platform",
        description: "Cloud-native logistics platform built with microservices and DevOps workflows. Features service health monitoring, observability dashboards, and CI/CD pipelines.",
        technologies: ["Microservices", "DevOps", "Cloud-Native", "CI/CD"],
        github: "https://github.com/Nafiz001/logarithm-warehouse",
        live: "http://40.81.240.99/"
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
  const achievementsProps = {
    achievements: [
      {
        title: "Champion",
        event: "Build with Gemma Hackathon 2026"
      },
      {
        title: "Champion",
        event: "KUET FirstByte Datathon 2026"
      },
      {
        title: "Champion",
        event: "July Hackathon 2026 (Crisis Track) - JRA Foundation"
      },
      {
        title: "2nd Runners-Up",
        event: "Microservices & DevOps Hackathon - BUET CSE Fest 2026"
      },
      {
        title: "2nd Runners-Up",
        event: "Techathon Nationals & Rover Summit Hackathon - IUT Robotics Society 2025"
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
        <Achievements {...achievementsProps} />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
