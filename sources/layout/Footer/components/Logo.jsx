import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  img: {
    width: "20%",
    height: "20%",
  },
  button: {
    background: "none",
    border: "none",
    "&:hover": {
      color: "#cb1f91",
    },
  },
  button2: {
    background: "none",
    border: "none",
    "&:hover": {
      color: "#3b5796",
    },
  },
  button3: {
    background: "none",
    border: "none",
    "&:hover": {
      color: "#00aee6",
    },
  marginBottom: "30px",

  },
  icon: {
    fontSize: "35px",
  },
}));

function Logo(props) {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <img className={classes.img} src="/assets/logoVC.png" />
    <div className={classes.buttongroup}>
      <button className={classes.button}>
        <InstagramIcon className={classes.icon} />
      </button>
      <button className={classes.button2}>
        <FacebookIcon className={classes.icon} />
      </button>
      <button className={classes.button3}>
        <TwitterIcon className={classes.icon} />
      </button>
    </div>
    </div>
  );
}

export default Logo;
