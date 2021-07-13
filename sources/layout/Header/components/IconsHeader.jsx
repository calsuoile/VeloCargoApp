import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  favorite: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    backgroundColor: "#5C9A9A",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#F29F24",
    }
  },
  icon: {
    fontSize: "25px",
    color:"white",

  },
}));

export default function IconsHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="connexion">
        <Button aria-label="connexion" variant="contained" className={classes.button}>
          Connexion{" "}
        </Button>
      </Link>
      <Link href="mon-profil">
        <IconButton>
          <AccountCircleIcon className={classes.icon}/>
        </IconButton>
      </Link>
    </div>
  );
}
