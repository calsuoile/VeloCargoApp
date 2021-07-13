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
    fontSize:"22px",
    "&:hover": {
      cursor: "pointer"
    },
    marginRight:"20px",
    borderLeft: "1px solid",
    paddingLeft:"20px",
  }
}));

export default function AboutButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="a-propos" style={{ textDecoration: "none" }}>
        <Typography variant="h5" className={classes.typo}>
          À PROPOS
        </Typography>
      </Link>
    </div>
  );
}
