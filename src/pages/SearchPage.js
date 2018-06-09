import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api/BooksAPI';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { availableTags } from '../utils/Tags'

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
        this.setState({ query: query.trim() });
        this.searchBooks(this.state.query);
    }

    searchBooks = (query) => {
        api.search(query).then((results) => {
            this.setState({tempBooks: results})
        });
    };

    render() {
        const { changeShelf } = this.props;
        const { query, tempBooks } = this.state;
        console.log(tempBooks);

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updadeQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">{
                    (tempBooks !== undefined)
                    ? <ol className="books-grid">
                        {
                            tempBooks.map((book) => (
                                    <Book book={book} changeShelf={changeShelf}/>
                                ))
                            }
                    </ol>
                    : <div >{this.state.error}</div>
                }</div>
            </div>
        );
    };
};