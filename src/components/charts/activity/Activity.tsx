import PropTypes from "prop-types"
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"
import type { ActivityDataFormated } from "../../../utilities/formatters"
import type { TooltipProps } from "recharts"
import type { ValueType, NameType } from "recharts/src/component/DefaultTooltipContent"
import "./Activity.css"

/**
 * Component that takes data and renders a bar chart with the data.
 */
function Activity({ data }: { data: ActivityDataFormated | undefined }) {
  /**
   * Custom tooltip for recharts component
   */
  const customTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    if (active && payload) {
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
      <ResponsiveContainer className="activity-charts" width="99%" height="100%">
        <BarChart barSize={7} data={data}>
          <CartesianGrid vertical={false} strokeDasharray="2" />
          <XAxis tickMargin={15} dataKey="day" tickLine={false} axisLine={false} />
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

Activity.defaultProps = {
  data: [],
}

Activity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired
  ),
}
