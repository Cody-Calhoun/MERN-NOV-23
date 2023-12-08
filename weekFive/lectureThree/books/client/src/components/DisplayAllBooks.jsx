import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const DisplayAllBooks = () => {

  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/api/books')
      .then(res => {
        console.log(res.data)
        setBooks(res.data)
      })
      .catch(err => console.log(err))
  } , [])

  const clickHandler = (e) => {
    navigate(`/books/${e.target.value}`)
  }


  return (
    <div>
      <h1>Display All Books</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Publish Year</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book, i) => {
              return <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.publishYear}</td>
                <td>{book.genre}</td>
                <td>
                  {/* <Link to={`/books/${book_id}`}> View Book</Link> */}
                  <button onClick={clickHandler} value={book._id} className="btn btn-info">View Book</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayAllBooks