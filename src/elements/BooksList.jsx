import BookCard from "./BookCard.jsx"

function BooksList(props) {
  return(
    <div id="books-list">
      <h2>Favoite Books</h2>
      <ul>
        {props.books.map((book, idx )=> 
          <BookCard book={book} key={idx}/>
        )}
      </ul>
    </div>
  )
}

export default BooksList