import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/Homepage.js";
import ShopPage from "./routes/ShopPage.js"
import './RouteSwitch.css';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
