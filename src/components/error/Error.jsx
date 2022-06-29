import PropTypes from "prop-types"

function Error({ resetErrorBoundary }) {
  return (
    <main className="App-main">
      There was an error!
      <button type="button" onClick={() => resetErrorBoundary()}>
        Try again
      </button>
    </main>
  )
}

export default Error

Error.propTypes = {
  resetErrorBoundary: PropTypes.func.isRequired,
}
