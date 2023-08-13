import React, { useContext, useEffect } from 'react'
import MovieCard from '../Components/MovieCard'
import { movies } from '../db'
import dataProvider, { movieContext } from '../context/dataProvider'
import { genreFilter, ratingFilter, searchFilter, yearFilter } from '../utils'

function Home() {

const {movie,movieDispatch}= useContext(movieContext)

const year = (new Date()).getFullYear();
const years = Array.from(new Array(34),( val, index) =>  year - index );

const genreFiltered = genreFilter(movie.movieList,movie.genre)

const yearFiltered = yearFilter(genreFiltered,movie.year)

const ratingFiltered = ratingFilter(yearFiltered,movie.rating)
  
const searchFiltered = searchFilter(ratingFiltered,movie.search)

 




  return (
    <div className='container'>
    <div className="navbar" style={{backgroundColor:"black", padding:"1rem"}}>
     <h3>movies</h3>
     <div className="genre" onChange={(e)=>movieDispatch({type:"SET_GENRE",payload:e.target.value})}>
       <select name="genre" id="genre">
       <option value="">genre</option>
        <option value="Crime">crime</option>
        <option value="Action">action</option>
        <option value="Fantasy">fantasy</option>
        <option value="Sci-Fi">sci-fi</option>
        <option value="Romance">romance</option>
        <option value="Adventure">adventure</option>
       </select>
     </div>
     <div className="release-year">
        <select name="release-year" id="release-year" onChange={(e)=>movieDispatch({type:"SET_YEAR",payload:e.target.value})}>
           <option value="">year</option>
          {years.map(item => <option value={item}>{item}</option>)}
        </select> 
     </div>
     <div className="rating">
       <select name="rating" id="rating" onChange={(e)=> movieDispatch({type:"SET_RATING", payload:e.target.value})}>
        <option value="">rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
       </select> 
     </div>
     <div className="new">
       <button className='btn btn-secondary'>ADD movie</button>
     </div>
    </div>
    <div className="row gy-2">
      {searchFiltered.map((data)=><div className='col'><MovieCard data={data}/></div>)}
      </div>
    </div>
  )
}

export default Home
