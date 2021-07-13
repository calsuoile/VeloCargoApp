import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/assets/backgr.png)",
    display: "flex",
    alignItems: "center",
  },

  list: {
    textDecoration: "none",
    display: "flex",
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
          <Link href="/acheter-un-velo-cargo">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              <li className={classes.title}>
                <strong>LES VELOS CARGO</strong>
              </li>
            </a>
          </Link>
          <Link href="/">
          <a style={{ textDecoration: "none", color: "inherit" }}>
              <li>Triporteur</li>
            </a>
          </Link>
          <Link href="/">
          <a style={{ textDecoration: "none", color: "inherit" }}>
              <li>Biporteur</li>
            </a>
          </Link>
          <Link href="/">
          <a style={{ textDecoration: "none", color: "inherit" }}>
              <li>Tricycle</li>
            </a>
          </Link>
          <Link href="/">
          <a style={{ textDecoration: "none", color: "inherit" }}>
              <li>LongTrail</li>
            </a>
          </Link>
          <Link href="/">
          <a style={{ textDecoration: "none", color: "inherit" }}>
              <li>Remorques</li>
            </a>
          </Link>
          <Link href="/">
          <a style={{ textDecoration: "none", color: "inherit" }}>
              <li>Accessoires</li>
            </a>
          </Link>
        </ul>
        <ul className={classes.link}>
          <Link href="/vendre-un-produit">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              <li className={classes.title}>
                <strong>VENDRE UN PRODUIT</strong>
              </li>
            </a>
          </Link>
          <Link href="/vendre-un-velo-cargo">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              <li>Vendre un Vélo Cargo</li>
            </a>
          </Link>
          <Link href="/vendre-un-accessoire">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              <li>Vendre un accessoire</li>
            </a>
          </Link>

          <Link href="/vendre-une-remorque">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              <li>Vendre une remorque</li>
            </a>
          </Link>
        </ul>
        <ul className={classes.link}>
          <Link href="/articles">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              <li className={classes.title}>
                <strong>ARTICLES & ASTUCES</strong>
              </li>
            </a>
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
