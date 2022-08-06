import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      {/* <div class="container"> */}
        <nav class="navbar">
          <div class="logo"><img src={require('./logo.png')} alt="logo"/> </div>
          
          <ul class="nav-items">
            <li class="nav-item">
              <a href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a href="./about.html">About</a>
            </li>
            <li class="nav-item">
              <a href="./services.html">Services</a>
            </li>
            <li class="nav-item">
              <a href="./partners.html">Partners</a>
            </li>
            <li class="nav-item">
              <a href="./contact.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
