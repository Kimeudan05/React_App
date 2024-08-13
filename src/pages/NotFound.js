import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container">
      <h2>404 page</h2>
      <p>OOps no such page</p>
      <Link to={'/'}>Go home</Link>
    </div>
  )
}

export default NotFound