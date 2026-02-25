import React from 'react'
import '../../Global.css'
import './Achievements.css'
import AchievementCard from './AchievementCard'

function Achievements({ achievements = [] }) {
  return (
    <div className="achievements">
      <h1 className='heading'>Achievements</h1>
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} />
        ))}
      </div>
    </div>
  )
}

export default Achievements
