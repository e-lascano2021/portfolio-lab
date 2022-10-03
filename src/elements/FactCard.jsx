import { Card }  from "react-bootstrap"

function FactCard (props) {
  return (
    <Card>
      <Card.Body>
        {props.fact}
      </Card.Body>
    </Card>
  )
}

export default FactCard