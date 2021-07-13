import React from "react";
import CardAds from "./CardAds";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marketplace: {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "300px 300px 300px",
    gridTemplateRows: "400px 400px",
    gridGap: "60px",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
  },
  
}));

function CardAdsList({ adsCard }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.marketplace}>
        {adsCard.map((card, index) => (
          <CardAds {...card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CardAdsList;
