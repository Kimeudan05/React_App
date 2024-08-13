import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const ProjectsLayout = () => {
  return (
    <div className="container">
      <h2 className="text-center">Projects</h2>
      <p>I have done several projects which am freally proud of.</p>

      <ul className='d-flex flex-column p-2'>
        <NavLink to='rock'>Rock paper</NavLink>
        <NavLink to='calculator'>calculator</NavLink>
        <NavLink to='dom'>Dom</NavLink>
      </ul>
      <main><Outlet/></main>
    </div>
  )
}
export default ProjectsLayout