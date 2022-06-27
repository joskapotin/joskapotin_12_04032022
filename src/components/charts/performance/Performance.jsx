import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import PropTypes from "prop-types"
import "./Performance.css"

/**
 * Component that takes data and renders a radar chart with the data.
 */
function Performance({ data }) {
  // Format the data to feed the chart
  function formatData(dataToFormat) {
    const { kind } = dataToFormat
    const chartsFormatedData = data.data.map(item => {
      const newItem = { ...item }
      newItem.kind = kind[item.kind]
      return newItem
    })
    return chartsFormatedData
  }

  return (
    <div className="performance-charts__container">
      <ResponsiveContainer className="performance-charts" width="99%" height="100%">
        <RadarChart data={formatData(data)} margin={{ top: 0, right: 35, bottom: 0, left: 35 }}>
          <PolarGrid />
          <Radar dataKey="value" fill="rgb(255, 1, 1)" fillOpacity={0.7} />
          <PolarAngleAxis dataKey="kind" fontSize={12} tickLine={false} stroke="white" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance

Performance.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
    kind: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
}
