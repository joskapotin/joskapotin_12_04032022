import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts'
import useFetch from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './Activity.css'

const Activity = ({ id }) => {
  const [data, loading, error] = useFetch('./mockData/userActivity.json')

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  console.log('acivity data', data)

  return (
    <div className="activity__charts">
      <h2 className="charts__title">Activité quotidienne</h2>
      <ResponsiveContainer width="99%" height={320}>
        <BarChart barSize={7} data={data.sessions}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            orientation="right"
            type="number"
            domain={['auto', 'auto']}
          />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Activity
