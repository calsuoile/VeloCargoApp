import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    border: "none",
  },
  typo: {
    color: "white",
    fontSize: "22px",
    "&:hover": {
      cursor: "pointer",
    },
    marginRight: "20px",
  },
}));

export default function CreateArticleButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="/creer-un-article">
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h5" className={classes.typo}>
            Créer un Article
          </Typography>
        </a>
      </Link>
    </div>
  );
}
