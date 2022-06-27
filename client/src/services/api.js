import useFetch from '../hooks/useFetch'

/**
 * A constant that is assigned the api url
 */
const API_URL_USER = 'http://localhost:3000/user'

/**
 * Function that takes in a user id fetch the user main data and return the request state and results.
 *
 * @param {string} id - The id of the user you want to get data for.
 * @returns {Object} state The request state The data, loading state, and error.
 * @returns {Array.<Object>} state.data The fetched data or an empty array
 * @returns {Boolean} state.loading The loading status
 * @returns {Error} state.error The error if any
 */
export const getUserMainDataUrl = (id) => useFetch(`${API_URL_USER}/${id}`)

/**
 * Function that takes in a user id fetch the user's activity data and return the request state and results.
 *
 * @param {string} id - The id of the user you want to get the activity for.
 * @returns {Object} state The request state The data, loading state, and error.
 * @returns {Array.<Object>} state.data The fetched data or an empty array
 * @returns {Boolean} state.loading The loading status
 * @returns {Error} state.error The error if any
 */
export const getUserActivityUrl = (id) =>
  useFetch(`${API_URL_USER}/${id}/activity`)

/**
 * Function that takes in a user id fetch the user's average session data and return the request state and results.
 *
 * @param {string} id - The id of the user you want to get the average session for.
 * @returns {Object} state The request state The data, loading state, and error.
 * @returns {Array.<Object>} state.data The fetched data or an empty array
 * @returns {Boolean} state.loading The loading status
 * @returns {Error} state.error The error if any
 */
export const getUserAverageSessionUrl = (id) =>
  useFetch(`${API_URL_USER}/${id}/average-sessions`)

/**
 * Function that takes in a user id fetch the user's performance data and return the request state and results.
 *
 * @param {string} id - The id of the user you want to get the performance for.
 * @returns {Object} state The request state The data, loading state, and error.
 * @returns {Array.<Object>} state.data The fetched data or an empty array
 * @returns {Boolean} state.loading The loading status
 * @returns {Error} state.error The error if any
 */
export const getUserPerformanceUrl = (id) =>
  useFetch(`${API_URL_USER}/${id}/performance`)
