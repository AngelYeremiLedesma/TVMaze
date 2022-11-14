import { Navigate, Route, Routes } from 'react-router-dom'
import Landpage from './pages/Landpage'
import Show from './pages/Show'

export default function Paths () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Landpage />} />
      <Route path='/show/:code' element={<Show />} />
      <Route path='/404' element={<Navigate to='/home' />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  )
}
