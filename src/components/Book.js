import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';

export default class Book extends Component {

    render() {
        const { book, changeShelf } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                        }}
                    />
                    <ShelfChanger book={book} changeShelf={changeShelf}/>
                </div>
                <div className="book-title">{ (book.title) ? book.title : '' }</div>
                <div className="book-authors">{book.authors.length > 1 ? book.authors.join(', ') : book.authors}</div>
            </div>
        );
    }
}
