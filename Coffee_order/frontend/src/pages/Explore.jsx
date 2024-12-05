import React, { useState } from "react";
import "./Explore.css";
import Espresso from '../assets/espresso.png';
import Brewed from '../assets/brewed.png';
import Decaf from '../assets/decaf.jpg';
import Eggnot from '../assets/eggnot.jpg';
import Hotc from '../assets/hotc.jpg';
import P2 from '../assets/pumpkin.png';
import Pumpkin from '../assets/pumpkin.jpg';
import Special from '../assets/special.jpg';
import Tonic from '../assets/tonic.jpg';

// Dummy data for categories and drinks
const categories = [
  {
    name: "Espresso-Based Coffees",
    description: "Embrace the bold, embrace the rich – your perfect espresso-based coffee is waiting for you!",
    image: Espresso, 
    drinks: ["Espresso", "Americano", "Latte", "Cappuccino"],
  },
  {
    name: "Brewed Coffees",
    description: "Experience the classic elegance of our brewed coffees – perfectly balanced and brewed to awaken your senses",
    image: Brewed, // replace with actual URL
    drinks: ["Mojito", "Margarita", "Pina Colada", "Martini"],
  },
  {
    name: "Non-Coffee Beverages",
    description: "Not a coffee fan? No problem! Dive into our refreshing non-coffee beverages, crafted to offer something for everyone – cool, flavorful, and satisfying every sip",
    image: Hotc, // replace with actual URL
    drinks: ["Mojito", "Margarita", "Pina Colada", "Martini"],
  },
  {
    name: "Flavored Coffees",
    description: "Take your coffee journey to the next level with our flavored coffees – infused with rich, delicious notes that transform your favorite brew into something extraordinary",
    image: Pumpkin, // replace with actual URL
    drinks: ["Mojito", "Margarita", "Pina Colada", "Martini"],
  },
  {
    name: "Iced Coffees",
    description: "Cool down and wake up with our iced coffees – a refreshing twist on your favorite brew, perfect for those hot days or any time you crave a chilled pick-me-up",
    image: P2, // replace with actual URL
    drinks: ["Mojito", "Margarita", "Pina Colada", "Martini"],
  },
  {
    name: "Specialty Coffees",
    description: "Discover a world of unique and bold flavors with our specialty coffees – each cup is a masterpiece, crafted with the finest beans to deliver an unforgettable experience.",
    image: Special, // replace with actual URL
    drinks: ["Mojito", "Margarita", "Pina Colada", "Martini"],
  },
  {
    name: "Decaffeinated Coffees",
    description: "Enjoy the rich, full-bodied taste of our decaffeinated coffees – all the flavor, none of the caffeine. Perfect for those who want to savor every sip, day or night.",
    image: Decaf, // replace with actual URL
    drinks: ["Mojito", "Margarita", "Pina Colada", "Martini"],
  },
  {
    name: "Signature Drinks",
    description: "Unveil the artistry of our signature drinks – a blend of creativity and quality, specially crafted to deliver an exclusive coffee experience you won’t find anywhere else.",
    image: Tonic, // replace with actual URL
    drinks: ["IPA", "Stout", "Lager", "Pilsner"],
  },
  {
    name: "Seasonal Offerings",
    description: "Celebrate the season with our limited-time offerings – from cozy winter blends to refreshing summer brews, our seasonal drinks are crafted to capture the essence of every time of year.",
    image: Eggnot, // replace with actual URL
    drinks: ["Red Wine", "White Wine", "Rose Wine", "Champagne"],
  },
];

const Explore = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleClick = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="explore-wrapper">
      <div className="explore-container">
        {categories.map((category) => (
          <div
            className={`category-container ${expandedCategory === category.name ? "expanded" : ""}`}
            key={category.name}
            onClick={() => handleClick(category.name)}
          >
            <div className="category-header">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
            {expandedCategory === category.name && (
              <div className="drink-list">
                <ul>
                  {category.drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
