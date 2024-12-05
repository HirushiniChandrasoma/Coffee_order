import React from "react";
import "./header.css";
import headerImage from "../../assets/coffee.png"; 



const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Enjoy The Most Delicious Coffee</h1>
        <p>
          Start your day with coffee, enhancing productivity and mood. Its
          invigorating aroma sets a focused tone for tackling tasks with
          renewed energy and positivity.
        </p>
        <div className="header-buttons">
          <button className="explore-btn">Explore</button>
          <button className="order-btn">Order Coffee</button>
        </div>
      </div>
      <div className="header-image">
        <img src={headerImage} alt="Coffee" />
      </div>
    </header>
  );
};

export default Header;
