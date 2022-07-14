import PropTypes from "prop-types"

export type ErrorProps = {
  message: string
}

/**
 * Error is a function that takes an object with a message property and returns a React element.
 */
function Error({ message }: ErrorProps) {
  return (
    <main className="App-main">
      <div className="error">
        <p>Error while fetching data</p>
        <code>{message}</code>
      </div>
    </main>
  )
}

export default Error

Error.propTypes = {
  message: PropTypes.string.isRequired,
}
