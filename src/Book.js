import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './css/App.css'

class Book extends Component {
    state = {
        shelfSelected: '',
      }

    constructor (props){
        super(props);
        this.state.shelfSelected = this.props.book.shelf;
        this.handleChange = this.handleChange.bind(this);
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then((res) => {
        })
    }

    handleChange(event){
        this.updateShelf(this.props.book, event.target.value);
        this.setState({shelfSelected: event.target.value})

    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")`}}>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={this.state.shelfSelected} onChange={this.handleChange} name="shelf">
                            <option value="none" disabled>Move to...</option>
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