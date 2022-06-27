import useFetch from "../hooks/useFetch/useFetch"

const getUserMain = id => useFetch({ url: `/mock/userMainDataID${id}.json` })
const getUserActivity = id => useFetch({ url: `/mock/userActivityID${id}.json` })
const getUserAverageSession = id => useFetch({ url: `/mock/userAverageSessionID${id}.json` })
const getUserPerformance = id => useFetch({ url: `/mock/userPerformanceID${id}.json` })

export default {
  getUserMain,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
}
