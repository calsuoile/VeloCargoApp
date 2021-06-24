import React from "react";
import CardAds from "./CardAds";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    marketplace: {
      marginTop: "30px",
     display : "grid",
     gridTemplateColumns : "300px 300px 300px",
     gridTemplateRows : "400px 400px",
     gridGap : "60px", 
     justifyContent : "center",
     display : "flex",
     flexWrap :"wrap"

    },


  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
  },

}));

const adsCard = [
  {
    id: "1",
    photo: "https://source.unsplash.com/random?bike/4",
    title: "Vélo Cargo",
    price: "1230 €",
    city: "Bordeaux",
  },
  {
    id: "2",
    photo: "https://source.unsplash.com/random?bike/5",
    title: "Vélo Cargo",
    price: "1380 €",
    city: "Bordeaux",
  },
  {
    id: "3",
    photo: "https://source.unsplash.com/random?bike/6",
    title: "Vélo Cargo",
    price: "1560 €",
    city: "Bordeaux",
  },
  {
    id: "4",
    photo: "https://source.unsplash.com/random?bike/7",
    title: "Vélo Cargo",
    price: "1800 €",
    city: "Bordeaux",
  },
  {
    id: "5",
    photo: "https://source.unsplash.com/random?bike/8",
    title: "Vélo Cargo",
    price: "2300 €",
    city: "Bordeaux",
  },
  {
    id: "6",
    photo: "https://source.unsplash.com/random?bike/9",
    title: "Vélo Cargo",
    price: "2580 €",
    city: "Bordeaux",
  },
];
function CardAdsList() {
  const classes = useStyles();

  return (
    <div>

      <div className={classes.marketplace}>
        {adsCard.map((card, index) => (
          <CardAds {...card} key={index} />
        ))}
      </div>
      ;

    </div>
  );
}

export default CardAdsList;
