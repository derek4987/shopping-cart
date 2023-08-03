// Homepage route page

import React, { useState } from "react";
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar";
import '../components/css/Homepage.css';

const Homepage = () => {
    return (
      <div className="content" id="HomepageContent">
        <NavBar />
        <div id="hpContent">
          <div className="hpTxt">
            <div className="hpMainTxt">
              <h1>Savings Up To</h1>
              <h1>40% Off</h1>
            </div>
            <div className="hpSubTxt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur consectetur elit, id lobortis.
            </div>
            <button className="hpBtn">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>        
      </div>
    );
  };
  
  export default Homepage;