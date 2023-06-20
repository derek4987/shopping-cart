// Navigation bar component

import React, { useState } from "react";
import './css/NavBar.css';
import { Link } from "react-router-dom"

const NavBar = (props) => {
    return (
      <nav id="navBar" className="sticky">
        <ul id="navLinks">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;