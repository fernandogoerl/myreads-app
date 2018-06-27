import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ratings from 'react-ratings-declarative';

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
                        <a className="close" onClick={close}>&times;</a>
                        {
                            (book.title)
                            ? (
                                (book.title.length > 18)
                                ? (
                                    `${book.title.substr(0,30)}...`
                                )
                                : book.title
                            )
                            : ''
                        }
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
                            {
                                (book.authors)
                                ? (
                                    (book.authors.length > 1)
                                    ? `${book.authors[0]}, ${book.authors[1].substr(0,3)}...`.substr(0,30)
                                    : book.authors
                                )
                                : ''
                            } <br/>
                            {book.publishedDate.toString().substr(0,4)} | {book.pageCount} pages
                            <div className="book-rating">
                                <Ratings
                                    rating={book.averageRating}
                                    widgetDimensions="30px"
                                    widgetSpacings="0px"
                                    widgetRatedColors="#FFC600"
                                >
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                </Ratings>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {
                        (book.description)
                        ? book.description
                        : 'No description available'

                    }
                </div>
            </div>
        )
    }
};