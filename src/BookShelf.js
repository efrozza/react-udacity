import React, { Component } from 'react'
import Book from './Book'
//componente responsvel por listar livros por estante

class BookShelf extends Component {

    render() {

        const {  books, shelf } = this.props;        
        //recupera os livros que poseum a mesma estante informada via props
        const filteredBooks = books.filter && books.filter(b => b.shelf === shelf);
        
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2> 
                <h3 bclassName="bookshelf-title">{filteredBooks.length} book(s) on this shelf</h3>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {filteredBooks && filteredBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book} updateShelf={this.props.updateShelf} />
                            </li>
                        ))}

                    </ol>
                </div>
            </div>

        )
    }
}

export default BookShelf