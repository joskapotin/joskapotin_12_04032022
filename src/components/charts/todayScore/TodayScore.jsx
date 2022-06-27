import PropTypes from "prop-types"
import CircularProgressBar from "../circularProgressBar/CircularProgressBar"
import "./TodayScore.css"

/**
 * It takes in a prop called todayScore and displays a circular progress bar with the percentage of the user goal
 */
function TodayScore({ data }) {
  const percentage = data * 100

  return (
    <div className="today-score-charts__container">
      <h2 className="today-score-charts__title">Score</h2>
      <div className="today-score-charts">
        <CircularProgressBar strokeWidth={10} sqSize={160} percentage={percentage} />
      </div>
      <p className="today-score-charts__text">
        <strong>{`${percentage}%`}</strong> de votre objectif
      </p>
    </div>
  )
}

export default TodayScore

TodayScore.defaultProps = {
  data: 0,
}

TodayScore.propTypes = {
  data: PropTypes.number,
}
