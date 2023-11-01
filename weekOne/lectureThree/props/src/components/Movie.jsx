import React from 'react'

const Movie = props => {
    const {title: movie, releaseYear, genre, rating} = props;

  return (
    <div>
        <h1>Movie Title: {movie}</h1>
        <h2>Release Year: {releaseYear}</h2>
        <h3>Genre: {genre}</h3>
        {/* <h4>Rating: {rating}</h4> */}
    </div>
  )
}

export default Movie