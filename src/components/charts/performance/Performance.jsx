import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import PropTypes from "prop-types"
import { performanceFormatter } from "../../../utilities/formaters"
import "./Performance.css"

/**
 * Component that takes data and renders a radar chart with the data.
 */
function Performance({ data }) {
  const performanceData = performanceFormatter(data)

  return (
    <div className="performance-charts__container">
      <ResponsiveContainer className="performance-charts" width="99%" height="100%">
        <RadarChart data={performanceData} margin={{ top: 0, right: 35, bottom: 0, left: 35 }}>
          <PolarGrid />
          <Radar dataKey="value" fill="rgb(255, 1, 1)" fillOpacity={0.7} />
          <PolarAngleAxis dataKey="kind" fontSize={12} tickLine={false} stroke="white" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance

Performance.defaultProps = {
  data: {
    data: {
      userId: null,
      kind: {},
      data: [],
    },
  },
}

Performance.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      userId: PropTypes.number,
      kind: PropTypes.objectOf(PropTypes.string),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          kind: PropTypes.number.isRequired,
          value: PropTypes.number.isRequired,
        })
      ),
    }),
  }),
}
