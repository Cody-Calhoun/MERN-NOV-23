import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [movie, setMovie] = useState({
    title: "",
    year: 0,
    views: 0,
    genre: "",
})
// 
// const [movieYear, setMovieYear] = const [movieTitle, setMovieTitle] = useState("")useState("")
// const [movieViews, setMovieViews] = useState("")
// const [movieGenre, setMovieGenre] = useState("")

  return (
    <>
      <Form movie={movie} setMovie={setMovie}/>
      <Display movie={movie} />
    </>
  )
}

export default App
