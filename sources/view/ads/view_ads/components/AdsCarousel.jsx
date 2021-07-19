import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const AdsCarousel = ({ className, ads }) => {
  const photos = ads?.photo?.split(",");
  return (
    <div className={className}>
      <Carousel>
        {photos?.map((photo) => (
          <div>
            <img src={photo} />
          </div>
        ))}
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
