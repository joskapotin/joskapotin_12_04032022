import { useState, useEffect } from 'react'

/**
 * @typedef FetchState
 * @type {Array}
 * @property {Array.<Object>} data - the fetched data or an empty array
 * @property {Boolean} loading - the loading status
 * @property {Error} error - the error if any
 */

/**
 * Hook that fetches data from a URL and returns the data, loading state, and error.
 * @param {URL} url - The URL to fetch.
 * @returns {FetchState} The data, loading state, and error.
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

  return [data, loading, error]
}

export default useFetch
