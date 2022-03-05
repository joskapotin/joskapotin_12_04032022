import { XAxis, Tooltip, Line, LineChart, ResponsiveContainer } from 'recharts'
import { PropTypes } from 'prop-types'
import { getUserAverageSessionUrl } from '../../services/api'
import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './AverageSession.css'

function AverageSession({ id }) {
  const [data, loading, error] = useFetch(getUserAverageSessionUrl(id))

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <div className="average-session-charts__container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          className="average-session-charts"
          data={data.sessions}
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
            padding={{ left: 10, right: 10 }}
            tick={{ fill: '#FFF', opacity: 0.5 }}
            tickSize={12}
            tickFormatter={(day) => {
              const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
              return `${weekday[day - 1]}`
            }}
          />
          <Tooltip cursor={false} />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ fill: '#FFF' }}
            strokeWidth={2}
            stroke="#fff"
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
