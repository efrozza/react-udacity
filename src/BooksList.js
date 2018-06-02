import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksList extends Component {

    render() {

        var shelfCurrent = this.props.books.filter(function (book) {
            return book.shelf == "currentlyReading"
        }
        )
        var shelfwantToRead = this.props.books.filter(function (book) {
            return book.shelf == "wantToRead"
        }
        )
        var shelfRead = this.props.books.filter(function (book) {
            return book.shelf == "read"
        }
        )

        return (

            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {shelfCurrent.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">wantToRead</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {shelfwantToRead.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {shelfRead.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search"
                    >Add a book
                    </Link>
                </div>

            </div>

        )
    }
}

export default BooksList