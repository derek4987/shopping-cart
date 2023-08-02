// Homepage route page

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import '../components/css/Homepage.css';

const Homepage = () => {
    return (
      <div className="content" id="HomepageContent">
        <NavBar />
        <h1>Hello from Homepage</h1>
      </div>
    );
  };
  
  export default Homepage;