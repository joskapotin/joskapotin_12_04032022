import type { MainData, ActivityData, AverageSessionData, PerformanceData } from "../services/api"

export type MainDataFormated = {
  firstName: string
  todayScore: number
  keyData: {
    calorieCount: string
    proteinCount: string
    carbohydrateCount: string
    lipidCount: string
  }
}

export type ActivityDataFormated = {
  day: number
  kilogram: number
  calories: number
}[]

export type AverageSessionDataFormated = {
  day: string
  sessionLength: number
}[]

export type PerformanceDataFormated = {
  value: number
  kind: string
}[]

type unitConversionFunction = (number: number) => string

type getDayNumberFunction = (date: string) => number

type getDayFirstLetterFunction = (number: number) => string

type mainFormatterFunction = (data: MainData) => MainDataFormated

type activityFormatterFunction = (data: ActivityData) => ActivityDataFormated

type averageSessionFormatterFunction = (data: AverageSessionData) => AverageSessionDataFormated

type translateTextFunction = (text: string) => string

type performanceFormatterFunction = (data: PerformanceData) => PerformanceDataFormated

/**
 * If the number is greater than or equal to 1000, divide it by 1000 and replace the decimal point with a comma, otherwise return the number as a string.
 */
const unitConversion: unitConversionFunction = number => {
  if (number >= 1000) {
    return `${(number / 1000).toString().replace(".", ",")}k`
  }
  return number.toString()
}

/**
 * Given a date string, return the day number of that date.
 */
export const getDayNumber: getDayNumberFunction = date => new Date(date).getDate()

/**
 * It takes a number and returns the first letter of the day of the week
 */
export const getDayFirstLetter: getDayFirstLetterFunction = number => {
  const weekday = ["L", "M", "M", "J", "V", "S", "D"]
  return `${weekday[number - 1]}`
}

/**
 * It takes the data from the query and formats it into a format that the React component can use
 */
export const mainFormatter: mainFormatterFunction = ({ data: { userInfos, todayScore, keyData } }) => {
  const { firstName } = userInfos
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData
  return {
    firstName,
    todayScore: todayScore * 100,
    keyData: {
      calorieCount: `${unitConversion(calorieCount)}Cal`,
      proteinCount: `${unitConversion(proteinCount)}g`,
      carbohydrateCount: `${unitConversion(carbohydrateCount)}g`,
      lipidCount: `${unitConversion(lipidCount)}g`,
    },
  }
}

/**
 * It takes the data from the query and formats it into a format that the React component can use
 */
export const activityFormatter: activityFormatterFunction = ({ data: { sessions } }) =>
  sessions.map(session => {
    const { day, kilogram, calories } = session
    return {
      day: getDayNumber(day),
      kilogram,
      calories,
    }
  })

/**
 * It takes the data from the query and formats it into a format that the React component can use
 */
export const averageSessionFormatter: averageSessionFormatterFunction = ({ data: { sessions } }) =>
  sessions.map(session => {
    const { day, sessionLength } = session
    return { day: getDayFirstLetter(day), sessionLength }
  })

/**
 * It takes a string as an argument and returns a translated string
 */
const translateText: translateTextFunction = text => {
  switch (text) {
    case "cardio":
      return "Cardio"
    case "energy":
      return "Energie"
    case "endurance":
      return "Endurance"
    case "strength":
      return "Force"
    case "speed":
      return "Vitesse"
    case "intensity":
      return "Intensité"
    default:
      return text
  }
}

/**
 * It takes the data from the query and formats it into a format that the React component can use
 */
export const performanceFormatter: performanceFormatterFunction = ({ data }) => {
  const { kind: kinds, data: sessions } = data

  return sessions.map(session => {
    const { value, kind } = session
    return { value, kind: translateText(kinds[kind]) }
  })
}
