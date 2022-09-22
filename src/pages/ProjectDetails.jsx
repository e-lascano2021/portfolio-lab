import { projects } from "../data/projects"

function ProjectDetails () {
  return (
    <main>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt={projects[0].title}/>
      <a
        href={projects[0].repositoryLink}
        target='_blank'
        rel='noreferrer'
      >
        <button>Github</button>
      </a>
      <a
        href={projects[0].deployment}
        target='_blank'
        rel='noreferrer'
      >
        <button>Deployed Version</button>
      </a>
    </main>
  )
}

export default ProjectDetails