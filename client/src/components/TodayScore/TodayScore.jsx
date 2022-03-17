import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import './TodayScore.css'

function TodayScore({ todayScore }) {
  const chartData = [
    {
      name: 'today score',
      value: todayScore,
    },
  ]
  console.log(todayScore)
  return (
    <div className="today-score-charts__container">
      <h2 className="today-score-charts__title">Score {todayScore}</h2>
      <ResponsiveContainer
        className="today-score-charts"
        width="100%"
        height="100%"
      >
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={chartData}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: '#666', position: 'insideStart' }}
            background
            clockWise
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TodayScore

TodayScore.propTypes = {
  todayScore: PropTypes.number.isRequired,
}
