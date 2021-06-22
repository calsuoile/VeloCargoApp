import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectCategory from "/sources/view/marketplace/components/SelectCategory";
import Slide from "/sources/view/marketplace/components/Slide";
import Garant from "/sources/view/marketplace/components/Garant";
import Flash from "/sources/view/marketplace/components/Flash";
import StateGeneral from "/sources/view/marketplace/components/StateGeneral";
import Brand from "/sources/view/marketplace/components/Brand";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import CountrySelector from "/sources/common/components/CountrySelector";

const useStyles = makeStyles((theme) => ({
  filter: {
    margin: "30px",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#FFF2C7",
  },
}));

function Filter(props) {
  const classes = useStyles();
  return (
    <div className={classes.filter}>
      <h1>FILTRES</h1>
      <SelectCategory />
      <CountrySelector />
      <Slide />
      <StateGeneral />
      <Brand />
      <Flash />
      <Garant />
      <Button variant="contained" color="primary" className={classes.button}>
      Rechercher
      <SearchIcon />
      </Button>
    </div>
  );
}

export default Filter;
