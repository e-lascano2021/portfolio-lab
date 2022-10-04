import TechnologyPreview from "./TechnologyPreview"

function TechnologiesList(props) {
  return(
    <ul>
      {props.technologies.map((technology, idx) => 
        <TechnologyPreview key={idx} technology={technology} />
      )}
    </ul>
  )
}

export default TechnologiesList