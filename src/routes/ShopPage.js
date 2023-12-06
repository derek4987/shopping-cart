// Shop page route

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import '../components/css/ShopPage.css';
import ProductCards from "../components/ProductCards";
import { createContext } from "react";

const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

const ShopPage = () => {

  const cartItems = [];

  const products = 
  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
  
  const addToCart = () => {
    return console.log('addToCart');
  };

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}>
    <div className="content" id="ShopPageContent">
      <NavBar />
      <h1 id="shopPageSpacer">Fake Store Shop</h1>
      <ProductCards />
    </div>
    </ ShopContext.Provider >
  );
};
  
export { 
  ShopPage,
  ShopContext
};