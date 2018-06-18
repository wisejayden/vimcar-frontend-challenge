import React, { Component } from 'react';
import './Header.css';
import logo from '../../public/vimcar-logo.svg';
import cart from '../../public/cart.svg';


const Header = (props) => {
    return(
        <div id="header">
            <img id="logo" src={logo} />
            <div onClick={props.checkCart} id="cart">
                <img id="cart-image" src={cart} />
                <div id="cart-quantity">{props.cartQuantity}</div>
            </div>
        </div>
    )
};


export default Header
