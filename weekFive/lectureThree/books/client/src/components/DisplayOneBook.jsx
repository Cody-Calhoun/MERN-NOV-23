import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'


const DisplayOneBook = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [book, setBook] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}`)
      .then(res => {
        setBook(res.data)
      })
      .catch(err => console.log(err))
  } , [])

  const editHandler = (e) => {
    navigate(`/books/edit/${e.target.value}`)
  }

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:8000/api/books/${e.target.value}`)
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))
  }


  return (
    <div className='col-md-6 offset-3'>
      <h1>{book.title}</h1>
      <p className='mt-3'>Author: {book.author}</p>
      <p className='mt-3'>Pages: {book.pages}</p>
      <p className='mt-3'>Publish Year: {book.publishYear}</p>
      <p className='mt-3'>Genre: {book.genre}</p>
      <button onClick={editHandler} value={book._id} className="btn btn-info">Edit Book</button>
      <button onClick={deleteHandler} value={book._id} className="btn btn-danger">Delete Book</button>
    </div>
  )
}

export default DisplayOneBook