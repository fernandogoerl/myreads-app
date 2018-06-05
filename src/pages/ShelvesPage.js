import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';
import Book from '../components/Book';
import ShelfChanger from '../components/ShelfChanger';
import { Shelves } from '../utils/Shelves.js';

export default class ShelvesPage extends Component {
    render() {
        const { books, changeShelf } = this.props;
        console.log(books)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf books={books} changeShelf={changeShelf} shelfData={Shelves.readingShelf}/>
                        <Shelf books={books} changeShelf={changeShelf} shelfData={Shelves.wantToReadShelf}/>
                        <Shelf books={books} changeShelf={changeShelf} shelfData={Shelves.readShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}
