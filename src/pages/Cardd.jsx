import { Link } from 'react-router-dom'

const Cardd = ({ show }) => {
  return (
    <Link to={`/show/${show.id}`} className='col-md-2'>
      <article style={{ margin: '10px 10px', cursor: 'pointer' }} className='d-flex flex-column justify-content-center  bg-dark text-white'>
        <img src={show.image.medium} />
        <p className='text-center mt-3'>{show.name}</p>
      </article>
    </Link>
  )
}

export default Cardd
