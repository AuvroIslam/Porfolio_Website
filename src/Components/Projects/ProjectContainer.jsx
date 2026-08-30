import React from 'react'
import '../../Global.css'
import './ProjectContainer.css'
import Pill from '../Pill/Pill'
import mioImage from './mio_logo.jpg'
import knot3Image from './3knot3_Banner.png'
import bloodshotImage from './BloodShot.png'
import frostbyteImage from './FrostByte.png'
import nongorImage from './Nongor.png'
import fitAlarmlyImage from './fitAlarmly (2).png'
import deenQuestImage from './DeenQuest.png'
import balanceLoopImage from './Balance.png'
import toDoWidgetsImage from './TodoWidget.png'
import wasteRecognizerImage from './waste_recognition.jpg'
import olympicGdpImage from './olympic_gdp_chart.png'
import asterImage from './aster.png'

function ProjectContainer( { project } ) {
  const imageMap = {
    'Mio': mioImage,
    '3Knot3': knot3Image,
    'Bloodshot': bloodshotImage,
    'FrostByte Logistics Platform': frostbyteImage,
    'Nongor': nongorImage,
    'FitAlarmly': fitAlarmlyImage,
    'DeenQuest': deenQuestImage,
    'BalanceLoop': balanceLoopImage,
    'ToDoWidgets': toDoWidgetsImage,
    'Waste Recognizer': wasteRecognizerImage,
    'Olympic vs GDP': olympicGdpImage,
    'Aster': asterImage
  };

  return (
    <div className="project-container">
      <div className="project-image">
        <img src={imageMap[project.title] || 'https://placehold.co/350x230'} alt={project.title} />
      </div>
      <div className='content'>
      <div className="title-row">
        <h2>{project.title}</h2>
        {project.video && (
          <a href={project.video} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Pill content="📹 Promo Video" />
          </a>
        )}
      </div>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((technology) => (
          <Pill content={technology} />
        ))}
      </div>
      <div className="project-links">
        {project.github && <a className="p-link" href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
        {project.apk && <a className="p-link" href={project.apk} target="_blank" rel="noreferrer">APK</a>}
        {project.live && <a className="p-link" href={project.live} target="_blank" rel="noreferrer">Live Demo</a>}
        {project.link && !project.github && !project.live && <a className="p-link" href={project.link} target="_blank" rel="noreferrer">View Project</a>}
      </div>
    </div>
    </div>
  )
}

export default ProjectContainer
