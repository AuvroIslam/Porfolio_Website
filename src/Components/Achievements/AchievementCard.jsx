import React from 'react'
import '../../Global.css'
import './AchievementCard.css'

function AchievementCard({ achievement }) {
  return (
    <div className="achievement-card">
      <div className="achievement-title">
        <span className="achievement-icon">🏆</span>
        <h2>{achievement.title}</h2>
      </div>
      <div className="achievement-event">
        <p>{achievement.event}</p>
      </div>
    </div>
  )
}

export default AchievementCard
