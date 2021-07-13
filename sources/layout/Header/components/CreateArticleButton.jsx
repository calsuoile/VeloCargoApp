import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";
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
    fontSize:"22px",
    "&:hover": {
      cursor: "pointer"
    },
    marginRight:"20px",
  
  }

}));

export default function CreateArticleButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="creer-un-article" style={{ textDecoration: "none" }}>
        <Typography variant="h5" className={classes.typo}>
          Créer un Article
        </Typography>
      </Link>
    </div>
  );
}
