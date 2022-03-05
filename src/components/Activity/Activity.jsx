import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts'
import PropTypes from 'prop-types'
import { getUserActivityUrl } from '../../services/api'
import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './Activity.css'

function Activity({ id }) {
  const [data, loading, error] = useFetch(getUserActivityUrl(id))

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  /**
   * Give the number of the day from a date formated as yyyy/mm/dd
   * @param {string} date
   * @returns
   */
  const getDayNumber = (date) => {
    const dayNumber = new Date(date)
    return dayNumber.getDate()
  }

  /**
   * Custom tooltip for recharts component
   * @param {*} param0
   * @returns
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
          <XAxis
            tickFormatter={getDayNumber}
            tickMargin={15}
            dataKey="day"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            orientation="right"
            type="number"
            domain={['auto', 'auto']}
          />
          <Tooltip content={customTooltip} offset={40} />
          <Legend
            verticalAlign="top"
            iconType="circle"
            align="right"
            height={50}
            iconSize={8}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[7, 7, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[7, 7, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Activity

Activity.propTypes = {
  id: PropTypes.string.isRequired,
}
