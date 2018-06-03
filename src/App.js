import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import './css/App.css'

class App extends Component {

  constructor (props){
    super(props)
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
      console.log(`books`, books)
    }).catch("Erro no acesso a BooksAPI")

    this.state = {
      books: []
    }
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      const oldBooks = this.state.books.filter && this.state.books.filter(b => b.id != book.id);
      book.shelf = shelf
      const newBooks = oldBooks.concat(book)
      this.setState ({books: newBooks})       
    })        
}

  render() {
    console.log('render app')
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
                books={this.state.books} updateShelf={this.updateShelf}/>
            </div>
          )} />
          
        </div>
      </div>
    )
  }
}

export default App
