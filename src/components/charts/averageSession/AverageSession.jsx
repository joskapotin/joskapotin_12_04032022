import { XAxis, YAxis, Tooltip, Line, LineChart, ResponsiveContainer } from "recharts"
import { PropTypes } from "prop-types"
import { averageFormatter } from "../../../utilities/formaters"
import "./AverageSession.css"

/**
 * Component that takes data and renders a line chart with the data.
 */
function AverageSession({ data }) {
  const averageData = averageFormatter(data)
  /**
   * Custom tooltip for recharts component
   *
   * @param {Object} obj
   * @param {Boolean} obj.active - is the tooltip active
   * @param {Array.<object>} obj.payload - a bunch information that you can display in the tooltip coming from rechart
   * @returns {JSX.Element} The tooltip component.
   */
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="average-session__tooltip">
          <span>{`${payload[0].value} min`}</span>
        </div>
      )
    }
    return null
  }

  return (
    <div className="average-session-charts__container">
      <h2 className="average-session-charts__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer className="average-session-charts" width="100%" height="100%">
        <LineChart
          data={averageData}
          margin={{ top: 0, left: 0, right: 0, bottom: 20 }}
          onMouseMove={e => {
            if (e.isTooltipActive === true) {
              const div = document.querySelector(".average-session-charts")
              const windowWidth = div.clientWidth
              const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
            }
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#FFF", opacity: 0.6 }} interval="preserveStartEnd" />
          <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide />
          <Tooltip content={customTooltip} cursor={false} />
          <Line type="natural" dataKey="sessionLength" dot={false} activeDot={{ fill: "#FFF" }} strokeWidth={2} stroke="#ff9999" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSession

AverageSession.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      userId: PropTypes.number,
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.number.isRequired,
          sessionLength: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}
