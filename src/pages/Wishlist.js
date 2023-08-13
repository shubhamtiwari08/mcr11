import React, { useContext } from 'react'
import { movieContext } from '../context/dataProvider'
import MovieCard from '../Components/MovieCard'

function Wishlist() {
 const {movie} = useContext(movieContext)

 const wishData = movie.movieList.filter((item)=> item?.wishlist === true)


  return (
    <div>
    <div className="row">
    {wishData.map((data)=> <div className='col'> <MovieCard data={data}/> </div>)}
    </div>
    </div>
  )
}

export default Wishlist
