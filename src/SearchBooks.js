import React, { Component } from 'react'
import './css/App.css'
import * as BooksAPI from './utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'
import { DebounceInput } from 'react-debounce-input';


class SearchBooks extends Component {

    state = {
        books: [],
        query: '',
        booksShelf: []
    }

    componentDidMount() {
        this.setState({ books: [] })
        //obtem livros com shef
        BooksAPI.getAll().then((booksShelf) => {
            this.setState({ booksShelf: booksShelf })
          })
      
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        BooksAPI.search(this.state.query).then((books) => {
            this.setState({ books: books })    
        })
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={4}
                            debounceTimeout={300}
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">All books</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books.map((book) => (
                                    <li key={book.id}>
                                        <Book book={book} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SearchBooks
