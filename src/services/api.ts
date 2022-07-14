import axios from "axios"

export type Id = string

export type MainData = {
  data: {
    id: number
    userInfos: {
      firstName: string
      lastName: string
      age: number
    }
    todayScore: number
    keyData: {
      calorieCount: number
      proteinCount: number
      carbohydrateCount: number
      lipidCount: number
    }
  }
}

export type ActivityData = {
  data: {
    userId: number
    sessions: {
      day: string
      kilogram: number
      calories: number
    }[]
  }
}

export type AverageSessionData = {
  data: {
    userId: number
    sessions: {
      day: number
      sessionLength: number
    }[]
  }
}

export type PerformanceData = {
  data: {
    userId: number
    kind: {
      [key: string]: string
    }
    data: {
      value: number
      kind: number
    }[]
  }
}

export type getMainFunction = (id: Id) => Promise<MainData>

export type getActivityFunction = (id: Id) => Promise<ActivityData>

export type getPerformanceFunction = (id: Id) => Promise<PerformanceData>

export type getAverageSessionFunction = (id: Id) => Promise<AverageSessionData>

/** Mock API */
const getMain: getMainFunction = async id => axios.get(`./mock/userMainDataID${id}.json`).then(res => res.data)
const getActivity: getActivityFunction = async id => axios.get(`./mock/userActivityID${id}.json`).then(res => res.data)
const getAverageSession: getAverageSessionFunction = async id => axios.get(`./mock/userAverageSessionID${id}.json`).then(res => res.data)
const getPerformance: getPerformanceFunction = async id => axios.get(`./mock/userPerformanceID${id}.json`).then(res => res.data)

/** Real API */
// const API_URL = "http://localhost:3000/user"
// const getMain: getMainFunction = async id => axios.get(`${API_URL}/${id}`).then(res => res.data)
// const getActivity: getActivityFunction = async id => axios.get(`${API_URL}/${id}/activity`).then(res => res.data)
// const getAverageSession: getAverageSessionFunction = async id => axios.get(`${API_URL}/${id}/average-sessions`).then(res => res.data)
// const getPerformance: getPerformanceFunction = async id => axios.get(`${API_URL}/${id}/performance`).then(res => res.data)

const api = {
  getMain,
  getActivity,
  getAverageSession,
  getPerformance,
}

export default api
