import { about } from "../data/about.js"
import FunFactsList from "../elements/FunFactsList.jsx"

function About () {
  return (
    <main id="about">
      <h1>Meet The Engineer:</h1>
      <p>paragraph 1</p>

      <h1>More about Me:</h1>
      <FunFactsList facts={about.funFacts}/>
    </main>
  )
}


export default About