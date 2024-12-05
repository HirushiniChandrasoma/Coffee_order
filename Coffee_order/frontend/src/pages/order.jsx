import React, { useState } from "react";
import "./order.css";
import headerImage from "../assets/coffee.png"; // Assuming the image path is correct

// Define product groups dynamically
const productGroups = [
  {
    title: "Specialty Coffees",
    products: [
      { id: 1, name: "Bean Cream Coffee", price: 549.99, image: headerImage },
      { id: 2, name: "Black Forest Coffee", price: 549.99, image: headerImage },
      { id: 3, name: "Vanilla Latte", price: 549.99, image: headerImage },
      { id: 4, name: "Hazelnut Cappuccino", price: 549.99, image: headerImage },
      { id: 5, name: "Caramel Macchiato", price: 549.99, image: headerImage },
    ],
  },
  {
    title: "Classic Coffees",
    products: [
      { id: 6, name: "Normal Coffee", price: 549.99, image: headerImage },
      { id: 7, name: "Cream Coffee", price: 549.99, image: headerImage },
      { id: 8, name: "Espresso", price: 499.99, image: headerImage },
      { id: 9, name: "Americano", price: 549.99, image: headerImage },
      { id: 10, name: "Café au Lait", price: 549.99, image: headerImage },
    ],
  },
  {
    title: "Premium Coffees",
    products: [
      { id: 11, name: "Espresso Coffee", price: 599.99, image: headerImage },
      { id: 12, name: "Vittoria Coffee", price: 599.99, image: headerImage },
      { id: 13, name: "Flat White", price: 549.99, image: headerImage },
      { id: 14, name: "Ristretto", price: 549.99, image: headerImage },
      { id: 15, name: "Affogato", price: 549.99, image: headerImage },
    ],
  },
  {
    title: "Seasonal Specials",
    products: [
      { id: 16, name: "Pumpkin Spice Latte", price: 599.99, image: headerImage },
      { id: 17, name: "Gingerbread Coffee", price: 599.99, image: headerImage },
      { id: 18, name: "Peppermint Mocha", price: 599.99, image: headerImage },
      { id: 19, name: "Eggnog Latte", price: 599.99, image: headerImage },
      { id: 20, name: "Toffee Nut Latte", price: 599.99, image: headerImage },
    ],
  },
  {
    title: "Seasonal1",
    products: [
      { id: 21, name: "Pumpkin Spice Latte", price: 599.99 ,image:headerImage },
      { id: 22, name: "Gingerbread Coffee", price: 599.99 ,image:headerImage },
      { id: 23, name: "Peppermint Mocha", price: 599.99 ,image:headerImage },
      { id: 24, name: "Eggnog Latte", price: 599.99 ,image:headerImage },
      { id: 25, name: "Toffee Nut Latte", price: 599.99 ,image:headerImage },
    ],
  },

  {
    title: "Seasonal2",
    products: [
      { id: 26, name: "Pumpkin Spice Latte", price: 599.99 ,image:headerImage },
      { id: 27, name: "Gingerbread Coffee", price: 599.99  ,image:headerImage},
      { id: 28, name: "Peppermint Mocha", price: 599.99 ,image:headerImage },
      { id: 29, name: "Eggnog Latte", price: 599.99 ,image:headerImage },
      { id: 30, name: "Toffee Nut Latte", price: 599.99 ,image:headerImage},
    ],
  },

  {
    title: "Seasonal3",
    products: [
      { id: 31, name: "Pumpkin Spice Latte", price: 599.99 ,image:headerImage },
      { id: 32, name: "Gingerbread Coffee", price: 599.99 ,image:headerImage },
      { id: 33, name: "Peppermint Mocha", price: 599.99 ,image:headerImage },
      { id: 34, name: "Eggnog Latte", price: 599.99 ,image:headerImage },
      { id: 35, name: "Toffee Nut Latte", price: 599.99 ,image:headerImage },
    ],
  },

  {
    title: "Seasonal4",
    products: [
      { id: 36, name: "Pumpkin Spice Latte", price: 599.99 ,image:headerImage },
      { id: 37, name: "Gingerbread Coffee", price: 599.99 ,image:headerImage },
      { id: 38, name: "Peppermint Mocha", price: 599.99 ,image:headerImage },
      { id: 39, name: "Eggnog Latte", price: 599.99 ,image:headerImage },
      { id: 40, name: "Toffee Nut Latte", price: 599.99 ,image:headerImage },
    ],
  },

  {
    title: "Seasonal5",
    products: [
      { id: 41, name: "Pumpkin Spice Latte", price: 599.99,image:headerImage  },
      { id: 42, name: "Gingerbread Coffee", price: 599.99 ,image:headerImage},
      { id: 43, name: "Peppermint Mocha", price: 599.99,image:headerImage },
      { id: 44, name: "Eggnog Latte", price: 599.99,image:headerImage },
      { id: 45, name: "Toffee Nut Latte", price: 599.99,image:headerImage },
    ],
  },

];

// The `Order` component
const Order = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Filter products dynamically based on the search input
  const filteredGroups = productGroups.map((group) => ({
    ...group,
    products: group.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="order-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Render Filtered Product Groups */}
      {filteredGroups.map(
        (group, index) =>
          group.products.length > 0 && ( // Render only groups with filtered products
            <div className="product-group" key={index}>
              <h2>{group.title}</h2>
              <div className="product-grid">
                {group.products.map((product) => (
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p>Price: €{product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Order;
