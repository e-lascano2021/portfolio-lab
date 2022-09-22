import { projects } from "../data/projects"

function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => 
          <li> {project.title} </li>
        )}
      </ul>
    </main>
  )
}


export default Projects