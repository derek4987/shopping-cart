// product cards component

import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../routes/ShopPage";
import './css/ProductCards.css';

const ProductCards = (props) => {

    // const { products } = useContext(ShopContext);
    // const product = products.find((e) => e.category === "men's clothing");
    // console.log(product);

    const pcItemName = props.pcItemName;
    const pcItemPhoto = props.pcItemPhoto;
    const pcItemPrice = props.pcItemPrice;

    return (
        <div className="typCardLayout">
            <div className="pcItemName">{pcItemName}</div>
            <div className="pcItemPhotoDiv">
                <img className="pcItemPhoto" src={pcItemPhoto}/>
            </div>
            <div className="pcItemBottomRibbon">
                <div className="pcItemPrice">${pcItemPrice}</div>
                <div>
                    <button type="button" className="pcAddCartBtn">Add to Cart</button>    
                </div>                
            </div>
        </div>
    );
}

export default ProductCards;