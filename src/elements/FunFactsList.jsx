import FactCard from "./FactCard"

function FunFactsList(props) {
  return(
    <div id="facts-list">
      <h2>Fun Facts</h2>
      <ul>
        {props.facts.map((fact, idx )=> 
          <FactCard fact={fact} key={idx}/>
        )}
      </ul>
    </div>
  )
}

export default FunFactsList