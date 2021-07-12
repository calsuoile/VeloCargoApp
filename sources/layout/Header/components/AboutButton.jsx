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
    
    border: "none",
  },

  title :{
    "&:hover" : {
      color : "#FADF54",
      cursor: "pointer",
    },
  }
  

  
}));

export default function AboutButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="a-propos" style={{ textDecoration: "none" }}>
       <Typography variant="h6" className={classes.title}>
          À PROPOS
          </Typography>
    
      </Link>
    </div>
  );
}
