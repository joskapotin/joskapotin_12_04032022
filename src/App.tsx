import { lazy } from "react"
import { Routes, Route } from "react-router-dom"
import ROUTES from "./constants/routes"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import QueryErrorBoundary from "./components/queryErrorBoundary/QueryErrorBoundary"
import "./App.css"

/* A React feature that allows us to load components only when they are needed. */
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))
const NotFound = lazy(() => import("./pages/notFound/NotFound"))

/**
 * Main entry point of the application.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main className="App-main">
        <Routes>
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <QueryErrorBoundary>
                <Dashboard />
              </QueryErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
