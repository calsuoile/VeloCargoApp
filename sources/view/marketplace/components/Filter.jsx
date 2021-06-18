import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectCategory from "/sources/view/marketplace/components/SelectCategory";
import Slide from "/sources/view/marketplace/components/Slide";
import CheckBox from "/sources/view/marketplace/components/CheckBox";
import StateGeneral from "/sources/view/marketplace/components/StateGeneral";
import Brand from "/sources/view/marketplace/components/Brand";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import CountrySelector from "/sources/common/components/CountrySelector";

const useStyles = makeStyles((theme) => ({
  filter: {
    margin: "30px",
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
      <CheckBox />
      <StateGeneral />
      <Brand />
      <Button variant="contained" color="primary" className={classes.button}>
      Rechercher
      <SearchIcon />
      </Button>
    </div>
  );
}

export default Filter;
