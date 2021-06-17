import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";


const AdsCarousel = ({ className }) => {
  return (
    <div className={className}>
      <Carousel >
        <div>
          <img src="https://placedog.net/991"  />
        </div>
        <div>
          <img src="https://placedog.net/992" />
        </div>
        <div>
          <img src="https://placedog.net/993" />
        </div>
        <div>
          <img src="https://placedog.net/994" />
        </div>
        <div>
          <img src="https://placedog.net/995" />
        </div>
        <div>
          <img src="https://placedog.net/996" />
        </div>
        <div>
          <img src="https://placedog.net/997" />
        </div>
        <div>
          <img src="https://placedog.net/998"  />
        </div>
        <div>
          <img src="https://placedog.net/999"  />
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
