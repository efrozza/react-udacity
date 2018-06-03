import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

    render() {

        const { shelf, books } = this.props;
        const filteredBooks = books.filter(b => b.shelf === shelf);
        
        console.log('filteredBooks', filteredBooks)        

        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.filteredBooks && this.filteredBooks.map((book) => (
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