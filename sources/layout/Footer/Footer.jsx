import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  
  container: {
    backgroundColor: "#5E77EB",
    display: "flex",
    alignItems: "center",
  },
  
  list: {
    textDecoration: "none",
    display: "flex",
    backgroundColor: "#5E77EB",
    flexDirection: "column",
    color: "white",
    width: "100%",
    marginLeft: "60px",
    marginBottom: "20px",
  },

  logoform: {
    // display: "flex",
    // alignItems: "center",
  },

  link: {
    marginTop: "50px",
    listStyleType: "none",
    fontFamily: "Raleway",
  },
  logo: {
    marginTop: "50px",
    width: "100%",
  },
  form: {
    width: "100%", 
  },
  connexion: {
    marginBottom: "20px",
    color: "white",
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>

      <div className={classes.list}>
     
        <ul className={classes.link}>
        <Typography component="h1" variant="h5" className={classes.connexion}>
          PLAN DU SITE
        </Typography>
          <Link href="acheter-un-velo-cargo" style={{ textDecoration: "none" }}>
            <li className={classes.title}>
              <strong>LES VELOS CARGO</strong>
            </li>
          </Link>
          <li>Triporteur</li>
          <li>Biporteur</li>
          <li>Tricycle</li>
          <li>LongTrail</li>
          <li>Remorques</li>
          <li>Accessoires</li>
        </ul>
        <ul className={classes.link}>
          <Link href="vendre-un-velo-cargo" style={{ textDecoration: "none" }}>
            <li className={classes.title}>
              <strong>VENDRE UN PRODUIT</strong>
            </li>
          </Link>
          <li>Vendre un Vélo Cargo</li>
          <li>Vendre un accessoire</li>
          <li>Vendre une remorque</li>
        </ul>
        <ul className={classes.link}>
          <Link href="articles" style={{ textDecoration: "none" }}>
            <li className={classes.title}>
              <strong>ARTICLES & ASTUCES</strong>
            </li>
          </Link>
        </ul>
      </div>

      <div className={classes.form}>
        <Form />
      </div>

      <div className={classes.logo}>
        <Logo />
      </div>
    </div>
  );
}

export default Footer;
