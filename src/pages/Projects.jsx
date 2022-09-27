import { projects } from "../data/projects"
import ProjectsList from "../elements/Projects"

function Projects() {
  return (
    <main id="projects">
      <ProjectsList projects={projects}/>
    </main>
  )
}


export default Projects