import './App.css'
import Movie from './components/Movie'
import Nav from './components/Nav'

function App() {


  return (
    <>
      <Nav firstName='Will' lastName='Calhoun'  />
      <Movie title="Nacho libre" releaseYear="2003" genre="comedy" rating="3"/>
      <Movie title="Lord of the Rings" releaseYear="2001" genre="adventure" rating="3"/>
    </>

  )
}

export default App
