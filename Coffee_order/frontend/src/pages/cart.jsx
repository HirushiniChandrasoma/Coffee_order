import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./cart.css";

const Cart = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const token = localStorage.getItem("token");

 
  useEffect(() => {
    if (token) {
      const fetchCart = async () => {
        try {
          const response = await axios.get("http://localhost:3000/api/cart", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setCart(response.data.cart.items);
          setLoading(false);
        } catch (error) {
          setError("Failed to fetch cart data.");
          setLoading(false);
        }
      };
      fetchCart();
    } else {
      setLoading(false);
      setError("You must be logged in to view the cart.");
    }
  }, [token]);

  // Function to add item to cart
  const addToCart = async (productId, quantity) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/cart/add",
        { productId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(response.data.cart.items);
    } catch (error) {
      console.error("Error adding item to cart", error);
    }
  };

 
  const updateCartItem = async (productId, quantity, selected) => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/cart/update",
        { productId, quantity, selected },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(response.data.cart.items);
    } catch (error) {
      console.error("Error updating item in cart", error);
    }
  };

  
  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/api/cart/remove",
        { data: { productId } },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(response.data.cart.items);
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };


  const increaseQuantity = (id, quantity) => {
    updateCartItem(id, quantity + 1, true); 
  };

  
  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      updateCartItem(id, quantity - 1, true); 
    }
  };

  // Handle Select Item
  const toggleSelect = (id, selected) => {
    updateCartItem(id, 1, !selected);
  };

  // Handle Remove Item
  const removeItem = (id) => {
    removeFromCart(id); 
  };

  // Calculate Total Price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {loading ? (
        <p>Loading cart...</p>
      ) : error ? (
        <p>{error}</p>
      ) : cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.productId} className="cart-item">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleSelect(item.productId, item.selected)}
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <span className="cart-item-name">{item.name}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQuantity(item.productId, item.quantity)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.productId, item.quantity)}
                  >
                    +
                  </button>
                </div>
                <span>Rs {(item.price * item.quantity).toFixed(2)}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.productId)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: Rs {totalPrice.toFixed(2)}</h3>
            <button
              className="checkout-btn"
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
