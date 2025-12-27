import React from 'react'
import '../../Global.css'
import './ProjectContainer.css'
import Pill from '../Pill/Pill'
import mioImage from './mio_logo.jpg'
import wasteImage from './waste_recognition.jpg'
import olympicImage from './olympic_gdp_chart.png'
import knot3Image from './3knot3_Banner.png'

function ProjectContainer( { project } ) {
  const imageMap = {
    'Mio': mioImage,
    'Waste Recognition Model': wasteImage,
    'GDP vs. Olympic Performance': olympicImage,
    '3Knot3': knot3Image
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
            <Pill content="Promotional Video" />
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
        {project.live && <a className="p-link" href={project.live} target="_blank" rel="noreferrer">Live Demo</a>}
        {project.link && !project.github && !project.live && <a className="p-link" href={project.link} target="_blank" rel="noreferrer">View Project</a>}
      </div>
    </div>
    </div>
  )
}

export default ProjectContainer
