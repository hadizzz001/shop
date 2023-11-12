import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const AutoCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} >
      <div>
        <img src="https://res.cloudinary.com/dixtwo21g/image/upload/v1699477674/next/pc1mjcjvri20z95jzfch.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dixtwo21g/image/upload/v1699477675/next/twkk3qfwamebsdfadl6a.jpg" alt="Image 2" />
      </div>
      <div>
      <img src="https://res.cloudinary.com/dixtwo21g/image/upload/v1699477674/next/pc1mjcjvri20z95jzfch.jpg" alt="Image 1" /> 
      </div>
    </Carousel>
  );
};

export default AutoCarousel;
