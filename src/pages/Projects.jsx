import { projects } from "../data/projects"
import ProjectsList from "../elements/Projects"

function Projects() {
  return (
    <main>
      <ProjectsList projects={projects}/>
    </main>
  )
}


export default Projects