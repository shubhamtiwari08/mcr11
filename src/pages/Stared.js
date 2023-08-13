import React, { useContext } from 'react'
import { movieContext } from '../context/dataProvider'
import MovieCard from '../Components/MovieCard'

function Stared() {

  const {movie} = useContext(movieContext)

  const starredData = movie.movieList.filter((item)=>{
    return item?.starred === true
  })

  return (
    <div>
    <div className="row">
    {starredData.map((data)=> <div className='col'> <MovieCard data={data}/> </div>)}
    </div>
    </div>
  )
}

export default Stared
