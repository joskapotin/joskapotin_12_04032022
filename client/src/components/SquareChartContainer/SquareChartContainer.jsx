import { PropTypes } from 'prop-types'

function SquareChartContainer({ children }) {
  return <div className="square-chart-container">{children}</div>
}

export default SquareChartContainer

SquareChartContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
