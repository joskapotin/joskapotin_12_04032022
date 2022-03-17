const API_URL = 'http://localhost:3000'

export const getUserMainDataUrl = (id) => `${API_URL}/user/${id}`

export const getUserActivityUrl = (id) => `${API_URL}/user/${id}/activity`

export const getUserAverageSessionUrl = (id) =>
  `${API_URL}/user/${id}/average-sessions`

export const getUserPerformanceUrl = (id) => `${API_URL}/user/${id}/performance`
