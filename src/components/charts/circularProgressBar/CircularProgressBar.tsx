import PropTypes from "prop-types"
import "./CircularProgressBar.css"

type CircularProgressBarProps = {
  sqSize: number
  strokeWidth: number
  percentage: number
}

/**
 * It renders an SVG circle with a stroke that is filled in to a percentage of the circle's circumference
 */
function CircularProgressBar({ sqSize, strokeWidth, percentage }: CircularProgressBarProps) {
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle className="circle-background" cx={sqSize / 2} cy={sqSize / 2} r={radius} strokeWidth={`${strokeWidth}px`} />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
  )
}

export default CircularProgressBar

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 0,
  strokeWidth: 10,
}

CircularProgressBar.propTypes = {
  sqSize: PropTypes.number,
  percentage: PropTypes.number,
  strokeWidth: PropTypes.number,
}
