import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import { Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import './css/App.css'


class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads - Everton L. Frozza</h1>
          </div>

          <Route path="/search" component={SearchBooks}/>
          <Route exact path="/" render={() => (
            <div className="list-books-content">
              <BooksList
                books={this.state.books} />
            </div>
          )} />
        </div>
      </div>
    )
  }
}

export default App
