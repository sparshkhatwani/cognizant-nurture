function BookDetails(props) {

  return (
    <div>
      <h1>Book Details</h1>

      {props.books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.price}</h3>
        </div>
      ))}
    </div>
  );

}

export default BookDetails;