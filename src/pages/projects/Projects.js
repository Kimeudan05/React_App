import { Link, useLoaderData } from "react-router-dom"

const Projects = () => {

  const data = useLoaderData()
  return (
    <div className="container">
      {data.map(project  => (
        <>
          <Link key={project.name} to= {project.id.toString()}>  <h5 >{project.name}</h5></Link>
          <p className="text-body-tertiary">{project.deploy_date}</p>
          <p>{project.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab labore tempore repellendus ratione magnam cupiditate dicta nisi molestiae asperiores neque.</p>
        </> 
      ))}
    </div>
  )
}

export const projectsLoader = async () => {
  const projects = await fetch('http://localhost:4000/projects')
  return projects.json()
}

export default Projects