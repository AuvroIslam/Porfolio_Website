import React from 'react'
import '../../Global.css'
import './Experience.css'
import Timeline from '../Timeline/Timeline'

function Experience() {
  return (
    <div className="experience">
        <h1 className='heading'>Experience</h1>
        <Timeline events={[
            {
                date: "Jan 2025 - May 2025",
                title: "Geeky Solutions - Intern, Unity Game Developer",
                description: "Remote | 4 Months - Completed a hands-on internship building a full Unity game, adding gameplay features, UI elements, animations, and level improvements."
            },
            {
                date: "Aug 2025 - Nov 2025",
                title: "Ostad - Teaching Assistant, React Native",
                description: "Remote - Support learners on an Edtech platform by teaching core React Native ideas, reviewing code, and guiding them through mobile development tasks."
            }
        ]} />
    </div>
  )
}

export default Experience
