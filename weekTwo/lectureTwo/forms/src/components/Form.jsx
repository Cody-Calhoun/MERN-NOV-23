import React, {useState} from 'react'

const Form = () => {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [views, setViews] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleYear = (e) => {
        setYear(e.target.value)
    }

    const handleViews = (e) => {
        setViews(e.target.value)
    }


    const createMovie = (e) => {
        e.preventDefault()
        console.log(e)
    }

  return (
    <div>
        <form onSubmit={createMovie}>
            <label htmlFor="title">Movie Title:</label>
            <input type="text" name="title" id="" onChange={handleTitle}/>
            <label htmlFor="year">Release Year:</label>
            <input type="number" name="" id="" onChange={handleYear}/>
            <label htmlFor="view">Total Views:</label>
            <input type="number" onChange={handleViews}/>
            <button type="submit">Add Movie</button>
        </form>
        <div>
            <h2>Movie Title: {title}</h2>
            <h3>Movie Year: {year}</h3>
            <h3>Movie Views: {views}</h3>
        </div>
    </div>
  )
}

export default Form