

const Projects = () => {
  return (
    <div>Projects</div>
  )
}

const projectsLoader = async () => {
  const data = await fetch('http://')
  return data.json()
}

export default Projects