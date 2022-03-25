/**
 * A constant that is assigned the api url
 */
const API_URL = 'http://localhost:3000'

/**
 * Function that takes in a user id and returns a url that points to the user's main data.
 *
 * @param {string} id - The id of the user you want to get data for.
 * @return {URL} - The url that points to the user's main data
 */
export const getUserMainDataUrl = (id) => `${API_URL}/user/${id}`

/**
 * Function that takes in a user id and returns a url that points to the user's activity data.
 *
 * @param {string} id - The id of the user you want to get the activity for.
 * @return {URL} - The url that points to the user's activity data
 */
export const getUserActivityUrl = (id) => `${API_URL}/user/${id}/activity`

/**
 * Function that takes in a user id and returns a url that points to the user's average session data.
 *
 * @param {string} id - The id of the user you want to get the average session for.
 * @return {URL} - The url that points to the user's average session data
 */
export const getUserAverageSessionUrl = (id) =>
  `${API_URL}/user/${id}/average-sessions`

/**
 * Function that takes in a user id and returns a url that points to the user's performance data.
 *
 * @param {string} id - The id of the user you want to get the performance for.
 * @return {URL} - The url that points to the user's performance data
 */
export const getUserPerformanceUrl = (id) => `${API_URL}/user/${id}/performance`
