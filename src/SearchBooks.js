import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import Book from './Book'
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom'
import './css/App.css'
//componente reesponsavel pela barra de pesquisa

class SearchBooks extends Component {

    state = {
        books: [],
        query: ''
    }

    updateQuery = (query) => {
        const limparBooks = () => {
            this.setState({ books: [] })
            this.setState({ query: ' ' })
        }

        if (query !== '') {
            this.setState({ query: query.trim() })
            BooksAPI.search(this.state.query).then((newBooks) => {
                for (const s of newBooks) {
                    s.shelf = "none"
                    for (const b of this.props.books) {
                        if (s.id === b.id) {
                            s.shelf = b.shelf
                        }
                    }
                    this.setState({ books: newBooks })
                }
            }).catch(e => {
                limparBooks()
                alert("Your search returned no results!")
            }
            )
        } else {
            limparBooks()
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search">Close</Link>
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
                                {this.state.books.map && this.state.books.map((book) => (
                                    <li key={book.id}>
                                        <Book book={book} updateShelf={this.props.updateShelf} />
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
