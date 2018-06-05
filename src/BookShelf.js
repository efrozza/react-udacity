import React from 'react';
import Book from './Book';

const BookShelf = ({ books, shelf, shelfTitle, updateShelf }) => {
    const filteredBooks = books.filter && books.filter(b => b.shelf === shelf);

    return (
        <div className="bookshelf">         
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <h3 className="bookshelf-title">
                {filteredBooks.length} book(s) on this shelf</h3>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filteredBooks &&
                        filteredBooks.map(book => (
                            <li key={book.id}>
                                <Book book={book} updateShelf={updateShelf} />
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    );
};

export default BookShelf;