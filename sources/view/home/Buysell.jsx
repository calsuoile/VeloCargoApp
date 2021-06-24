import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Buy from "/sources/view/home/Buy";
import Sell from "/sources/view/home/Sell";


const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid red",
  }
}));

//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     minWidth: 300,
//     width: "100%",
//   },


function Buysell() {
  const classes = useStyles();

  return (
    <div > 
        <Buy />
        <Sell />
    </div>
  );
}

export default Buysell;
