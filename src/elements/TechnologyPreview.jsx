import { Link } from "react-router-dom"

function TechnologyPreview (props) {
  return (
    <Link to={props.technology}>
      <li>{props.technology}</li>
    </Link>
  )
}

export default TechnologyPreview