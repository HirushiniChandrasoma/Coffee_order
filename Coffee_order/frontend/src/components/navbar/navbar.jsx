import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BrewTopia Cafe</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Our Product</Link>
        </li>
        <li>
          <Link to="/categories">Category</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="button-container">
        <Link to="/login">
          <button className="Login-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
