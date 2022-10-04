import {projects} from "../data/projects.js"

function findProjectsByTechnology (technology) {
  let projectsWithTechnology = []
  projects.forEach((project, idx) => {
    if (project.technologies.includes(technology)) {
      projectsWithTechnology.push(project)
    }
  })
  return projectsWithTechnology

}

export default findProjectsByTechnology

