import React, {useState} from 'react'
import axios from 'axios'

const BookForm = () => {

  const [book, setBook] = useState({
    title: '',
    author: '',
    pages: '',
    publishYear: '',
    genre: ''
  })

  const [errors, setErrors] = useState({})

  const changeHandler = (e) => {
    setBook({...book, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // if (formValidations(book)) {
      axios.post('http://localhost:8000/api/books', book)
        .then(res => {
          setBook({
            title: '',
            author: '',
            pages: '',
            publishYear: '',
            genre: ''
        })
      })
        .catch(err => {
          // console.log(err.response.data.errors)
          setErrors(err.response.data.errors)
        })
  // console.log("After the axios.post")

}

  // const formValidations = (book) => {
  //   let isValid = true
  //   let bookErrors = {}

  //   if(book.title.length < 3) {
  //     bookErrors.title = "Title must be at least 3 characters"
  //     isValid = false
  //   }

  //   if(book.author.length < 3) {
  //     bookErrors.author = "Author must be at least 3 characters"
  //     isValid = false
  //   }

  //   if(book.pages < 1) {
  //     bookErrors.pages = "Pages must be at least 1"
  //     isValid = false
  //   }

  //   if(book.publishYear < 1) {
  //     bookErrors.publishYear = "Publish Year must be at least 1"
  //     isValid = false
  //   }

  //   if(book.genre.length < 3) {
  //     bookErrors.genre = "Genre must be at least 3 characters"
  //     isValid = false
  //   }

  //   setErrors(bookErrors)
  //   return isValid
  // }

  return (
    <div>
      <form className="col-md-4 offset-4" onSubmit={submitHandler}>
      <h1 className="mb-3">Create a Book</h1>
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
        <button type="submit" className="btn btn-primary">Create a Book</button>
      </form>
    </div>
  )
}

export default BookForm