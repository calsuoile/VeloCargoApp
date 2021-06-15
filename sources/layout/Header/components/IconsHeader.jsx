import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconsHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton aria-label="like">
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton aria-label="account">
        <AccountCircleIcon />
      </IconButton>
    </div>
  );
}
