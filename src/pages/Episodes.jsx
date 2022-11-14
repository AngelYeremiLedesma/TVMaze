import Loading from '../components/common/Loading'
import useGetData from '../hooks/useGetData'

const Episodes = ({ code }) => {
  const apiUrl = 'https://api.tvmaze.com/seasons/' + code + '/episodes'

  const { data, loading } = useGetData(apiUrl)

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      {data.map((episode) => (<div key={episode.id}><br /><a href={episode._links.self.href} style={{ color: 'gray', margin: '0px' }}>{episode.number}. {episode.name}</a></div>))}
    </div>
  )
}

export default Episodes
