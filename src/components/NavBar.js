// Navigation bar component

import React, { useState } from "react";
import './css/NavBar.css';
import { Link } from "react-router-dom"

const NavBar = (props) => {
    return (
      <nav id="navBar" className="sticky">
        <ul id="navLinks">
            <div class="navLinksSection1">
              <li className="siteTitle">
                Fake Store |
              </li>
              <li>
                  <Link to="/">home</Link>
              </li>
              <li>
                  <Link to="/shop">shop</Link>
              </li>
            </div>
            <li id="cartLink">
                <Link to="/cart">cart ( 0 )</Link>
            </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;