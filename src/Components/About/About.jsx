import React from "react";
import "../../Global.css";
import "./About.css";
import Education from "./Education";
import Interests from "./Interests";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="about">
      <h1 className='heading'>About</h1>
      <div className="about-description">
        <Education />
        <Interests interests={["Web Development", "Data Science", "Unity Game Development", "Mobile Development", "Machine Learning", "Data Visualization", "React Native", "Deep Learning"]} />
        <Hobbies hobbies={["Playing Video Games", "Watching Movies", "Watching TV Shows", "Coding", "Building Interactive Websites", "Learning New Technologies"]} />
      </div>
    </div>
  );
}

export default About;
