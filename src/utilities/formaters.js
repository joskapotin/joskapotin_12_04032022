/**
 * Given a number, return a string that represents the number in a more human readable format
 *
 * @param {number} value - The number to be converted.
 * @returns A string.
 */
const unitConversion = value => {
  const number = parseInt(value, 10)
  if (number >= 1000) {
    return `${(number / 1000).toString().replace(".", ",")}k`
  }
  return number.toString()
}

/**
 * Give the number of the day from a date formated as yyyy/mm/dd
 *
 * @param {string} date
 * @returns {number} Return the number of the day
 */
export const getDayNumber = date => new Date(date).getDate()

/**
 * Give the first letter of the day from the number of the day
 *
 * @param {number} number
 * @returns {string} Return the first letter of the day
 */
export const getDayFirstLetter = number => {
  const weekday = ["L", "M", "M", "J", "V", "S", "D"]
  return `${weekday[number - 1]}`
}

/**
 * It takes the data from the query and formats it into a format that the React component can use
 *
 * @param {object} data - The response from the query
 * @returns {object} Return the formatted data
 */
export const mainFormatter = ({ data: { userInfos, todayScore, keyData } }) => {
  const { firstName } = userInfos
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData
  return {
    firstName: firstName.toString(),
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
 *
 * @param {object} data - The response from the query
 * @returns {object} Return the formatted data
 */
export const activityFormatter = ({ data: { sessions } }) =>
  sessions.map(session => {
    const { day, kilogram, calories } = session
    return { day: getDayNumber(day), kilogram: parseInt(kilogram, 10), calories: parseInt(calories, 10) }
  })

/**
 * It takes the data from the query and formats it into a format that the React component can use
 *
 * @param {object} data - The response from the query
 * @returns {object} Return the formatted data
 */
export const averageFormatter = ({ data: { sessions } }) =>
  sessions.map(session => {
    const { day, sessionLength } = session
    return { day: getDayFirstLetter(day).toString(), sessionLength: parseInt(sessionLength, 10) }
  })

/**
 * It takes a string as an argument and returns a translated string
 * @param {string} text - The string to be translated
 * @returns the translated text.
 */
const translateText = text => {
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
      return text.toString()
  }
}

/**
 * It takes the data from the query and formats it into a format that the React component can use
 *
 * @param {object} data - The response from the query
 * @returns {object} Return the formatted data
 */
export const performanceFormatter = ({ data }) => {
  const { kind: kinds, data: sessions } = data

  return sessions.map(session => {
    const { value, kind } = session
    return { value: parseInt(value, 10), kind: translateText(kinds[kind]) }
  })
}
