import { useState, useEffect, useCallback } from "react"

export default function useFetch({ url }) {
  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: null,
  })

  const handleFetch = useCallback(
    async ({ abortController }) => {
      try {
        const response = await fetch(url, { signal: abortController.signal })
        if (!response.ok) throw new Error(response.statusText)
        const data = await response.json()

        setState(prev => ({
          ...prev,
          isLoading: false,
          data,
        }))
      } catch (error) {
        // only call dispatch when we know the fetch was not aborted
        if (!abortController.signal.aborted) {
          setState(prev => ({
            ...prev,
            isLoading: false,
            error: error.message,
          }))
        }
      }
    },
    [url]
  )

  useEffect(() => {
    const abortController = new AbortController()
    handleFetch({ abortController })
    return () => {
      abortController.abort()
    }
  }, [url])

  return state
}
