import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'
import PropTypes from 'prop-types'
import { getUserPerformanceUrl } from '../../services/api'
import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './Performance.css'

function Performance({ id }) {
  const [data, loading, error] = useFetch(getUserPerformanceUrl(id))

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  const { kind } = data
  const chartsFormatedData = data.data.map((item) => {
    const newItem = { ...item }
    newItem.kind = kind[item.kind]
    return newItem
  })

  return (
    <div className="performance-charts__container">
      <RadarChart
        className="performance-charts"
        width={258}
        height={263}
        outerRadius={90}
        data={chartsFormatedData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  )
}

export default Performance

Performance.propTypes = {
  id: PropTypes.string.isRequired,
}
