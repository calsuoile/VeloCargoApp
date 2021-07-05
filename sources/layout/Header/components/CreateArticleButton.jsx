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

export default function CreateArticleButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="creer-un-article" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Créer un Article
        </Button>
      </Link>
    </div>
  );
}
