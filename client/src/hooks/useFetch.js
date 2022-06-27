import { useState, useEffect } from 'react'

/**
 * Hook that fetches data from a URL and returns the data, loading state, and error.
 * @param {URL} url - The URL to fetch.
 * @returns {Object} state The request state The data, loading state, and error.
 * @returns {Array.<Object>} state.data The fetched data or an empty array
 * @returns {Boolean} state.loading The loading status
 * @returns {Error} state.error The error if any
 */
function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch(url, { signal: abortController.signal })
          const result = await response.json()
          if (!response.ok) {
            const fetchError = (data && data.message) || response.status
            return Promise.reject(fetchError)
          }
          setData(result.data)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
        return null
      }, 0)
    }

    if (data.length === 0) {
      setLoading(true)
      fetchData()
    }

    return () => {
      abortController.abort()
    }
  }, [url, data])

  return { data, loading, error }
}

export default useFetch
