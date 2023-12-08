import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import DisplayAllBooks from './components/DisplayAllBooks'
import BookForm from './components/BookForm'
import DisplayOneBook from './components/DisplayOneBook'
import EditBook from './components/EditBook'

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<DisplayAllBooks />} />
      <Route path="/books/create" element={<BookForm />} />
      <Route path="/books/:id" element={<DisplayOneBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
    </Routes>
   </>
  )
}

export default App
