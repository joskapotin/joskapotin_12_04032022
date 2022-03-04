import './TodayScore.css'

const TodayScore = ({ todayScore }) => {
  return (
    <div className="today-score__charts">
      <h2>I am today score {todayScore}</h2>
    </div>
  )
}

export default TodayScore
