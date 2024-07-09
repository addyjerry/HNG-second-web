import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="Navbar">
      <ul id="nav">
        <Link to="/">
          {" "}
          <li>Home </li>
        </Link>
        <Link to="/favorites">
          <li>/ Checkout</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
