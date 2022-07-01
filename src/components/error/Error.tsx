import PropTypes from "prop-types"

type ErrorProps = {
  resetErrorBoundary: (...args: Array<unknown>) => void | undefined
}

function Error({ resetErrorBoundary }: ErrorProps) {
  return (
    <main className="App-main">
      <div className="error">
        There was an error!
        {resetErrorBoundary && (
          <button type="button" onClick={() => resetErrorBoundary()}>
            Try again
          </button>
        )}
      </div>
    </main>
  )
}

export default Error

Error.propTypes = {
  resetErrorBoundary: PropTypes.func,
}
