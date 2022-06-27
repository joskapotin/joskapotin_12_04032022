import { PropTypes } from 'prop-types'
import './KeyCard.css'

/**
 * Component that takes in an object with a text, a legend and an icon image and returns a card
 * @param {object} props
 * @param {string} props.text
 * @param {string} props.legend
 * @param {string} props.icon
 * @returns {JSX.Element} A card components.
 */
function KeyCard({ text, legend, icon }) {
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

KeyCard.propTypes = {
  text: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
