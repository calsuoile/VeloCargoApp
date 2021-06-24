import React from "react";
import CardAds from "./CardAds";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  marketplace: {
    display: "grid",
    gridTemplateColumns: "300px 300px 300px",
    gridTemplateRows: "400px 400px",
    gridGap: "60px",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
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
      ;
      <Button variant="contained" color="secondary" className={classes.button}>
        Voir Plus
      </Button>
    </div>
  );
}

export default CardAdsList;
