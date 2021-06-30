import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "./components/components/Slide";
import Garant from "./components/components/Garantee";
import Flash from "./components/components/Flash";
import StateGeneral from "./components/components/StateGeneral";
import Brand from "./components/components/Brand";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import SelectCategory from "./components/components/SelectCategory";

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
