import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const AdsCarousel = ({ className }) => {
  return (
    <div className={className}>
      <Carousel>
        <div>
          <img src="https://source.unsplash.com/random?bike/1" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random?bike/2" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random?bike/3" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random?bike/4" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random?bike/5" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random?bike/6" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random?bike/7" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random?bike/8" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random?bike/9" />
        </div>
      </Carousel>
    </div>
  );
};

export default AdsCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
