import PropTypes from "prop-types"
import { XAxis, YAxis, Tooltip, Line, LineChart, ResponsiveContainer } from "recharts"
import type { AverageSessionDataFormated } from "../../../utilities/formatters"
import type { TooltipProps } from "recharts"
import type { ValueType, NameType } from "recharts/src/component/DefaultTooltipContent"
import type { CategoricalChartState } from "recharts/types/chart/generateCategoricalChart"

import "./AverageSession.css"

/**
 * Component that takes data and renders a line chart with the data.
 */
function AverageSession({ data }: { data: AverageSessionDataFormated }) {
  /**
   * Custom tooltip for recharts component
   */
  const customTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="average-session__tooltip">
          <span>{`${payload[0].value} min`}</span>
        </div>
      )
    }
    return null
  }

  const handleMouseMove = (e: CategoricalChartState) => {
    if (e.isTooltipActive === true) {
      const div = document.querySelector(".average-session-charts") as HTMLElement
      if (div) {
        const windowWidth = div.clientWidth
        const mouseXpercentage = e.activeCoordinate ? Math.round((e.activeCoordinate.x / windowWidth) * 100) : 0
        div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
      }
    }
  }

  return (
    <div className="average-session-charts__container">
      <h2 className="average-session-charts__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer className="average-session-charts" width="100%" height="100%">
        <LineChart data={data} margin={{ top: 0, left: 0, right: 0, bottom: 20 }} onMouseMove={e => handleMouseMove(e)}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFF", opacity: 0.6 }}
            interval="preserveStartEnd"
          />
          <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide />
          <Tooltip content={customTooltip} cursor={false} />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ fill: "#FFF" }}
            strokeWidth={2}
            stroke="#ff9999"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSession

AverageSession.defaultProps = {
  data: [],
}

AverageSession.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired
  ),
}
