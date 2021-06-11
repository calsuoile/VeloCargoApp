import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles({
  header: {
    marginLeft: "50px",
  },

  photo: {
      width: "800px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "2px",
    gridTemplateRows: "repeat(2, 6fr)",
    marginleft: "20px",
  },

  photo1: {
    width: "150%",
    borderRadius: "15px",

    gridRow: "1 / 2",
    gridColumn: "1 / 2",
    marginBottom: "10px",
  },

  photo2: {
    width: "80%",
    borderRadius: "15px",

    gridRow: 2,
    gridColumn: "1 / 2",
  },

  photo3: {
    width: "80%",
    borderRadius: "15px",

    gridRow: 2,
    gridColumn: "2 /2",
  },
});
function Ads(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>
        <Typography variant="h1">VELO CARGO PEUGEOT</Typography>
        <Typography variant="body2">Michel Dupont à Bordeaux</Typography>
        <Typography variant="body1">Le 17 mai 2021</Typography>
      </div>
      <div className={classes.photo}>
        <img className={classes.photo1} src="https://placedog.net/990" />
        <img className={classes.photo2} src="https://placedog.net/991" />
        <img className={classes.photo3} src="https://placedog.net/992" />
      </div>
    </div>
  );
}

export default Ads;
