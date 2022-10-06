import { Card }  from "react-bootstrap"

function FactCard (props) {
  return (
    <Card id="fact-card">
      <Card.Body>
        {props.fact}
      </Card.Body>
    </Card>
  )
}

export default FactCard