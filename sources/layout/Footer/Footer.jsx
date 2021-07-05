import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./components/Logo";
import Formulaire from "./components/Formulaire";


const useStyles = makeStyles((theme) => ({

  list: {
    textDecoration: "none",
    display: "flex",
    backgroundColor: "#68db96",
    justifyContent: "space-around",
  },

  container: {
    backgroundColor: "#68db96",
  },
  
  logoform: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },


  title: {
    marginTop: "50px",
  },

}));

function Footer(props) {
  const classes = useStyles();


  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <div>
          <ul className={classes.title}>
            <li>LES VELOS CARGO</li>
            <li>Triporteur</li>
            <li>Biporteur</li>
            <li>Tricycle</li>
            <li>LongTrail</li>
            <li>Remorques</li>
            <li>Accessoires</li>
          </ul>
        </div>
        <div>
          <ul className={classes.title}>
            <li>VENDRE UN VELO</li>
          </ul>
        </div>
        <div>
          <ul className={classes.title}>
            <li>ARTICLES</li>
          </ul>
        </div>
      </div>
      <div>
        <Formulaire />
      </div>
      <div className={classes.logoform}>
        <Logo />
      </div>
    </div>
  );
}

export default Footer;
