import PropTypes from "prop-types"

export type ErrorProps = {
  message: string
}

function Error({ message }: ErrorProps) {
  return (
    <main className="App-main">
      <div className="error">{message}</div>
    </main>
  )
}

export default Error

Error.propTypes = {
  message: PropTypes.string.isRequired,
}
