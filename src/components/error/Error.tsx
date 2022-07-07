import type { ReactNode } from "react"
import PropTypes from "prop-types"

export type ErrorProps = {
  children: ReactNode
}

function Error({ children }: ErrorProps) {
  return (
    <main className="App-main">
      <div className="error">{children}</div>
    </main>
  )
}

export default Error

Error.propTypes = {
  children: PropTypes.node.isRequired,
}
