import './App.css'
import { useState } from 'react'
import Movie from './components/Movie'

function App() {
//      getter, setter
  const [count, setCount] = useState(0)
  
  // const h1Alert = () => {
  //   alert("You clicked on this event")
  // }

  const increaseCount = () => {
    setCount(count+1)
  }

  return (
    <>
    <h1 onClick={increaseCount}>Click Me</h1>
    <p>Total count: {count}</p>

    <Movie title={"Secret Life of Walter Mitty"} year={2003} timesViewed={0} />
    <Movie title={"Spiderman 2"} year={2004} timesViewed={0} />
    <Movie title={"Harry Potter: Prisoner of Azkaban"} year={2008} timesViewed={0} />
    </>
  )
}

export default App
