import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'

function Projects({ projects = [] }) {
  const groupedProjects = projects.reduce((acc, project) => {
    const category = project.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(project)
    return acc
  }, {})

  const categoryOrder = ['Mobile Apps', 'AI/ML', 'DevOps', 'Games', 'Other']
  const sortedCategories = categoryOrder.filter(cat => groupedProjects[cat])

  return (
    <div className="projects">
      <h1 className='heading'>Projects</h1>
      {sortedCategories.map((category) => (
        <div key={category}>
          <h2 className='category-heading'>{category}</h2>
          <div className="projects-description">
            {groupedProjects[category].map((project, index) => (
              <ProjectContainer key={index} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
