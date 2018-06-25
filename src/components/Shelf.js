import React, { Component } from 'react';
import Book from '../components/Book';
import PropTypes from 'prop-types';

export default class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        shelfData: PropTypes.object.isRequired
    }

    render() {
        const { books, changeShelf, shelfData } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfData.displayName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books
                            .filter((book) => book.shelf === shelfData.name)
                            .map((book) => (
                                <li key={book.id}>
                                    <Book book={book} changeShelf={changeShelf}/>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    };
};
