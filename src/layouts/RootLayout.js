import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="root">
      <header className='navbar bg-dark d-flex justify-content-end p-2'>
        <nav className='text-uppercase lh-lg text-decoration-none'>
          <Link className='m-2 text-decoration-none' to='/'>Home</Link>
          <Link className='m-2 text-decoration-none' to='/projects'>Projects</Link>
          <Link className='m-2 text-decoration-none' to='/about'>About</Link>
          <Link className='m-2 text-decoration-none' to='/help'>Help</Link>
        </nav>
      </header>
      <main>
        <h4 className='text-center text-primary p-3 lh-3'>welcome to @Dante Solutions where we convert code to useful user interfaces and make our clients satisfied</h4>
        <Outlet/>
      </main>
      
    </div>
  )
}

export default RootLayout