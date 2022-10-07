import { about } from "../data/about.js"
import BooksList from "../elements/BooksList.jsx"
import FunFactsList from "../elements/FunFactsList.jsx"

function About () {
  return (
    <main id="about">
      <section id="meetTheEngineer">
        <div>
          <h1>Meet The Engineer:</h1>
          <p>A Software Engineer with a background in team leadership and collaboration. Motivated by helping and supporting clients, colleagues, and project stakeholders. With strong communication and interpersonal skills, solve difficult problems creatively and efficiently.</p>
        </div>
      </section>

      {/* <section id="moreAboutMe"> */}
          <FunFactsList facts={about.funFacts}/>
          <BooksList books={about.favoriteBooks} />
      {/* </section> */}
    </main>
  )
}


export default About