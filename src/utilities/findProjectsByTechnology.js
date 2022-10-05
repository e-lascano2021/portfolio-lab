import {projects} from "../data/projects.js"

function findProjectsByTechnology (technology) {
  let projectsWithTechnology = []
  projects.forEach(project => {
    if (project.technologies.find(element => element.toLowerCase() === technology)) {
      projectsWithTechnology.push(project)
    }
  })
  return projectsWithTechnology

}

export default findProjectsByTechnology

