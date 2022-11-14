import useGetData from '../hooks/useGetData'
import Loading from '../components/common/Loading'

const Cast = ({ code }) => {
  const apiUrl = 'https://api.tvmaze.com/shows/' + code + '/cast'

  const { data, loading } = useGetData(apiUrl)

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <h2 className='mt-3'>Cast</h2>
      <div className='container d-inline-flex flex-wrap'>
        {data.map(({ person }) => (
          <div key={person.id}>
            {person.image.medium && <div className='p-1 '><img src={person.image.medium} /><p>{person.name}</p></div>}
          </div>
        )
        )}
      </div>
    </>
  )
}

export default Cast
