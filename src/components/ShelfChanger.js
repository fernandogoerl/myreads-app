import React, { Component } from 'react';
import { update } from '../api/BooksAPI';

export default class ShelfChanger extends Component {
    render() {
        const { book, changeShelf } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={
                    (event) => {
                        console.log(book, event.target.value);
                        changeShelf(book, event.target.value);
                    }
                }>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}