import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"
import PropTypes from "prop-types"
import { getDayNumber } from "../../../utilities/utilities"
import "./Activity.css"

/**
 * Component that takes an id as a prop, fetches the user activity data from the API, and renders a bar chart with the data.
 */
function Activity({ data }) {
  /**
   * Custom tooltip for recharts component
   *
   * @param {Object} obj
   * @param {Boolean} obj.active - is the tooltip active
   * @param {Array.<object>} obj.payload - a bunch information that you can display in the tooltip coming from rechart
   * @returns {JSX.Element | null} The tooltip component.
   */
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="activity-charts__tooltip">
          <span>{`${payload[0].value} kg`}</span>
          <span>{`${payload[1].value} kCal`}</span>
        </div>
      )
    }
    return null
  }

  return (
    <div className="activity-charts__container">
      <h2 className="activity-charts__title">Activité quotidienne</h2>
      <ResponsiveContainer className="activity-charts" width="99%" height={320}>
        <BarChart barSize={7} data={data.sessions}>
          <CartesianGrid vertical={false} strokeDasharray="2" />
          <XAxis tickFormatter={getDayNumber} tickMargin={15} dataKey="day" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} orientation="right" type="number" domain={["auto", "auto"]} />
          <Tooltip content={customTooltip} offset={40} />
          <Legend verticalAlign="top" iconType="circle" align="right" height={50} iconSize={8} />
          <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[7, 7, 0, 0]} />
          <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[7, 7, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Activity

Activity.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
}
