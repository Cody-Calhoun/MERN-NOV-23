import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import People from './components/People'
import Planet from './components/Planet'

function App() {

  return (
    <>
      <h1>Luke ApiWalker</h1>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People/>}/> 
        <Route path="/planets/:id" element={<Planet/>}/> 
      </Routes>
    </>
  )
}

export default App
