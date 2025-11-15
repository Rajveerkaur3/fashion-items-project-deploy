import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav: React.FC = () => (
  <nav aria-label="Main navigation" className="navbar">
    <div className="logo-wrap"></div>
    <div className="page-links">
        <Link to="/fashion">Shopping</Link>
        <Link to="/discounts">Discounts</Link>
        <Link to="/reviews">Customer Reviews</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/newsletter">Newsletter</Link>
    </div>
  </nav>
);

export default Nav;