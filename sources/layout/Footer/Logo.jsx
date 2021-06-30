import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
  button4: {
    background: "none",
    border: "none",
    "&:hover": {
      color: "#115293",
    },
  },
}));

function Logo(props) {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <img className={classes.img} src="/assets/logoVC.png" />
    <div className={classes.buttongroup}>
    <a href="https://instagram.com/CargoBikeTrade">
    <button className={classes.button}>
    <InstagramIcon className={classes.icon} />
    </button>
    </a>
    <a href="https://facebook.com/CargoBikeTrade">
      <button className={classes.button2}>
        <FacebookIcon className={classes.icon} />
      </button>
      </a>
      <a href="https://twitter.com/CargoBikeTrade">
      <button className={classes.button3}>
        <TwitterIcon className={classes.icon} />
      </button>
      </a>
      <a href="https://linkedin.com/company/cargobiketrade">
      <button className={classes.button4}>
        <LinkedInIcon className={classes.icon} />
      </button>
      </a>
    </div>
    </div>
  );
}

export default Logo;
