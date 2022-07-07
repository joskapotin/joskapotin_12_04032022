import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import ROUTES from "./constants/routes"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Spinner from "./components/spinner/Spinner"
import Error from "./components/error/Error"

/* A React feature that allows us to load components only when they are needed. */
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ErrorBoundary fallback={<Error>Could not fetch data</Error>}>
              {/* A React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed. */}
              <Suspense fallback={<Spinner />}>
                <Dashboard />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<Error>Page not found</Error>} />
      </Routes>
    </div>
  )
}

export default App
