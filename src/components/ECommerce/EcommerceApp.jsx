import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Checkout from "./Checkout";

import CartPortal from "../../portals/CartPortal";
import withAuth from "../../hoc/withAuth";
import "./ECommerce.css";

export default function ECommerceApp() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="ecom-container">
      <nav className="ecom-nav">
        <Link to="">Home</Link>
        <Link to="products">Products</Link>
        <button onClick={() => setShowCart(true)}>Cart ({cart.length})</button>
      </nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="products" element={<ProductList addToCart={addToCart} />} />
        <Route path="product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="checkout" element={withAuth(Checkout)()} />
      </Routes>

      {showCart && <CartPortal cartItems={cart} onClose={() => setShowCart(false)} />}
    </div>
  );
}
