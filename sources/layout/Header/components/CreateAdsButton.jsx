import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  typo: {
    fontWeight: 500,
    fontFamily: "Open Sans Condensed, sans-serif",
    color: "white",
    fontSize: "22px",
    marginRight: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function CreateAdsButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="/vendre-un-produit">
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <Typography className={classes.typo}>
            <strong>DÉPOSER UNE ANNONCE</strong>
          </Typography>
        </a>
      </Link>
    </div>
  );
}
