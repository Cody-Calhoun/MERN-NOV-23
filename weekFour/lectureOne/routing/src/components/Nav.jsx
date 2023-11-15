import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div>
        <h1>Nav</h1>
        <Link to={"/"}>Landing Page</Link>
        <br />
        <Link to={"/home"}>Home</Link>
        <br />
        <Link to={"/form"}>Form</Link>
    </div>
  )
}

export default Nav