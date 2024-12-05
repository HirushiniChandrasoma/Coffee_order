import React from 'react';
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import CoffeeCarousel from '../components/CoffeeSlider/coffeeCarousel';




const Home = () => {
  return (
    <div>
     <Navbar/>
      <Header/>
      <CoffeeCarousel/>
      
      
    </div>
  );
};

export default Home;
