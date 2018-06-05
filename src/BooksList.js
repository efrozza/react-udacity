import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import Loading from 'react-loading-components'

//componente que lista todas as estantes

class BooksList extends Component {

    render() {

        if (this.props.books) {
            return (

                <div className="list-books-content">
                    <h2 className="bookshelf-title">Total books: {this.props.books.length}</h2>
                    <BookShelf books={this.props.books}
                        shelf="currentlyReading"
                        shelfTitle="Currently Reading"
                        updateShelf={this.props.updateShelf} />

                    <BookShelf books={this.props.books}
                        shelf="wantToRead"
                        shelfTitle="Want To Read"
                        updateShelf={this.props.updateShelf} />

                    <BookShelf books={this.props.books}
                        shelf="read"
                        shelfTitle="Read"
                        updateShelf={this.props.updateShelf} />

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
        } else {
            return (<Loading type='ball_triangle' width={100} height={100} fill='#f44242' />);
        }

    }
}

export default BooksList