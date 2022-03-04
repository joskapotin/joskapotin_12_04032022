import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './Performance'

const Performance = ({ id }) => {
  const [data, loading, error] = useFetch('./mockData/userPerformance.json')

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  console.log('performance data', data)

  return (
    <div className="performance__charts">
      <p>I am the performance</p>
    </div>
  )
}

export default Performance
