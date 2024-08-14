import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const ProjectsLayout = () => {
  return (
    <div className="container">
      <h2 className="text-center">Projects</h2>
      <p>I have done several projects which am really proud of.</p>
      <Outlet/>
    </div>
  )
}
export default ProjectsLayout