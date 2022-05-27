import {
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  ResponsiveContainer,
} from 'recharts'
import { PropTypes } from 'prop-types'
import { getUserAverageSessionUrl } from '../../services/api'
import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './AverageSession.css'

/**
 * Component that takes an id as a prop, fetches the user average session data from the API, and renders a line chart with the data.
 *
 * @param {number} id - The id of the user we want the data for.
 * @returns {JSX.Element} The average session charts component is returning a div with a title and a responsive line chart.
 */
function AverageSession({ id }) {
  const [data, loading, error] = useFetch(getUserAverageSessionUrl(id))

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

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <div className="average-session-charts__container">
      <h2 className="average-session-charts__title">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer
        className="average-session-charts"
        width="100%"
        height="100%"
      >
        <LineChart
          data={data.sessions}
          margin={{ top: 0, left: 0, right: 0, bottom: 20 }}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              const div = document.querySelector('.average-session-charts')
              const windowWidth = div.clientWidth
              const mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              )
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
            }
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#FFF', opacity: 0.6 }}
            tickFormatter={(day) => {
              const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
              return `${weekday[day - 1]}`
            }}
            interval="preserveStartEnd"
          />
          <YAxis domain={['dataMin - 20', 'dataMax + 20']} hide />
          <Tooltip content={customTooltip} cursor={false} />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ fill: '#FFF' }}
            strokeWidth={2}
            stroke="#ff9999"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSession

AverageSession.propTypes = {
  id: PropTypes.string.isRequired,
}
