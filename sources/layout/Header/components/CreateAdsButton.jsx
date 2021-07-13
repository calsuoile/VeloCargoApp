import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  typo: {
    color: "white",
    fontSize: "20px",
  },
}));

export default function CreateAdsButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="/vendre-un-produit">
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h5" className={classes.typo}>
            DÉPOSER UNE ANNONCE
          </Typography>
        </a>
      </Link>
    </div>
  );
}
