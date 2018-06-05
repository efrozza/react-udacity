import React, { Component } from 'react'
import './css/App.css'
import Loading from 'react-loading-components'

//componente responsavel pela interface de livros

class Book extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.updateShelf(this.props.book, event.target.value);
    }


    render() {

        //verifica se existem imagem para o livro a ser listado
        const checkImage = (book) => {
            if (this.props.book.imageLinks) {
                return this.props.book.imageLinks.thumbnail
            } else {
                return "no-cover.png"
            }
        }

        return (

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193,
                        backgroundImage: `url("${checkImage(this.props.book)}")`
                    }}>
                    </div>

                    <div className="book-shelf-changer">
                        <select value={this.props.book.shelf} onChange={this.handleChange}>
                            <option value="other" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book