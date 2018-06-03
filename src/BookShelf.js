import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

    render() {

        const {  books, shelf } = this.props;
        const filteredBooks = books.filter(b => b.shelf === shelf);
        
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {filteredBooks && filteredBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book} />
                            </li>
                        ))}

                    </ol>
                </div>
            </div>

        )
    }
}

export default BookShelf