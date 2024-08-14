import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Calculator from './Calculator'

export default function ProjectDetails() {

  const project = useLoaderData()
  return (
    <div>
      <h5>Project Details for {project.name}</h5>
      <p>Deployed at {project.deploy_date}</p>
      <p>It entails {project.description}</p>
      <p className="text-body-tertiary">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab labore tempore repellendus ratione magnam cupiditate dicta nisi molestiae asperiores neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab labore tempore repellendus ratione magnam cupiditate dicta nisi molestiae asperiores neque.</p>
      </p>


    </div>
  )
}

export const projectsDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch('http://localhost:4000/projects/' + id)
  return res.json()

}
