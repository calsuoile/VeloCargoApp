import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    border: "none",
  },
}));

export default function AboutButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="a-propos" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          À PROPOS
        </Button>
      </Link>
    </div>
  );
}
