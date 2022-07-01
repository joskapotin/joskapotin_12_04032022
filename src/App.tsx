import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import { QueryErrorResetBoundary } from "react-query"
import { ErrorBoundary } from "react-error-boundary"
import { ROUTES } from "./constants/routes"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Spinner from "./components/spinner/Spinner"
import Error from "./components/error/Error"

/* A React feature that allows us to load components only when they are needed. */
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))

/**
 * The main component of the application. It is the root component of the application.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <QueryErrorResetBoundary>
        {/* A React component that resets the query cache when an error occurs. */}
        {({ reset }) => (
          <ErrorBoundary onReset={reset} fallbackRender={({ resetErrorBoundary }) => <Error resetErrorBoundary={resetErrorBoundary} />}>
            {/* A React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed. */}
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  )
}

export default App
