import React from 'react';

const BookDetails = ({ books }) => {
  return (
    <div className="details-container">
      <h2 className="details-title">Book Details</h2>
      {books && books.length > 0 ? (
        <div className="details-grid">
          {books.map((book) => (
            <div key={book.id} className="details-card">
              <h3 className="book-title">{book.title}</h3>
              <p>Price: <span>${book.price}</span></p>

              {book.author && (
                <p className="author-text">Author: {book.author}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">No book details available.</p>
      )}
    </div>
  );
};

export default BookDetails;