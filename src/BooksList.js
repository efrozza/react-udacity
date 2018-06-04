import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
//componente que lista todas as estantes

class BooksList extends Component {

    render() {

        return (

            <div>
                <BookShelf books={this.props.books} shelf="currentlyReading" updateShelf={this.props.updateShelf} />
                <BookShelf books={this.props.books} shelf="wantToRead" updateShelf={this.props.updateShelf} />
                <BookShelf books={this.props.books} shelf="read" updateShelf={this.props.updateShelf} />

                <div className="open-search">
                    <Link to="/search"
                    >Add a book
                    </Link>
                </div>

                <div className="clear-shelfs"> 
                    <Link to="/" onClick={this.props.clearShelfs} >Clean all shelfs
                    </Link>
                </div>

            </div>

        )
    }
}

export default BooksList