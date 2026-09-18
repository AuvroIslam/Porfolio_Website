import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'

const MAX_PER_ROW = 3

function splitIntoBalancedRows(items, maxPerRow = MAX_PER_ROW) {
  const rowCount = Math.ceil(items.length / maxPerRow)
  const baseSize = Math.floor(items.length / rowCount)
  const extra = items.length % rowCount

  const rows = []
  let index = 0
  for (let row = 0; row < rowCount; row++) {
    const size = baseSize + (row < extra ? 1 : 0)
    rows.push(items.slice(index, index + size))
    index += size
  }
  return rows
}

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
          {splitIntoBalancedRows(groupedProjects[category]).map((row, rowIndex) => (
            <div className="projects-description" key={rowIndex}>
              {row.map((project, index) => (
                <ProjectContainer key={index} project={project} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Projects
