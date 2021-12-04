import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "/src/view/connexion/components/Login";
import Register from "/src/view/connexion/components/Register";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
}));

export default function Connection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Login />
      <Register />
    </div>
  );
}
