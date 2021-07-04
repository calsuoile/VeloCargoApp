import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Link from "next/link";

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
      <Link href="mon-profil">
      <IconButton className={classes.favorite} aria-label="like">
        <FavoriteBorderIcon />
      </IconButton>
      </Link>
      <Link href="connexion">
        <IconButton aria-label="account">
          <AccountCircleIcon />
        </IconButton>
      </Link>
    </div>
  );
}
