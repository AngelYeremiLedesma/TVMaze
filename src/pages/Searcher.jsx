import axios from 'axios'
import { useEffect, useState } from 'react'
import Cardd from './Cardd'
import useDebounce from '../hooks/useDebounce'
import { NavLink } from 'react-router-dom'

const Searcher = () => {
  const [value, setValue] = useState('')
  const [shows, setShows] = useState([])

  const debouncedValue = useDebounce(value, 500)

  const searchUsers = async () => {
    console.log(value)
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${value}`
    )
    if (response && response.data) {
      setShows(response.data || shows)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }

  useEffect(() => {
    searchUsers()
  }, [debouncedValue])

  return (
    <>
      <header>
        <NavLink to='/main'>
          <img style={{ width: '150px', marginRight: '20px' }} src='https://static.tvmaze.com/images/tvm-header-logo.png' alt='logo' />
        </NavLink>
        <form className='w-50 '>
          <input className='form-control rounded-20' type='text' placeholder='Buscar...' onChange={handleSubmit} onSubmit={handleSubmit} />
        </form>
      </header>
      <div className='container mt-5'>
        <h1>Resultados</h1>
      </div>
      <div className='container d-flex flex-wrap'>
        {shows.map(({ show }) => (
          show.image && <Cardd key={show.id} show={show} />
        )
        )}
      </div>
      {shows.length === 0 && <div className='d-flex justify-content-center'><img src='../../public/assets/doge.png' /></div>}

    </>

  )
}

export default Searcher
