import React from 'react'
import './MovieList.css'
const MovieList = ({film}) => {
  return (
    <div className='carte'>
        <h1>{film.title}</h1>
        {/* <p>{film.description}</p> */}
        <img src={film.posterURL}  alt='movie'/>
        <h2>{film.rating}</h2>
    </div>
  )
}

export default MovieList