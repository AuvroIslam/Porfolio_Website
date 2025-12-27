import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
        <Timeline events={[
            {
            date: "Jan 2023 - Present",
            title: "Bachelor of Science in Computer Science and Engineering",
            description: "Khulna University of Engineering & Technology (KUET) - 3rd Year Student - Current CGPA: 3.63"
            }
        ]} />
    </div>
  )
}

export default Education
