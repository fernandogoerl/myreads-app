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
        error: ''
    }

    updadeQuery = (query) => {

        this.searchBooks(this.state.query);
    }

    searchBooks = (newQuery) => {
        this.setState({ query: newQuery.trim() });
        api.search(this.state.query)
            .then((results) => {
                results.map((book) => book.shelf = 'none');
                this.setState({tempBooks: results})
            })
            .catch((error) => {
                this.setState({error: 'Search terms not found!'})
                // console.log('Erro na busca'+error)
            });
    };

    insideSearch(bookToFind, myBooks) {
        let newBook;
        myBooks.map((book) => {
            if (bookToFind.id === book.id) {
                bookToFind.shelf = book.shelf;
                newBook = book;
                return newBook;
            } else {
                newBook = bookToFind;
                return bookToFind;
            }
        });
        return newBook;
    };

    render() {
        const { books, changeShelf } = this.props;
        const { query, tempBooks } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">{
                    (tempBooks !== undefined)
                    ? <ol className="books-grid">
                        {tempBooks.map((book) => (
                            <Book keyIndex={book.id} book={this.insideSearch(book, books)} changeShelf={changeShelf} />
                        ))}
                    </ol>
                    : <div >{this.state.error}</div>
                }</div>
            </div>
        );
    };
};