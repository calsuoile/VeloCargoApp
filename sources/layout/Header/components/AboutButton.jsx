import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },

    border: "none",
  },
  typo: {
    color: "white",
    fontSize: "20px",
    "&:hover": {
      color: "blue",
    },
  },
}));

export default function AboutButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="/a-propos">
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h5" className={classes.typo}>
            À PROPOS
          </Typography>
        </a>
      </Link>
    </div>
  );
}
