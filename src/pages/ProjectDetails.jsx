import { useLocation } from 'react-router-dom'
import findProject from "../utilities/findProject"

function ProjectDetails () {
  const location = useLocation()
  const project = findProject(location.pathname)
  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title}/>
      <a
        href={project.repositoryLink}
        target='_blank'
        rel='noreferrer'
      >
        <button>Github</button>
      </a>
      <a
        href={project.deployment}
        target='_blank'
        rel='noreferrer'
      >
        <button>Deployed Version</button>
      </a>
    </main>
  )
}

export default ProjectDetails