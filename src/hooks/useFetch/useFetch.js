import { useEffect, useReducer } from "react"
import { requestStarted, requestSuccessful, requestFailed } from "./reducer/actionCreators"
import reducer, { initialState } from "./reducer/reducer"

const useFetch = ({ url }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async () => {
      dispatch(requestStarted())

      try {
        const response = await fetch(url, { signal: abortController.signal })
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        dispatch(requestSuccessful(data))
      } catch (err) {
        // only call dispatch when we know the fetch was not aborted
        if (!abortController.signal.aborted) {
          dispatch(requestFailed(err.message))
        }
      }
    }

    fetchData()

    return () => {
      abortController.abort()
    }
  }, [url])

  return state
}

export default useFetch
