import {projects} from "../data/projects.js"

function listAllTechnologies(){
  const allTechnologies = projects.reduce(
    (previousValue, currentValue) => [...previousValue, ...currentValue.technologies],
    [],
  );

  let unique = [...new Set(allTechnologies)]
  return unique
}

export default listAllTechnologies