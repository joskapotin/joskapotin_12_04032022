/** Mock API */
const getUserMain = async id => fetch(`./mock/userMainDataID${id}.json`).then(res => res.json())
const getUserActivity = async id => fetch(`./mock/userActivityID${id}.json`).then(res => res.json())
const getUserAverageSession = async id => fetch(`./mock/userAverageSessionID${id}.json`).then(res => res.json())
const getUserPerformance = async id => fetch(`./mock/userPerformanceID${id}.json`).then(res => res.json())

/** Real API */
// const API_URL = "http://localhost:3000/user"
// const getUserMain = async id => fetch(`${API_URL}/${id}`).then(res => res.json())
// const getUserActivity = async id => fetch(`${API_URL}/${id}/activity`).then(res => res.json())
// const getUserAverageSession = async id => fetch(`${API_URL}/${id}/average-sessions`).then(res => res.json())
// const getUserPerformance = async id => fetch(`${API_URL}/${id}/performance`).then(res => res.json())

export default {
  getUserMain,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
}
