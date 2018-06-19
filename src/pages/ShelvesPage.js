import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';
import { Shelves } from '../utils/Shelves.js';
import PropTypes from 'prop-types';
import logo from '../icons/myreads-logo.svg';

export default class ShelvesPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, changeShelf } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <img className='myreads-logo' src={logo} alt='MyReads'/>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf books={books} changeShelf={changeShelf} shelfData={Shelves.readingShelf}/>
                        <Shelf books={books} changeShelf={changeShelf} shelfData={Shelves.wantToReadShelf}/>
                        <Shelf books={books} changeShelf={changeShelf} shelfData={Shelves.readShelf}/>
                    </div>
                </div>
                <div className='open-search'>
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    };
};
