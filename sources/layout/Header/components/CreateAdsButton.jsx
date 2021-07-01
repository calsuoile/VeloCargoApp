import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "#f4c15b",
    },
  },
}));

export default function CreateAdsButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="vendre-un-velo-cargo" style={{ textDecoration: "none" }}>
        <Button variant="contained">DÉPOSER UNE ANNONCE</Button>
      </Link>
    </div>
  );
}
