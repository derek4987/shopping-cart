// Shop page route

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import '../components/css/ShopPage.css';
import ProductCards from "../components/ProductCards";

const ShopPage = () => {
    return (
      <div className="content" id="ShopPageContent">
        <NavBar />
        <h1 id="shopPageSpacer">Fake Store Shop</h1>
        <ProductCards />
      </div>
    );
  };
  
  export default ShopPage;