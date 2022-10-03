import { Card }  from "react-bootstrap"

function BookCard (props) {
  return(
    <Card>
    <Card.Body>
      <Card.Title>
        {props.book.title}
      </Card.Title>
      {props.book.author}
    </Card.Body>
  </Card>
  )
}

export default BookCard