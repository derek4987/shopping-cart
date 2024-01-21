// Shop page route

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import '../components/css/ShopPage.css';
import ProductCards from "../components/ProductCards";

const ShopPage = () => {

  const cartItems = [];

  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async() => {
    const res = await fetch("https://fakestoreapi.com/products");
    const jsonData = await res.json();
    // console.log(jsonData);
    setProducts(jsonData);
  }
  
  const addToCart = () => {
    return;
  };

  return (
    <div className="content" id="ShopPageContent">
      <NavBar />
      <h1 id="shopPageSpacer">Fake Store Shop</h1>
      <div className="cardsLayout">
        {products.map((values) => {
          return(
          <ProductCards pcItemName={values.title} pcItemPhoto={values.image} pcItemPrice={values.price} />
          )
        })}
      </div>
    </div>
  );
};
  
export { 
  ShopPage
};