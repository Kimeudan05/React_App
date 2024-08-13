import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className="container">
      <h2 className="text-center">
        Look at the different ways we can help
      </h2>
      <div className="d-flex justify-content-center p-3">
        <Link to='faq' className='m-3'>Faq</Link>
        <Link to='email' className='m-3'>send mail</Link>
      </div>
      <main><Outlet/></main>
    </div>
  )
}

export default HelpLayout