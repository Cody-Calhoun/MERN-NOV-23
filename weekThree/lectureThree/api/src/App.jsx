import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  
  // const [character, setCharacter] = useState({})
  const [people, setPeople] = useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/50000000")
    .then(res => {
      console.log(res.data.results)
      setPeople(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
    }, [])
  
  // const getCharacters = () => {
  //   axios.get("https://swapi.dev/api/people")
  //   .then(res => {
  //     console.log(res.data.results)
  //     setPeople(res.data.results)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }


  return (
    <>
      {/* <p>Press to get first 10 people!</p>
      <button onClick={getCharacters}>Press Here!</button> */}
      {
        people.map((person, i) => (
          <div key={i}>
            <p>Person Name:{person.name} | Person Mass: {person.mass}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
