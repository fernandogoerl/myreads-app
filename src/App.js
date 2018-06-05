import React from 'react';
import * as BooksAPI from './api/BooksAPI';
import './App.css';
import SearchPage from './pages/SearchPage';
import ShelvesPage from './pages/ShelvesPage';
import { Route } from 'react-router-dom';

const api = BooksAPI;

export default class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount () {
        api.getAll().then((books) => {
            this.setState({ books });
        })
    };
    // componentDidMount = () => {
    //     api.getAll().then((books) => {
    //         this.setState((prevState) => ({
    //             myBooks: books,
    //             count: prevState.count + 1
	// 		   }))
    //     })
    // };

    changeShelf = (book, shelf) => {
        api
            .update(book, shelf)
            .then((updatedBooks) => {
                console.log(updatedBooks);

            })
    }

    render() {
        return (
        <div className="app">
            <Route exact path='/' render={() => (
                <ShelvesPage books={this.state.books} changeShelf={this.changeShelf}/>
            )}/>
            <Route path='/search' render={() => (
                <SearchPage/>
            )}/>
        </div>
        );
    }
}