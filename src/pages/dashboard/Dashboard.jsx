import { useParams } from "react-router-dom"
import api from "../../services/api"
import Spinner from "../../components/spinner/Spinner"
import Error from "../../components/error/Error"
import Activity from "../../components/charts/activity/Activity"
import AverageSession from "../../components/charts/averageSession/AverageSession"
import Performance from "../../components/charts/performance/Performance"
import TodayScore from "../../components/charts/todayScore/TodayScore"
import KeyData from "../../components/charts/keyData/KeyData"
import "./Dashboard.css"

function Dashboard() {
  const { id } = useParams()

  const { loading, error, data } = api.getUserMain(id)
  const { data: userActivity } = api.getUserActivity(id)
  const { data: userAverageSession } = api.getUserAverageSession(id)
  const { data: userPerformance } = api.getUserPerformance(id)

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <main className="App-main">
      <h1 className="main__title">
        Bonjour <em>{data && data.userInfos.firstName}</em>
      </h1>
      <p className="main__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="dashboard__grid">
        <div className="dashboard__charts">
          {userActivity && <Activity data={userActivity} />}
          {userAverageSession && <AverageSession data={userAverageSession} />}
          {userPerformance && <Performance data={userPerformance} />}
          {data && <TodayScore data={data.todayScore} />}
        </div>
        {data && <KeyData data={data.keyData} />}
      </div>
    </main>
  )
}

export default Dashboard
