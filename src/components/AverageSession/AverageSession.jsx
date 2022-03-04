import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './AverageSession.css'

const AverageSession = ({ id }) => {
  const [data, loading, error] = useFetch('./mockData/userAverageSession.json')

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  console.log('average session data', data)

  return (
    <div className="average-session__charts">
      <p>I am the average session</p>
    </div>
  )
}

export default AverageSession
