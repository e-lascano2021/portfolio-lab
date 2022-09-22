import ProjectPreview from "./ProjectPreview"

function ProjectsList (props) {
  return (
    <>
      <h1>Projects</h1> 
      <ul>
        {props.projects.map(project => 
          <ProjectPreview title={project.title}/>
        )}
      </ul>
    </>
  )
}

export default ProjectsList