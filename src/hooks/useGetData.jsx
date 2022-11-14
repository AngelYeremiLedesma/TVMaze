import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { fetcher } from '../services/fetcher'

export default function useGetData (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  // const { signal, abort } = new AbortController()

  const getData = async () => {
    try {
      // const req = await fetch(apiUrl)
      // const req = await fetch(apiUrl, { signal })
      const req = await fetcher({ url })
      setData(req)
      // !req.ok && setError(req.statusText)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()

    // return () => abort()
  }, [url])

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  return { data, loading, error }
}
