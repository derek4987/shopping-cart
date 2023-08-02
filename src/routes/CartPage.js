// Cart page route

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import '../components/css/CartPage.css';

const CartPage = () => {
    return (
      <div className="content" id="CartPageContent">
        <NavBar />
        <h1>Hello from Cart Page</h1>
      </div>
    );
  };
  
  export default CartPage;