import ProjectPreview from "./ProjectPreview"

function ProjectsList (props) {
  return (
    <div id="projects-list">
      <h1>Projects</h1> 
      <ul>
        {props.projects.map((project, idx )=> 
          <ProjectPreview title={project.title} key={idx} image={project.image}/>
        )}
      </ul>
    </div>
  )
}

export default ProjectsList