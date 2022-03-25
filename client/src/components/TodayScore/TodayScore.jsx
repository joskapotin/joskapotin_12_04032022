import PropTypes from 'prop-types'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar'
import './TodayScore.css'

/**
 * It takes in a prop called todayScore and displays a circular progress bar with the percentage of the user goal
 *
 * @param {Object} props
 * @param {number} props.todayScore - The id of the user we want the data for.
 * @returns {JSX.Element} A div with a title, a circular progress bar and a text.
 */
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
