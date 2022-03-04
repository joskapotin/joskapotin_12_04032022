export const unitConversion = (number) => {
  if (number >= 1000) {
    return `${(number / 1000).toString().replace('.', ',')}k`
  }
  return `${number}`
}
