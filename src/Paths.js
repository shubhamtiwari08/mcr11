import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Stared from './pages/Stared'
import SingleMovie from './pages/SingleMovie'

function Paths() {
  return (
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:singleMovieId' element={<SingleMovie/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/starred' element={<Stared/>} />
     </Routes>
  )
}

export default Paths
