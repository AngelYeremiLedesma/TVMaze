import { useParams, NavLink } from 'react-router-dom'
import useGetData from '../hooks/useGetData'
import Cast from './Cast'
import Seasons from './Seasons'
import Loading from '../components/common/Loading'

const Show = () => {
  const { code } = useParams()

  const apiUrl = 'https://api.tvmaze.com/shows/' + code

  const { data, loading } = useGetData(apiUrl)

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <header>
        <NavLink to='/main'>
          <img style={{ width: '150px', marginRight: '20px' }} src='https://static.tvmaze.com/images/tvm-header-logo.png' alt='logo' />
        </NavLink>
      </header>
      <div className='container mt-5'>
        <div className='w-5 d-inline-flex'>
          <img style={{ width: '400px' }} src={data.image.original} className='mr-5' />
          <div className='flex-column'>
            <h1 className='font-weight-bold'>{data.name}</h1>
            <div className='container text-justify' dangerouslySetInnerHTML={{ __html: data.summary }} />
          </div>
        </div>
        <Cast code={code} />
        <Seasons code={code} />
      </div>
    </>
  )
}

export default Show
