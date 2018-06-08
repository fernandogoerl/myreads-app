import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const { book, changeShelf } = this.props;
        return (
            <div className='book-wrapper'>
                <div className="book">
                    <div className="book-title">{
                        (book.title)
                        ? (
                            (book.title.length > 18)
                            ? (
                                `${book.title.substr(0,18)}...`
                            )
                            : book.title
                        )
                        : ''
                    }</div>
                    <div className="book-top">
                        <img
                            className="book-cover"
                            src={book.imageLinks.thumbnail}
                            alt={book.imageLinks.thumbnail}
                        />
                    </div>
                    <div className="book-authors">{
                        (book.authors.length > 1)
                        ? `${book.authors[0]}, ${book.authors[1].substr(0,3)}...`
                        : book.authors
                    }</div>
                </div>
                <ShelfChanger book={book} changeShelf={changeShelf}/>
            </div>
        );
    };
};
