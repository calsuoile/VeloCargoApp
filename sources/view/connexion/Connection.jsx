import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "/sources/view/connexion/components/Login";
import Register from "/sources/view/connexion/components/Register";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      display: "block",
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
