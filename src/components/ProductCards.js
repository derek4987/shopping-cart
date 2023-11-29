// product cards component

import React, { useState } from "react";
import './css/ProductCards.css';

const ProductCards = (props) => {

    const pcItemName = props.pcItemName;
    const pcItemPhoto = props.pcItemPhoto;
    const pcItemPrice = props.pcItemPrice;

    return (
        <div className="typCardLayout">
            <div className="pcItemName">Test Item Name{pcItemName}</div>
            <div className="pcItemPhotoDiv">
                <img className="pcItemPhoto" src={pcItemPhoto}/>
            </div>
            <div className="pcItemBottomRibbon">
                <div className="pcItemPrice">$10.00{pcItemPrice}</div>
                <div>
                    <button type="button" className="pcAddCartBtn">Add to Cart</button>    
                </div>                
            </div>
        </div>
    );
}

export default ProductCards;