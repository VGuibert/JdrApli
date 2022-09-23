import React from 'react'
import './header.css'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className='link'>D&D app</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
