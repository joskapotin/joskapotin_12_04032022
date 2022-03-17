import PropTypes from 'prop-types'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar'
import './TodayScore.css'

function TodayScore({ todayScore }) {
  const percentage = todayScore * 100

  return (
    <div className="today-score-charts__container">
      <h2 className="today-score-charts__title">Score</h2>
      <div className="today-score-charts">
        <CircularProgressBar
          strokeWidth={10}
          sqSize={160}
          percentage={percentage}
        />
      </div>
      <p className="today-score-charts__text">
        <strong>{`${percentage}%`}</strong> de votre objectif
      </p>
    </div>
  )
}

export default TodayScore

TodayScore.defaultProps = {
  todayScore: 0,
}

TodayScore.propTypes = {
  todayScore: PropTypes.number,
}
