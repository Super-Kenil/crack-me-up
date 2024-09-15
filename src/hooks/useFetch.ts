"use client"
import { useEffect, useState } from 'react'

const useFetch = <T> (input: string | URL | globalThis.Request, options?: RequestInit) => {

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    await fetch(input, options ?? {})
      .then(async (res) => {
        const fetchedData = await res.json()
        setData(fetchedData)
      })
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [input])

  return { loading, data, error, fetchData }
}

export default useFetch