import PropTypes from "prop-types"
import "./KeyCard.css"

export type KeyCardProps = {
  text: string | undefined
  legend: string
  icon: string
}

/**
 * Component that takes in an object with a text, a legend and an icon image and returns a card
 */
function KeyCard({ text, legend, icon }: KeyCardProps) {
  return (
    <div className="key-card">
      <img className="key-card__icon" src={icon} alt="" />
      <div className="key-card__content">
        <h3 className="key-card__title">{text}</h3>
        <p className="key-card__legend">{legend}</p>
      </div>
    </div>
  )
}

export default KeyCard

KeyCard.defaultProps = {
  text: "nc",
}

KeyCard.propTypes = {
  text: PropTypes.string,
  legend: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
