import PropTypes from 'prop-types'
import './Spinner.css'

function Spinner({ children }) {
  return (
    <div className="overlay">
      <div className="spinner">{children}</div>
    </div>
  )
}

export default Spinner

Spinner.defaultProps = {
  children: '',
}
Spinner.propTypes = {
  children: PropTypes.node,
}
