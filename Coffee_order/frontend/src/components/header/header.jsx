import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import headerImage from "../../assets/coffee.png"; 

const Header = () => {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById("explore-section");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Life’s Too Short for Boring Coffee – Make Every Sip Legendary!</h1>
        <p>
        Indulge in the rich aroma and bold flavors of our signature coffee. Whether it's the crack of dawn or a late-night grind, our brews are crafted to energize your body, ignite your creativity, and wrap your day in warmth. Let every cup be an adventure, one sip at a time.
        </p>
        <div className="header-buttons">
          <button className="explore-btn" onClick={scrollToExplore}>
            Explore
          </button>
          <Link to="/order">
          <button className="order-btn">Order Coffee</button>
        </Link>
        </div>
      </div>
      <div className="header-image">
        <img src={headerImage} alt="Coffee" />
      </div>
    </header>
  );
};

export default Header;
