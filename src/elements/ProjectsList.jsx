import ProjectPreview from "./ProjectPreview"

function ProjectsList (props) {
  return (
    <div id="projects-list">
      <ul>
        {props.projects.map((project, idx )=> 
          <ProjectPreview title={project.title} key={idx} image={project.image}/>
        )}
      </ul>
    </div>
  )
}

export default ProjectsList