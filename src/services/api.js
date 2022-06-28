import useFetch from "../hooks/useFetch"

/**
 * Mock API
 */
const getUserMain = id => useFetch({ url: `./mock/userMainDataID${id}.json` })
const getUserActivity = id => useFetch({ url: `./mock/userActivityID${id}.json` })
const getUserAverageSession = id => useFetch({ url: `./mock/userAverageSessionID${id}.json` })
const getUserPerformance = id => useFetch({ url: `./mock/userPerformanceID${id}.json` })

/**
 * Real API
 */
// const API_URL = "http://localhost:3000/user"
// const getUserMain = id => useFetch({ url: `${API_URL}/${id}` })
// const getUserActivity = id => useFetch({ url: `${API_URL}/${id}/activity` })
// const getUserAverageSession = id => useFetch({ url: `${API_URL}/${id}/average-sessions` })
// const getUserPerformance = id => useFetch({ url: `${API_URL}/${id}/performance` })

export default {
  getUserMain,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
}
