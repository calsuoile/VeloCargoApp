import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  buttongroup: {
    marginTop: "30px",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: "50%",
    height: "50%",
    marginBottom: "15px",
  },
  button: {
    background: "none",
    border: "none",
    color: "#BFD9D9",
    "&:hover": {
      color: "#F27C08",
    },
  },
  button2: {
    background: "none",
    border: "none",
    color: "#BFD9D9",
    "&:hover": {
      color: "#F27C08",
    },
  },
  button3: {
    background: "none",
    border: "none",
    color: "#BFD9D9",
    "&:hover": {
      color: "#F27C08",
    },
    marginBottom: "30px",
  },
  icon: {
    fontSize: "35px",
  },
  button4: {
    background: "none",
    border: "none",
    color: "#BFD9D9",
    "&:hover": {
      color: "#F27C08",
    },
  },
}));

function Logo(props) {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <img className={classes.img} src="/assets/CargoBikeTrade.png" />
      <div className={classes.buttongroup}>
        <a href="https://instagram.com/CargoBikeTrade" target="_blank">
          <button className={classes.button}>
            <InstagramIcon className={classes.icon} />
          </button>
        </a>
        <a href="https://facebook.com/CargoBikeTrade" target="_blank">
          <button className={classes.button2}>
            <FacebookIcon className={classes.icon} />
          </button>
        </a>
        <a href="https://twitter.com/CargoBikeTrade" target="_blank">
          <button className={classes.button3}>
            <TwitterIcon className={classes.icon} />
          </button>
        </a>
        <a href="https://linkedin.com/company/cargobiketrade" target="_blank">
          <button className={classes.button4}>
            <LinkedInIcon className={classes.icon} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Logo;
