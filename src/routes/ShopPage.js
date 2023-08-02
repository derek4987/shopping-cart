// Shop page route

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import '../components/css/ShopPage.css';

const ShopPage = () => {
    return (
      <div className="content" id="ShopPageContent">
        <NavBar />
        <h1>Hello from Shop Page</h1>
      </div>
    );
  };
  
  export default ShopPage;