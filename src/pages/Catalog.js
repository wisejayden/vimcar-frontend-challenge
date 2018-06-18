import React, { Component } from 'react';
import './Catalog.css';


const Catalog = (props) => {
    return(
        <div id="catalog-container">
            {props.currentCatalog}
        </div>
    )
}

export default Catalog
