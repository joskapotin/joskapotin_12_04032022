import PropTypes from "prop-types"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import { PerformanceDataFormated } from "../../../utilities/formatters"
import "./Performance.css"

/**
 * Component that takes data and renders a radar chart with the data.
 */
function Performance({ data }: { data: PerformanceDataFormated }) {
  return (
    <div className="performance-charts__container">
      <ResponsiveContainer className="performance-charts" width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 0, right: 35, bottom: 0, left: 35 }}>
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
  data: [],
}

Performance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.string.isRequired,
    }).isRequired
  ),
}
