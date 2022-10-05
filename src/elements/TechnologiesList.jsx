import TechnologyPreview from "./TechnologyPreview"

function TechnologiesList(props) {
  return(
    <div id="technologies-list" >
      <ul>
        {props.technologies.map((technology, idx) => 
          <TechnologyPreview key={idx} technology={technology} />
        )}
      </ul>
    </div>
  )
}

export default TechnologiesList