import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const { book, changeShelf } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={
                    (event) => {
                        console.log(book, event.target.value);
                        changeShelf(book, event.target.value);
                    }
                }>
                    <option>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    };
};