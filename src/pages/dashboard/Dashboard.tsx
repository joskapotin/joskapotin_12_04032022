import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import Activity from "../../components/charts/activity/Activity"
import AverageSession from "../../components/charts/averageSession/AverageSession"
import Performance from "../../components/charts/performance/Performance"
import TodayScore from "../../components/charts/todayScore/TodayScore"
import KeyData from "../../components/charts/keyData/KeyData"
import api from "../../services/api"
import { mainFormatter, activityFormatter, averageSessionFormatter, performanceFormatter } from "../../utilities/formatters"
import type { MainData, ActivityData, AverageSessionData, PerformanceData } from "../../services/api"
import "./Dashboard.css"

function Dashboard() {
  const { id } = useParams()

  /* Data query */
  const { data: mainData } = useQuery(["mainData", id], () => api.getMain(id as string))
  const { data: activityData } = useQuery(["activityData", id], () => api.getActivity(id as string))
  const { data: averageSessionData } = useQuery(["averageSessionData", id], () => api.getAverageSession(id as string))
  const { data: performanceData } = useQuery(["performanceData", id], () => api.getPerformance(id as string))

  /* Data format */
  const { firstName, todayScore, keyData } = mainFormatter(mainData as MainData)
  const activityDataFormatted = activityFormatter(activityData as ActivityData)
  const averageSessionDataFormatted = averageSessionFormatter(averageSessionData as AverageSessionData)
  const performanceDataFormatted = performanceFormatter(performanceData as PerformanceData)

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
