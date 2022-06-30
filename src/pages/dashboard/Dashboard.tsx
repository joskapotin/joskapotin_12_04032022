import { lazy } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import api from "../../services/api"
import { mainFormatter } from "../../utilities/formatters"
import "./Dashboard.css"

const Activity = lazy(() => import("../../components/charts/activity/Activity"))
const AverageSession = lazy(() => import("../../components/charts/averageSession/AverageSession"))
const Performance = lazy(() => import("../../components/charts/performance/Performance"))
const TodayScore = lazy(() => import("../../components/charts/todayScore/TodayScore"))
const KeyData = lazy(() => import("../../components/charts/keyData/KeyData"))
const Error = lazy(() => import("../../components/error/Error"))

function Dashboard() {
  const { id } = useParams()

  const { data: userMainData } = useQuery(["userMain", id], () => api.getMain(id))
  const { data: userActivityData } = useQuery(["userActivity", id], () => api.getActivity(id))
  const { data: userAverageSessionData } = useQuery(["userAverageSession", id], () => api.getAverageSession(id))
  const { data: userPerformanceData } = useQuery(["userPerformance", id], () => api.getPerformance(id))

  const { firstName, todayScore, keyData } = userMainData
    ? mainFormatter(userMainData)
    : { firstName: undefined, todayScore: undefined, keyData: undefined }

  return (
    <main className="App-main">
      <h1 className="main__title">
        Bonjour <em>{firstName}</em>
      </h1>
      <p className="main__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="dashboard__grid">
        <div className="dashboard__charts">
          <Activity data={userActivityData} />
          <AverageSession data={userAverageSessionData} />
          <Performance data={userPerformanceData} />
          <TodayScore data={todayScore} />
        </div>
        <KeyData data={keyData} />
      </div>
    </main>
  )
}

export default Dashboard
