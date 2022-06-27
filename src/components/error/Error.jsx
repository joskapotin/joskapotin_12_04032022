import PropTypes from "prop-types"

function Error({ error }) {
  return <h3>Une erreur est survenue: {error}</h3>
}

export default Error

Error.propTypes = {
  error: PropTypes.string.isRequired,
}
