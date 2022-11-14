import useGetData from '../hooks/useGetData'
import Loading from '../components/common/Loading'
import { useState } from 'react'
import Episodes from './Episodes'

const Seasons = ({ code }) => {
  const apiUrl = 'https://api.tvmaze.com/shows/' + code + '/seasons'

  const { data, loading } = useGetData(apiUrl)

  const [currentSeason, setCurrentSeason] = useState('')

  if (loading) {
    return <Loading />
  }

  const showEpisodes = (id) => {
    setCurrentSeason(id)
  }

  return (
    <>
      <h2 className='mt-2'>Seasons</h2>
      <div className='d-flex flex-column'>
        {
        data.map((dato, index) => (
          <div key={dato.id}>
            {
              dato.image && <div className='d-inline-flex' style={{ cursor: 'pointer' }} onClick={() => showEpisodes(dato.id)}>
                <img style={{ width: '8rem', marginBottom: '2rem' }} src={dato.image.medium} />
                <div style={{ marginLeft: '2rem' }}>
                  <h3>Season {dato.number}</h3>
                <div className='m-1' dangerouslySetInnerHTML={{ __html: dato.summary }} />
              </div>
            </div>
            }
            {currentSeason === dato.id && <div className='d-flex flex-column' style={{marginBottom: '30px', marginLeft: '50px' }}><Episodes code={dato.id} /></div>}
          </div>
        ))
        }
      </div>
    </>
  )
}

export default Seasons
