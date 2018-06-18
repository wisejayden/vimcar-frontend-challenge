import React, { Component } from 'react';
import Catalog from './Catalog.js';
import Header from './Header.js';
import './App.css';
import catalogItems from '../../public/catalog/catalog.json';

//Images
import catalog1 from '../../public/catalog/h38ss-dtbl-sel-201603@2x.png';
import catalog2 from '../../public/catalog/h38ss-dtgr-sel-201603@2x.png';
import catalog3 from '../../public/catalog/h38ss-dtrd-sel-201603@2x.png';
import catalog4 from '../../public/catalog/h42ss-stbk-sel-201603@2x.png';
import catalog5 from '../../public/catalog/s42gd-nsgb-sel-201603@2x.png';
import catalog6 from '../../public/catalog/s42rg-nsdb-sel-201603@2x.png';
import catalog7 from '../../public/catalog/s42sg-nsbk-sel-201603@2x.png';
import catalog8 from '../../public/catalog/s42si-nssb-sel-201603@2x.png';



class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            cartQuantity: 0,
            cart: {}
        };
        this.addToCart = this.addToCart.bind(this);
        this.checkCart = this.checkCart.bind(this);
    }
    addToCart(item) {
        let self = this;
        return function() {
            let cart = self.state.cart;
            let cartQuantity = self.state.cartQuantity;

            if(!cart[item]) {
                cart[item] = 1;
            } else {
                cart[item] ++;
            }
            cartQuantity ++;
            self.setState({
                cart,
                cartQuantity
            })
        }
    }
    checkCart() {
        console.log("Current Cart - ", this.state.cart);
    }
    componentWillMount() {
        let currentCatalog = catalogItems.catalog.map((item, i) => {
            item = `../../public/catalog/${item}`;
            return(
                <div className="catalog-item" key={i}>
                    <img className="catalog-image" src={require(item)} />
                    <button onClick={this.addToCart(i)} className="catalog-button">Add to Cart</button>
                </div>
            )
        })
        this.setState({
            currentCatalog
        })
    }
    render() {
        return (
            <div id="main">
                <Header checkCart={this.checkCart} cartQuantity={this.state.cartQuantity}/>
                <Catalog currentCatalog={this.state.currentCatalog}/>
            </div>
        )
    }
}

export default App
