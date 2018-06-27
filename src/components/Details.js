import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Details extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const { close, book, changeShelf } = this.props;
        console.log(book);
        return (
            <div className="book-details">
                <div className="header">
                    <div className="header-top">
                        <a className="close" onClick={close}>&nbsp;</a>
                        { book.title }
                    </div>
                    <div className="header-bottom">
                        <img
                            className="book-cover"
                            src={
                                (book.hasOwnProperty('imageLinks') && book.imageLinks.hasOwnProperty('thumbnail'))
                                ? (
                                    (book.imageLinks.thumbnail)
                                    ? book.imageLinks.thumbnail
                                    : ''
                                )
                                : ''
                            }
                            alt={'Cover not available'}
                        />
                        <div className="book-info">
                            {book.authors} <br/>
                            {book.publishedDate.toString().substr(0,4)} | {book.pageCount} pages
                            <div className="book-rating">
                                {book.averageRating}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {book.description}
                </div>
            </div>
        )
    }
};