import { Link } from "react-router-dom"
import { Card }  from "react-bootstrap"
import createPath from "../utilities/createPath"

function TechnologyPreview (props) {
  const path = createPath(props.technology, "technologies")
  return (
    <Link to={path}>
      <Card id="technology-card">
      <Card.Body>
        {props.technology}
      </Card.Body>
    </Card>
    </Link>
  )
}

export default TechnologyPreview