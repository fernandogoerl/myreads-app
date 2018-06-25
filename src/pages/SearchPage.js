import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api/BooksAPI';
import PropTypes from 'prop-types';
import Book from '../components/Book';
// import { availableTags } from '../utils/Tags';

export default class SearchPage extends Component {
    static propTypes = {
        changeShelf: PropTypes.func.isRequired
    }

    state ={
        query: '',
        tempBooks: [],
        error: false
    }

    resetSearch = () => {
        this.setState((prevState) => { prevState.tempBooks = [] });
    }

    searchBooks = (query, myBooks) => {
        this.setState({ query });
        (query && query !== '')
        ? api.search(this.state.query)
            .then((results) => {
                let searchedBooks = results.map((book) => {
                    book.shelf = 'none';
                    book = this.insideSearch(book, myBooks);
                    return book;
                });
                this.setState({
                    tempBooks: searchedBooks,
                    error: false
                });
            })
            .catch((error) => {
                this.setState((prevState) => {
                    prevState.error = true;
                });
                this.resetSearch();
            })
        : this.resetSearch()
    };

    insideSearch(bookToFind, myBooks) {
        let newBook = myBooks.find((book) => (bookToFind.id === book.id));
        if (newBook !== undefined){
            return newBook;
        }
        return bookToFind
    };

    render() {
        const { books, changeShelf } = this.props;
        const { query, tempBooks, error } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.searchBooks(event.target.value , books)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    { (tempBooks.length > 0) &&
                        <ol className="books-grid">
                            {tempBooks.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} changeShelf={changeShelf} />
                                </li>
                            ))}
                        </ol>
                    }
                    {error && query &&
                        <div className="search-error">Search terms not found!
                        </div>
                    }
                </div>
            </div>
        );
    };
};