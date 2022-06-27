import actionTypes from "./actionTypes"

export const requestStarted = () => ({
  type: actionTypes.REQUEST_STARTED,
})

export const requestSuccessful = (data) => ({
  type: actionTypes.REQUEST_SUCCESSFUL,
  payload: data,
})

export const requestFailed = (message) => ({
  type: actionTypes.REQUEST_FAILED,
  payload: message,
})
