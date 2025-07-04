import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalCount } = useCart();
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">E-Shop</Link>
      <div className="navbar-links">
        <NavLink to="/" className="navbar-link">Home</NavLink>
        <NavLink to="/about" className="navbar-link">About</NavLink>
        <NavLink to="/cart" className="navbar-link">
          Cart
          <span className="cart-count">{totalCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}
