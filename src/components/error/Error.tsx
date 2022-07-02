import PropTypes from "prop-types"

export type ErrorProps = {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void | undefined
}

function Error({ error, resetErrorBoundary }: ErrorProps) {
  return (
    <main className="App-main">
      <div className="error">
        <p>
          There was an error! <br />
          <code>{error.message}</code>
        </p>
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

Error.defaultProps = {
  resetErrorBoundary: undefined,
}

Error.propTypes = {
  resetErrorBoundary: PropTypes.func,
}
