import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './component.css'
import { movieContext } from '../context/dataProvider'

function Navbar() {

  const {movieDispatch} = useContext(movieContext)

  return (
    <div className='navbar'>
    <h3>IMDB</h3>
    <input type="text" onChange={(e)=>movieDispatch({type:"SEARCH",payload:e.target.value})} placeholder='search movies..' />
    <div className="navlinks ">
      <ul>
        <li><NavLink to={'/'} >movies</NavLink></li>
        <li><NavLink to={'/starred'} >starred</NavLink></li>
        <li><NavLink to={'/wishlist'} >wishlist</NavLink></li>
      </ul>    
    </div>  
    </div>
  )
}

export default Navbar
