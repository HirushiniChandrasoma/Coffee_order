import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AD Cafe</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Our Product</a></li>
        <li><a href="#categories">Category</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button className="register-btn">Register</button>
    </nav>
  );
};

export default Navbar;
