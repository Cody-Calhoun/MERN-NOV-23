import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const EditBook = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [book, setBook] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                setBook(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/books/${id}`, book)
            .then(res => {
                if(res.data.errors) {
                    console.log("In Error Message")
                    setErrors(err.response.data.errors)
                } else {
                    navigate("/")
                }
            })
            .catch(err => setErrors(err.response.data.errors))
    }


  return (
    <div>
      <form className="col-md-4 offset-4" onSubmit={submitHandler}>
      <h1 className="mb-3">Edit Book</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={book.title} onChange={changeHandler}/>
          {errors.title ? <p className="text-danger">{errors.title.message}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" name="author" value={book.author} onChange={changeHandler}/>
          {errors.author ? <p className="text-danger">{errors.author.message}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="pages" className="form-label">Pages</label>
          <input type="number" className="form-control" id="pages" name="pages" value={book.pages} onChange={changeHandler}/>
          {errors.pages ? <p className="text-danger">{errors.pages.message}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="publishYear" className="form-label">Publish Year</label>
          <input type="number" className="form-control" id="publishYear" name="publishYear" value={book.publishYear} onChange={changeHandler}/>
          {errors.publishYear ? <p className="text-danger">{errors.publishYear.message}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input type="text" className="form-control" id="genre" name="genre" value={book.genre} onChange={changeHandler}/>
          {errors.genre ? <p className="text-danger">{errors.genre.message}</p> : null}
        </div>
        <button type="submit" className="btn btn-primary">Edit Book</button>
      </form>
    </div>
  )
}

export default EditBook