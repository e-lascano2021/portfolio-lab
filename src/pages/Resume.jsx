import TechnologiesList from "../elements/TechnologiesList"
import listAllTechnologies from "../utilities/listAllTechnologies"

function Resume() {
  const technologies = listAllTechnologies()
  return (
    <main id='resume'>
      <h1>Resume</h1>
      <p>
        Click the link to download <a href='/Lascano_Resume.pdf' download>my resume</a>.
      </p>
      <TechnologiesList technologies={technologies}/>
      </main>
  )
}


export default Resume