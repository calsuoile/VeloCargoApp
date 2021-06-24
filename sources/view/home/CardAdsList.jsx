import React from "react";
import CardAds from "./CardAds";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";



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
  button: {
    display: "flex",
    marginLeft: "90%",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "black",
  },
}));

function CardAdsList({ adsCard }) {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} variant="h5">
        ACHETER UN VELO CARGO
      </Typography>
      <div className={classes.marketplace}>
        {adsCard.map((card, index) => (
          <CardAds {...card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CardAdsList;
