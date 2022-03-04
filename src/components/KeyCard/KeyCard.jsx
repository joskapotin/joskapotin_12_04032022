import './KeyCard.css'

const KeyCard = ({ text, legend, icon }) => {
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
