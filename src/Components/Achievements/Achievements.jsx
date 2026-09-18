import React from 'react'
import '../../Global.css'
import './Achievements.css'
import AchievementCard from './AchievementCard'

function Achievements({ national = [], international = [] }) {
  return (
    <div className="achievements">
      <h1 className='heading'>Achievements</h1>
      {national.length > 0 && (
        <div>
          <h2 className='category-heading'>National</h2>
          <div className="achievements-list">
            {national.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        </div>
      )}
      {international.length > 0 && (
        <div>
          <h2 className='category-heading'>International</h2>
          <div className="achievements-list">
            {international.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Achievements
