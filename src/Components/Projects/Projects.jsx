import React, { useState, useEffect } from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'

// Card min-width (300px) + gap (20px) determine how many columns actually
// fit at a given viewport width, matching the breakpoints in Projects.css.
function getColumnsForWidth(width) {
  if (width >= 1180) return 3
  if (width >= 760) return 2
  return 1
}

function useColumns() {
  const [columns, setColumns] = useState(() =>
    typeof window === 'undefined' ? 3 : getColumnsForWidth(window.innerWidth)
  )

  useEffect(() => {
    const handleResize = () => setColumns(getColumnsForWidth(window.innerWidth))
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return columns
}

// Splits items into rows of at most maxPerRow, sized as evenly as
// possible (e.g. 4 -> [2,2], 5 -> [3,2], 6 -> [3,3]) so a category never
// ends in a lonely trailing card.
function splitIntoBalancedRows(items, maxPerRow) {
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
  const columns = useColumns()
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
          {splitIntoBalancedRows(groupedProjects[category], columns).map((row, rowIndex) => (
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
