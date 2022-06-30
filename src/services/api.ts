type Id = number | string | undefined

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

type getMainFunction = (id: Id) => Promise<MainData>

type getActivityFunction = (id: Id) => Promise<ActivityData>

type getPerformanceFunction = (id: Id) => Promise<PerformanceData>

type getAverageSessionFunction = (id: Id) => Promise<AverageSessionData>

/** Mock API */
const getMain: getMainFunction = async id => fetch(`./mock/userMainDataID${id}.json`).then(res => res.json())

const getActivity: getActivityFunction = async id => fetch(`./mock/userActivityID${id}.json`).then(res => res.json())

const getAverageSession: getAverageSessionFunction = async id => fetch(`./mock/userAverageSessionID${id}.json`).then(res => res.json())

const getPerformance: getPerformanceFunction = async id => fetch(`./mock/userPerformanceID${id}.json`).then(res => res.json())

/** Real API */
// const API_URL = "http://localhost:3000/user"

// const getMain: getMainFunction = async id => fetch(`${API_URL}/${id}`).then(res => res.json())

// const getActivity: getActivityFunction = async id => fetch(`${API_URL}/${id}/activity`).then(res => res.json())

// const getAverageSession: getAverageSessionFunction = async id => fetch(`${API_URL}/${id}/average-sessions`).then(res => res.json())

// const getPerformance: getPerformanceFunction = async id => fetch(`${API_URL}/${id}/performance`).then(res => res.json())

export default {
  getMain,
  getActivity,
  getAverageSession,
  getPerformance,
}
