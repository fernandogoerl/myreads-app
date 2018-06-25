import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }


    state = {
        changerOpacity: 0,
        display: 'none'
    };

    toogleChanger = () => {
        this.setState({
            changerOpacity: 1-this.state.changerOpacity,
            display: ((this.state.display === 'none') ? 'block' : 'none')
        });
    };

    isThisShelf = (value) => {
        return (value === this.props.book.shelf) ? 'shelf-active' : ''
    };

    isActive = (shelf) => {
        return (shelf === this.props.book.shelf) ? 'none' : shelf
    };



    render() {
        const { book, changeShelf } = this.props;
        return (
            <div className='book-shelf-changer-wrap'>
                <div className='button-changer-wrapper' style={{opacity: this.state.changerOpacity, display: this.state.display}}>
                    <button
                        className={'button-changer '+this.isThisShelf('currentlyReading')}
                        onClick={() => {changeShelf(book, this.isActive('currentlyReading'))}}
                    >Reading</button>
                    <button
                        className={'button-changer '+this.isThisShelf('wantToRead')}
                        onClick={() => {changeShelf(book, this.isActive('wantToRead'))}}
                    >To Read</button>
                    <button
                        className={'button-changer '+this.isThisShelf('read')}
                        onClick={() => {changeShelf(book, this.isActive('read'))}}
                    >Read</button>
                </div>
                <div className='book-shelf-changer' onClick={this.toogleChanger}/>
            </div>
        );
    };
};