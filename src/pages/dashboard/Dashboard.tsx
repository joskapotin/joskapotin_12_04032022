import { lazy } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import api from "../../services/api"
import { mainFormatter, activityFormatter, averageSessionFormatter, performanceFormatter } from "../../utilities/formatters"
import "./Dashboard.css"

const Activity = lazy(() => import("../../components/charts/activity/Activity"))
const AverageSession = lazy(() => import("../../components/charts/averageSession/AverageSession"))
const Performance = lazy(() => import("../../components/charts/performance/Performance"))
const TodayScore = lazy(() => import("../../components/charts/todayScore/TodayScore"))
const KeyData = lazy(() => import("../../components/charts/keyData/KeyData"))

function Dashboard() {
  const { id } = useParams()

  /* Data query */
  const { data: mainData } = useQuery(["mainData", id], () => api.getMain(id))
  const { data: activityData } = useQuery(["activityData", id], () => api.getActivity(id))
  const { data: averageSessionData } = useQuery(["averageSessionData", id], () => api.getAverageSession(id))
  const { data: performanceData } = useQuery(["performanceData", id], () => api.getPerformance(id))

  /* Data format */
  const { firstName, todayScore, keyData } = mainData
    ? mainFormatter(mainData)
    : { firstName: undefined, todayScore: undefined, keyData: undefined }
  const activityDataFormatted = activityData ? activityFormatter(activityData) : undefined
  const averageSessionDataFormatted = averageSessionData ? averageSessionFormatter(averageSessionData) : undefined
  const performanceDataFormatted = performanceData ? performanceFormatter(performanceData) : undefined

  return (
    <main className="App-main">
      <h1 className="main__title">
        Bonjour <em>{firstName}</em>
      </h1>
      <p className="main__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="dashboard__grid">
        <Activity data={activityDataFormatted} />
        <AverageSession data={averageSessionDataFormatted} />
        <Performance data={performanceDataFormatted} />
        <TodayScore data={todayScore} />
        <KeyData data={keyData} />
      </div>
    </main>
  )
}

export default Dashboard
