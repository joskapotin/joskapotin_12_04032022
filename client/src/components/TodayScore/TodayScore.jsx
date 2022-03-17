import PropTypes from 'prop-types'
import './TodayScore.css'

function TodayScore({ todayScore }) {
  return (
    <div className="today-score-charts__container">
      <h2>I am today score {todayScore}</h2>
    </div>
  )
}

export default TodayScore

TodayScore.propTypes = {
  todayScore: PropTypes.number.isRequired,
}
