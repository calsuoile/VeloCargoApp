import React from "react";
import ListArticlesHomePage from "./ListArticlesHomePage";
import Buysell from "./Buysell";
import Button from "@material-ui/core/Button";
import CardAdsList from "./CardAdsList";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
button:{
  display: "flex", 
  marginLeft:"90%",
  marginBottom:"30px",
  borderRadius : "15px",
  color : "black"
},
title: {
  margin: "50px",
  display: "flex",
  justifyContent: "center",
}}));

function Home(props) {
  const classes = useStyles();

  return (
    <div>
      <Buysell />
      <Typography className={classes.title} variant="h5">
          ACHETER UN VELO CARGO
      </Typography>
      <CardAdsList />
      <Button variant="contained" color="secondary" className={classes.button}>
        Voir Plus
      </Button>
      <ListArticlesHomePage />

    </div>
  );
}

export default Home;
