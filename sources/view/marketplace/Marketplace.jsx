import React from "react";
import CardAdsList from "/sources/view/home/CardAdsList";
import SortBy from "/sources/view/marketplace/components/SortBy";
import TitleAds from "/sources/view/marketplace/components/TitleAds";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "../marketplace/Filter";
import PaginationPage from "./components/PaginationPage";

const useStyles = makeStyles((theme) => ({
  Marketplace: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "50px",
  },
  titlesort: {
    display: "flex",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
}));

function Marketplace({ adsCard }) {
  const classes = useStyles();
  return (
    <div className={classes.Marketplace}>
      <Filter />
      <div className={classes.column}>
        <TitleAds />
        <SortBy />
        <CardAdsList adsCard={adsCard} />
        <PaginationPage />
      </div>
    </div>
  );
}

export default Marketplace;
