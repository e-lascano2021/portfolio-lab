import ProjectPreview from "./ProjectPreview"

function ProjectsList (props) {
  return (
    <>
      <h1>Projects</h1> 
      <ul>
        {props.projects.map((project, idx )=> 
          <ProjectPreview title={project.title} key={idx} image={project.image}/>
        )}
      </ul>
    </>
  )
}

export default ProjectsList