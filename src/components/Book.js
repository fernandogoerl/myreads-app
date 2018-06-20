import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';
import check from '../icons/check.svg'

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired,
        keyIndex: PropTypes.string.isRequired

    }

    render() {
        const { keyIndex, book, changeShelf } = this.props;

        return (
            <li key={keyIndex}>
                <div className='book-wrapper'>
                    {( book.shelf !== 'none')
                    ?
                    ( <div className="triangle-check">
                        <img className='book-check' src={check} alt='Checked Book'/>
                    </div> )
                    : ''
                    }
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
                        </div>
                        <div className="book-authors">{
                            (book.authors)
                            ? (
                                (book.authors.length > 1)
                                ? `${book.authors[0]}, ${book.authors[1].substr(0,3)}...`
                                : book.authors
                            )
                            : ''
                        }</div>
                    </div>
                    <ShelfChanger book={book} changeShelf={changeShelf} haveBlur={this.haveBlur}/>
                </div>
            </li>
        );
    };
};