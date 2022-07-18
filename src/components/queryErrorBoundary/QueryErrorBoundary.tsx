import { Suspense } from "react"
import type { ReactNode } from "react"
import { QueryErrorResetBoundary } from "react-query"
import { ErrorBoundary } from "react-error-boundary"
import propTypes from "prop-types"
import Spinner from "~/components/spinner/Spinner"

export type QueryErrorBoundaryProps = {
  children: ReactNode
}

/**
 * A component that wraps the children of a component in a `QueryErrorResetBoundary`
 * With the `onReset` function, it will reset the query when the error is resolved
 * Any error that occurs inside the childrens will be caught and rendered in the `ErrorBoundary`
 */
function QueryErrorBoundary({ children }: QueryErrorBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div className="error">
              <p>Error while fetching data</p>
              <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
              <button type="button" onClick={() => resetErrorBoundary()}>
                Try again
              </button>
            </div>
          )}
        >
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default QueryErrorBoundary

QueryErrorBoundary.propTypes = {
  children: propTypes.node.isRequired,
}
