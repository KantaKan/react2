import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
        <p><Link to='/'>HOME</Link></p>
        <p><Link to='/owner'>owner</Link></p>
    </nav>
  )
}

export default Navbar