import React from 'react';
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import CoffeeCarousel from '../components/CoffeeSlider/coffeeCarousel';
import Explore from './Explore';





const Home = () => {
  return (
    <div>
     <Navbar/>
      <Header/>
      <CoffeeCarousel/>
      <section id="explore-section" className="explore-section">
    
  <h2 className="explore-title">Explore Our Coffee</h2>
  <p className="explore-description">Discover our wide range of coffee products and more.</p>

</section>

      <Explore/>
      
      
      
    </div>
  );
};

export default Home;
