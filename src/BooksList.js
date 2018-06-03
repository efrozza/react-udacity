import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BooksList extends Component {

    render() {
        console.log('render booklist')
        return (

            <div>
                <BookShelf books={this.props.books} shelf="currentlyReading"/>
                <BookShelf books={this.props.books} shelf="wantToRead"/>
                <BookShelf books={this.props.books} shelf="read"/>

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