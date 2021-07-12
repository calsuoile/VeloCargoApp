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
}));

export default function IconsHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="connexion">
        <Button aria-label="connexion" variant="contained" color="secondary">
          Connexion{" "}
        </Button>
      </Link>
      <Link href="mon-profil">
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Link>
    </div>
  );
}
