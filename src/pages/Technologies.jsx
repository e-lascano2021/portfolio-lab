import TechnologiesList from "../elements/TechnologiesList"
import listAllTechnologies from "../utilities/listAllTechnologies"

function Technologies () {
  const technologies = listAllTechnologies()
  return (
    <main id="Technologies">
      <TechnologiesList technologies={technologies}/>
    </main>
  )
}

export default Technologies