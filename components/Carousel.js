"use client"

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <div className="syw-container">
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/91625c86-893f-4dd1-9827-902dc6a38f76/61lwJy4B8PL_SX3000_2.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/bbf97cdf-d0d2-47a1-b31b-b9579aceff8f/61lwJy4B8PL_SX3000_.jpg"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/8ea93ba6-2743-4adc-8da0-405a2c46a275/61lwJy4B8PL_SX3000_1.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/279e994d-3481-4e1c-a185-6962f1b5d2ff/61zAjw4bqPL_SX3000_.jpg"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
      </Carousel>
 

    </div>
  );
};

export default MyComponent;

