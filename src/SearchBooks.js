import React, { Component } from 'react'
import './css/App.css'
import * as BooksAPI from './utils/BooksAPI'
import BooksList from './BooksList'

class SearchBooks extends Component {
    state = {
        books: [],
        query: ''
    }

    componentDidMount() {
        BooksAPI.getAll(this.state.query).then((books) => {
            this.setState({ books: books })
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"> <BooksList
                        books={this.state.books}  lista="todos" /></ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks
