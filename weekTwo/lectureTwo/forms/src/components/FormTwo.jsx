import React, {useState} from 'react'

const FormTwo = () => {
// This is a way to have less handlers and less state
    const [movie, setMovie] = useState({
        title: '',
        year: '',
        views: ''
    })

    const handleMovie = e => {
        // console.log(movie['title'])
        console.log(e.target)
        setMovie({...movie, [e.target.name]:e.target.value})
    }

    const createMovie = e => {
        e.preventDefault()
        console.log(movie)
    }

  return (
    <div>
        <hr />
        <h1>Form Two</h1>
        <form onSubmit={createMovie}>
            <label htmlFor="title">Movie Title:</label>
            <input type="text" name="title" onChange={handleMovie}/>
            <label htmlFor="year">Release Year:</label>
            <input type="number" name="year" id="" onChange={handleMovie}/>
            <label htmlFor="view">Total Views:</label>
            <input type="number" name='views' onChange={handleMovie}/>
            <button type="submit">Add Movie</button>
        </form>
        <h1>Movie Title: {movie.title}</h1>
    </div>
  )
}

export default FormTwo