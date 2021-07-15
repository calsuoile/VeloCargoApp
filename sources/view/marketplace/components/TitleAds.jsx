import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: "30px",
        color: "#006262",
        fontFamily:"Staatliches, cursive",
        textAlign: "center",
        fontSize: "40px",
    },
    hr: {
      width: "20%",
      height: "5px",
      backgroundColor:"#006262",
      border:"none",
    },
}));

function TitleAds(props) {
    const classes = useStyles();
    return (
        <div>
          <Typography className={classes.title} variant="h5">
          ACHETER UN VELO CARGO
          <hr className={classes.hr}></hr>
          </Typography>
        </div>
    );
}

export default TitleAds;