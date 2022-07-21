import { useState, useEffect } from 'react'

export function useFetch(url) {
  console.log(url, "URL");
  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    
    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data, "<<=data")
        setData(data)
      } 
      catch (err) {
        setError(true)
      } 
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, data, error }
}