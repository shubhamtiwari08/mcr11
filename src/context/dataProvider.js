import React, { createContext, useEffect, useReducer, useState } from 'react'
import { movies } from '../db'

export const movieContext = createContext()

const movieReducer = (state,{type,payload})=>{
  switch(type){
          case"SET_DATA":
          return {...state,movieList:payload}
          case"SET_GENRE":
          return {...state,genre:payload}
          case"SET_YEAR":
          return {...state,year:payload}
          case "SET_RATING":
          return {...state,rating:payload}
          case "SEARCH":
            console.log("searcj", payload)
            return {...state,search:payload}
  }
}


function MovieProvider({children}) {
  const [toggle,setToggle] = useState(false)
const [movie , movieDispatch]=useReducer(movieReducer,{movieList:movies,genre:"",rating:"",year:"",search:""})
 
const handleStar = (key)=>{
  console.log("star")
  const starredMovie = movie.movieList.map((item)=>{
    if(item.id == key){
      if(item?.starred === false){
      return {...item,starred:true}
      }else{
        return {...item,starred:false}
      }
    }
    return item
  })
  movieDispatch({type:"SET_DATA",payload:starredMovie})
}


  return (
    <movieContext.Provider value={{toggle,setToggle,movie,handleStar,movieDispatch}}>
     {children}
    </movieContext.Provider>
  )
}

export default MovieProvider
