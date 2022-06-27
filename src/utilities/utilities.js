/**
 * Given a number, return a string that represents the number in a more human readable format
 *
 * @param number - The number to be converted.
 * @returns A string.
 */
export const unitConversion = (number) => {
  if (number >= 1000) {
    return `${(number / 1000).toString().replace('.', ',')}k`
  }
  return `${number}`
}

/**
 * Give the number of the day from a date formated as yyyy/mm/dd
 *
 * @param {string} date
 * @returns {number} Return the number of the day
 */
export const getDayNumber = new Date().getDay()
