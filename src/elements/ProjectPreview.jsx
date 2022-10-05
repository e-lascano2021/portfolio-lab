import { Card }  from "react-bootstrap"
import { Link } from "react-router-dom"
import createPath from "../utilities/createPath"

function ProjectPreview (props) {
  const path = createPath(props.title, "projects")
  return (
    <Card>
      <Card.Img variant='top' src={props.image} />

      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
        <Link to={path}>
          <button variant='primary'>
            Learn more
          </button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ProjectPreview