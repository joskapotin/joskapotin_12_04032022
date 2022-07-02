import PropTypes from "prop-types"
import CircularProgressBar from "../circularProgressBar/CircularProgressBar"
import "./TodayScore.css"

export type TodayScoreProps = {
  data: number
}

/**
 * It takes data and render a circular progress bar with the data.
 */
function TodayScore({ data }: TodayScoreProps) {
  if (!data) {
    return (
      <div className="today-score-charts__container">
        <p className="today-score-charts__title">Activité quotidienne non disponible</p>
      </div>
    )
  }

  return (
    <div className="today-score-charts__container">
      <h2 className="today-score-charts__title">Score</h2>
      <div className="today-score-charts">
        <CircularProgressBar strokeWidth={10} sqSize={160} percentage={data} />
      </div>
      <p className="today-score-charts__text">
        <strong>{`${data}%`}</strong> de votre objectif
      </p>
    </div>
  )
}

export default TodayScore

TodayScore.defaultProps = {
  data: undefined,
}

TodayScore.propTypes = {
  data: PropTypes.number,
}
