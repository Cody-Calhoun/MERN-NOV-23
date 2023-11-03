import React, {useState} from 'react'

const Form = ({movie, setMovie}) => {
    // const {movie, setMovie} = props

    const changeHandler = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }
    
  return (
    <div>
        <form>
            <div>
                {
                    // Conditional rendering
                    movie.title.length < 2 && movie.title.length !== 0?
                    // What do to if true
                    <p style={{"color":"red"}}>Title must be at least 2 characters</p> :
                    // what to do if false
                    null   
                }
                <label htmlFor="">Movie Title</label>
                <input type="text" name="title" placeholder="title" onChange={changeHandler} />
            </div>
            <div>
            {
                    movie.year < 2000 && movie.year !== 0 && movie.year !== ""?
                    <p style={{"color":"red"}}>Movie must be a recentish movie</p> :
                    // what to do if false
                    null   
                }
                <label htmlFor="">Release Year</label>
                <input type="number" name="year" placeholder="year" onChange={changeHandler}/>
            </div>
            <div>
                {
                    movie.views < 10 && movie.views !== 0 && movie.views !== ""?
                    <p style={{"color":"red"}}>Sheesh movie doesn't even have at least 10 views??</p> :
                    null
                }
                <label htmlFor="">Total Views</label>
                <input type="number" name="views" placeholder="views" onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <select name="genre" id="" onChange={changeHandler}>
                    <option value="">Select Genre</option>
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>
                    <option value="horror">Horror</option>
                </select>
            </div>
            <button>Create Movie</button>
        </form>
    </div>
  )
}

export default Form