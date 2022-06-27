import actionTypes from "./actionTypes"

export const initialState = {
  isLoading: true,
  data: null,
  error: null,
}
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.REQUEST_SUCCESSFUL:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      }
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
