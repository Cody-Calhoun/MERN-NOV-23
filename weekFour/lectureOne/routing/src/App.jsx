import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import Nav from './components/Nav'
import Word from './components/Word'
import Form from './components/Form'

function App() {


  return (
    <>
    <h1>Routing Practice</h1>
      <Nav/>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path='/:word/:color' element={<Word/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path='/*' element={<h1>404 Not Found</h1>}/>
        </Routes>
    </>
  )
}

export default App
