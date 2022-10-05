import { about } from "../data/about.js"
import BooksList from "../elements/BooksList.jsx"
import FunFactsList from "../elements/FunFactsList.jsx"

function About () {
  return (
    <main id="about">
      <section id="meetTheEngineer">
        <div>
          <h1>Meet The Engineer:</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sed distinctio sit itaque nesciunt expedita eos neque fuga in, recusandae minus officia, maxime sunt porro illo voluptatibus reiciendis quibusdam reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem veritatis incidunt aspernatur nisi! Neque non iusto accusamus ut distinctio temporibus dolores in deserunt sint officia, ab beatae rem deleniti.</p>
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