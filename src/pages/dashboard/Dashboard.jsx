import { lazy } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import api from "../../services/api"
import { mainFormatter } from "../../utilities/formaters"
import "./Dashboard.css"

const Activity = lazy(() => import("../../components/charts/activity/Activity"))
const AverageSession = lazy(() => import("../../components/charts/averageSession/AverageSession"))
const Performance = lazy(() => import("../../components/charts/performance/Performance"))
const TodayScore = lazy(() => import("../../components/charts/todayScore/TodayScore"))
const KeyData = lazy(() => import("../../components/charts/keyData/KeyData"))
const Error = lazy(() => import("../../components/error/Error"))

function Dashboard() {
  const { id } = useParams()

  const { error, data: userMain } = useQuery(["userMain", id], () => api.getUserMain(id))
  const { data: userActivity } = useQuery(["userActivity", id], () => api.getUserActivity(id))
  const { data: userAverageSession } = useQuery(["userAverageSession", id], () => api.getUserAverageSession(id))
  const { data: userPerformance } = useQuery(["userPerformance", id], () => api.getUserPerformance(id))

  const { firstName, todayScore, keyData } = userMain && mainFormatter(userMain)

  if (error) return <Error error={error.message} />

  return (
    <main className="App-main">
      <h1 className="main__title">
        Bonjour <em>{firstName}</em>
      </h1>
      <p className="main__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="dashboard__grid">
        <div className="dashboard__charts">
          <Activity data={userActivity} />
          <AverageSession data={userAverageSession} />
          <Performance data={userPerformance} />
          <TodayScore data={todayScore} />
        </div>
        <KeyData data={keyData} />
      </div>
    </main>
  )
}

export default Dashboard
