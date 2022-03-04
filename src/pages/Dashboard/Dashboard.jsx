import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import KeyData from '../../components/KeyData/KeyData'
import TodayScore from '../../components/TodayScore/TodayScore'
import Activity from '../../components/Activity/Activity'
import AverageSession from '../../components/AverageSession/AverageSession'
import Performance from '../../components/Performance/Performance'
import Spinner from '../../components/Spinner/Spinner'
import Error from '../../components/Error/Error'
import './Dashboard.css'

const Dashboard = () => {
  const { id } = useParams()
  const [data, loading, error] = useFetch('./mockData/userMainData.json')

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  const {
    userInfos: { firstName, lastName, age },
    todayScore,
    keyData,
  } = data

  console.log('main data', data)

  return (
    <main className="App-main">
      <h1 className="main__title">
        Bonjour <em>{firstName}</em>
      </h1>
      <p className="main__subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
      <div className="dashboard__grid">
        <Activity id={id} />
        <AverageSession id={id} />
        <Performance id={id} />
        <TodayScore todayScore={todayScore} />
        <KeyData keyData={keyData} />
      </div>
    </main>
  )
}

export default Dashboard
