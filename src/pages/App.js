import React, { Component } from 'react';
import Catalog from './Catalog.js';
import Cart from './Cart.js';
import Header from './Header.js';
import app from './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            cartQuantity: 0
        };
    }
    render() {
        return (
            <div id="main">
                <Header cartQuantity={this.state.cartQuantity}/>
                <Catalog />
            </div>
        )
    }
}

export default App
