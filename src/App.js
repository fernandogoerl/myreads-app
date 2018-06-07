import React from 'react';
import * as BooksAPI from './api/BooksAPI';
import './App.css';
import SearchPage from './pages/SearchPage';
import ShelvesPage from './pages/ShelvesPage';
import { Route } from 'react-router-dom';

const api = BooksAPI;

export default class BooksApp extends React.Component {
    state = {
        myBooks: []
    };

    componentDidMount () {
        api.getAll().then((myBooks) => {
            this.setState({ myBooks });
        })
    };

    changeShelf = (bookToChange, newShelf) => {
        api.update(bookToChange, newShelf).then((s) => {
            bookToChange.shelf = newShelf;
            this.setState({
                myBooks: this.state.myBooks
                            .filter((book) => bookToChange.id !== book.id)
                            .concat(bookToChange)
            });
        });
    };

    render() {
        return (
        <div className="app">
            <Route exact path='/' render={() => (
                <ShelvesPage books={this.state.myBooks} changeShelf={this.changeShelf}/>
            )}/>
            <Route path='/search' render={() => (
                <SearchPage/>
            )}/>
        </div>
        );
    };
};