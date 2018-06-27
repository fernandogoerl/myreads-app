import React, { Component } from 'react';
import logo from '../icons/myreads-logo.svg';

export default class Header extends Component {

    render() {
        return (
            <div className="list-books-title">
                <img className='myreads-logo' src={logo} alt='MyReads'/>
            </div>
        )
    }
};