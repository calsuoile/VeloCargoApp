import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  carousel: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minWidth: "500px",
    minHeight: "350px",
    height: "auto",
    // [theme.breakpoints.down("sm")]: {
    //   minWidth: "80px",
    // },
    // [theme.breakpoints.down("md")]: {
    //   minWidth: "120px",
    // },
  },
}));
const AdsCarousel = ({ className, ads }) => {
  const classes = useStyles();
  const photos = ads?.photo?.split(",");

  return (
    <div className={className}>
      <Carousel showThumbs={false}>
        {photos?.map((photo, index) => (
          <div
            className={classes.carousel}
            key={index}
            className={classes.carousel}
            style={{
              backgroundImage: `url(${photo})`,
            }}
          ></div>
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
