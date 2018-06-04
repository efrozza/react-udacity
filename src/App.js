import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import './css/App.css'
//componente principal

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    }).catch("Erro no acesso a BooksAPI")
  }

  clearShelfs = () => {
    this.state.books.map((book) => {
      BooksAPI.update(book, 'none').then((res) => {
        console.log('res', res)
      })
    })
    this.setState({ books: [] })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      //apos atualizar o livro, remove o livro antigo e insere o novo 
      const oldBooks = this.state.books.filter && this.state.books.filter(b => b.id !== book.id);
      book.shelf = shelf
      const newBooks = oldBooks.concat(book)
      this.setState({ books: newBooks })
    })
  }

  render() {

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads - Everton L. Frozza</h1>
          </div>

          <Route path="/search" render={() => (
            <div>
              <SearchBooks books={this.state.books} updateShelf={this.updateShelf} />
            </div>
          )} />
          <Route exact path="/" render={() => (
            <div className="list-books-content">
              <BooksList
                books={this.state.books} updateShelf={this.updateShelf} clearShelfs={this.clearShelfs} />
            </div>
          )} />

        </div>
      </div>
    )
  }
}

export default App
