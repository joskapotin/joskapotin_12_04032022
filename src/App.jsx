import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Spinner from "./components/spinner/Spinner"

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
