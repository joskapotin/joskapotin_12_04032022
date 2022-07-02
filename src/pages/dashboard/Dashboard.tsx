import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import Activity from "../../components/charts/activity/Activity"
import AverageSession from "../../components/charts/averageSession/AverageSession"
import Performance from "../../components/charts/performance/Performance"
import TodayScore from "../../components/charts/todayScore/TodayScore"
import KeyData from "../../components/charts/keyData/KeyData"
import api from "../../services/api"
import { mainFormatter, activityFormatter, averageSessionFormatter, performanceFormatter } from "../../utilities/formatters"
import "./Dashboard.css"

function Dashboard() {
  const { id } = useParams()

  /* Data query */
  const { data: mainData } = id ? useQuery(["mainData", id], () => api.getMain(id)) : { data: undefined }
  const { data: activityData } = id ? useQuery(["activityData", id], () => api.getActivity(id)) : { data: undefined }
  const { data: averageSessionData } = id ? useQuery(["averageSessionData", id], () => api.getAverageSession(id)) : { data: undefined }
  const { data: performanceData } = id ? useQuery(["performanceData", id], () => api.getPerformance(id)) : { data: undefined }

  /* Data format */
  const { firstName, todayScore, keyData } = mainData ? mainFormatter(mainData) : { firstName: undefined, todayScore: undefined, keyData: undefined }
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
