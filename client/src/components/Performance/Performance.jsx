import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'
import PropTypes from 'prop-types'
import { getUserPerformanceUrl } from '../../services/api'
import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './Performance.css'

/**
 * Component that takes an id as a prop, fetches the user performance data from the API, and renders a radar chart with the data.
 *
 * @param {Object} props
 * @param {Number} props.id - The id of the user we want the data for.
 * @returns {JSX.Element} The performance charts component is returning a div with a title and a responsive radar chart.
 */
function Performance({ id }) {
  const [data, loading, error] = useFetch(getUserPerformanceUrl(id))

  // Format the data to feed the chart
  function formatData(dataToFormat) {
    const { kind } = dataToFormat
    const chartsFormatedData = data.data.map((item) => {
      const newItem = { ...item }
      newItem.kind = kind[item.kind]
      return newItem
    })
    return chartsFormatedData
  }

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <div className="performance-charts__container">
      <ResponsiveContainer
        className="performance-charts"
        width="99%"
        height="100%"
      >
        <RadarChart
          data={formatData(data)}
          margin={{ top: 0, right: 35, bottom: 0, left: 35 }}
        >
          <PolarGrid />
          <Radar dataKey="value" fill="rgb(255, 1, 1)" fillOpacity={0.7} />
          <PolarAngleAxis
            dataKey="kind"
            fontSize={12}
            tickLine={false}
            stroke="white"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance

Performance.propTypes = {
  id: PropTypes.string.isRequired,
}
