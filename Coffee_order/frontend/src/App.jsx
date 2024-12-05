import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Order from "./pages/order";
import Cart from "./pages/cart";
import Payment from "./pages/payment";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to the cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from the cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate cart summary
  const calculateCartSummary = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const delivery = subtotal > 500 ? 0 : 50; // Free delivery for orders > 500
    const discount = subtotal > 1000 ? 100 : 0; // Discount for orders > 1000
    const taxes = (subtotal - discount) * 0.1; // 10% taxes
    const total = subtotal - discount + delivery + taxes;

    return { subtotal, delivery, discount, taxes, total };
  };

  return (
    <Router>
      <div className="app">
        <Navbar cartVisible={cartItems.length > 0} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/payment"
            element={<Payment cartSummary={calculateCartSummary()} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
