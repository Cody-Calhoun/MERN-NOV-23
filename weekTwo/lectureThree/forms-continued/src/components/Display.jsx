import React from 'react'

const Display = ({movie}) => {
  return (
    <div>
        <h1>Movie Title: {movie.title}</h1>
        <h3>Release Year:{movie.year}</h3>
        <h3>Total Views:{movie.views}</h3>
        <h3>Genre:{movie.genre}</h3>
    </div>
  )
}

export default Display