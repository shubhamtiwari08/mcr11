import React, { useContext, useState } from 'react'
import { movieContext } from '../context/dataProvider'

function NewMovie() {

    const {setToggle,toggle,movie,movieDispatch} = useContext(movieContext)

    const num = Math.floor(Number(Math.random()*30))
    console.log(num)


    const [newMovie,setNewMovie] = useState({
        id:num,
        title: '',
        year: 0,
        genre: [],
        rating: 0,
        director: '',
        writer: '',
        cast: [],
        summary:"",
        imageURL:""
    })


  const handleInput = (e) =>{
    const name = e.target.name
    const value = e.target.value

    if(name == 'cast' || name == 'genre'){
        setNewMovie({...newMovie,[name]:[value]})
    }else{
        setNewMovie({...newMovie,[name]:value})
    }
  console.log(newMovie)
    
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
      movieDispatch({type:"SET_DATA", payload:[...movie.movieList,newMovie]})
      setToggle(false)
  }







  return (
    <div className='container forms'>
      <form className='forms' >
        <label htmlFor="title">title</label>
        <input type="text" id='title' name='title' value={newMovie.title}  onChange={handleInput} />
        <label htmlFor="year">year</label>
        <input type="text" name='year' id='year' value={newMovie.year} onChange={handleInput}/>
        <label htmlFor="genre">genre</label>
        <input type="text" name='genre' id='genre' value={newMovie.genre} onChange={handleInput}/>
        <label htmlFor="director">director</label>
        <input type="text" name='director' id='director' value={newMovie.director} onChange={handleInput}/>
        <label htmlFor="writer">writer</label>
        <input type="text" name='writer' id='writer' value={newMovie.writer} onChange={handleInput}/>
        <label htmlFor="castDarabont">cast</label>
        <input type="text" name='cast' id='cast' value={newMovie.cast} onChange={handleInput}/>
        <label htmlFor="summary">summary</label>
        <input type="text" name='summary' id='summary' value={newMovie.summary} onChange={handleInput}/>
        <label htmlFor="imageURL">imageURL</label>
        <input type="text" name='imageURL' id='year' value={newMovie.imageURL} onChange={handleInput}/>
        <div className="row">
        <div className="col">
        <button onClick={handleSubmit}>add</button>
        </div>
        <div className="col">
        <button onClick={()=>setToggle(false)}>cancel</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default NewMovie
