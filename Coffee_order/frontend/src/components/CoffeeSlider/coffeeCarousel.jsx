import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./cofeeCarousel.css"; 
import coffeeImage from "../../assets/coffee.png";

const CoffeeCarousel = () => {
  const swiperRef = useRef(null);  // Create a reference for the Swiper instance

  const coffeeData = [
    { name: 'Americano', description: 'A coffee drink typically made from equal parts espresso...', image: coffeeImage, rating: 4.9 },
    { name: 'Black Coffee', description: 'Black coffee is a hot coffee beverage simply made...', image: coffeeImage, rating: 4.9 },
    { name: 'Mocha', description: 'A coffee drink known for its chocolatey sweet, rich flavor...', image: coffeeImage, rating: 4.9 },
    { name: 'Breve', description: 'Breve is a coffee drink made with equal parts espresso and...', image: coffeeImage, rating: 4.9 },
    { name: 'Breve', description: 'Breve is a coffee drink made with equal parts espresso and...', image: coffeeImage, rating: 4.9 },
    { name: 'Breve', description: 'Breve is a coffee drink made with equal parts espresso and...', image: coffeeImage, rating: 4.9 },
    { name: 'Breve', description: 'Breve is a coffee drink made with equal parts espresso and...', image: coffeeImage, rating: 4.9 },
    { name: 'Breve', description: 'Breve is a coffee drink made with equal parts espresso and...', image: coffeeImage, rating: 4.9 },
    { name: 'Breve', description: 'Breve is a coffee drink made with equal parts espresso and...', image: coffeeImage, rating: 4.9 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();  // Move to the next slide
      }
    }, 2000);  // Change slides every 2 seconds

    return () => clearInterval(interval);  // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className="coffee-slider-container">
      <Swiper
        ref={swiperRef}  // Attach the swiperRef to the Swiper instance
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        grabCursor={true}  
      >
        {coffeeData.map((coffee, index) => (
          <SwiperSlide key={index}>
            <div className="coffee-card">
              <img src={coffee.image} alt={coffee.name} className="coffee-image" />
              <h3>{coffee.name}</h3>
              <p>{coffee.description}</p>
              <span className="rating">⭐ {coffee.rating}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoffeeCarousel;
