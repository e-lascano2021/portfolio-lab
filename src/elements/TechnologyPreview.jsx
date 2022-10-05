import { Link } from "react-router-dom"
import createPath from "../utilities/createPath"

function TechnologyPreview (props) {
  const path = createPath(props.technology, "technologies")
  return (
    <Link to={path}>
      <li>{props.technology}</li>
    </Link>
  )
}

export default TechnologyPreview