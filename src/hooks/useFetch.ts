"use client"
import { useEffect, useState } from 'react'

const useFetch = <T> (input: string | URL | globalThis.Request, options?: RequestInit) => {

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    await fetch(input, options ?? {})
      .then(async (res) => {
        const fetchedData = await res.json()
        setData(fetchedData)
      })
      .catch((err) => {
        console.log('error', err)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { loading, data, error, fetchData }
}

export default useFetch