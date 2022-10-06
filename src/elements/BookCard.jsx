import { Card }  from "react-bootstrap"

function BookCard (props) {
  return(
    <Card id="book-card">
      <Card.Body>
        <Card.Title>
          {props.book.title}
        </Card.Title>
        By: {props.book.author}
      </Card.Body>
    </Card>
  )
}

export default BookCard