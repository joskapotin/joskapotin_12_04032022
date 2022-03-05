import PropTypes from 'prop-types'

function Error({ error }) {
  return <h3>Une erreur est survenue: {error.message}</h3>
}

export default Error

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
}
