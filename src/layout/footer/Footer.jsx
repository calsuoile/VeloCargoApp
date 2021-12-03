import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "30px",
    cursor: "pointer",
  },
  undertitle: {
    marginTop: "30px",
    cursor: "pointer",
    display: "inline-block",
  },
  articles: {
    marginTop: "-25px",
    cursor: "pointer",
    display: "inline-block",
  },
  container: {
    backgroundImage: "url(/assets/backgr.png)",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      display: "block",
    },
  },
  list: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    color: "white",
    width: "100%",
    marginLeft: "60px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
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
    fontWeight: 500,
    fontFamily: "Open Sans Condensed, sans-serif",
    color: "white",
    fontSize: "25px",
    borderBottom: "1px solid white",
    paddingBottom: "20px",
    width: "30%",
  },
  undertitle: {
    marginBottom: "5px",
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <ul className={classes.link}>
          <Typography className={classes.connexion}>PLAN DU SITE</Typography>
          <Link href="/acheter-un-velo-cargo">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              <li className={classes.title}>
                <strong>LES VELOS CARGO</strong>
              </li>
            </a>
          </Link>
          <div className={classes.undertitle}>
            <Link
              href="/acheter-un-velo-cargo/triporteur"
              className={classes.undertitle}
            >
              <a
                className={classes.undertitle}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li>Triporteurs</li>
              </a>
            </Link>
            <Link href="/acheter-un-velo-cargo/biporteur">
              <a
                className={classes.undertitle}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={classes.undertitle}>Biporteurs</li>
              </a>
            </Link>
            <Link href="/acheter-un-velo-cargo/tricycle">
              <a
                className={classes.undertitle}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={classes.undertitle}>Tricycles</li>
              </a>
            </Link>
            <Link href="/acheter-un-velo-cargo/longtail">
              <a
                className={classes.undertitle}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={classes.undertitle}>Longtails</li>
              </a>
            </Link>
            <Link href="/acheter-un-velo-cargo/remorque">
              <a
                className={classes.undertitle}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={classes.undertitle}>Remorques</li>
              </a>
            </Link>
            <Link href="/acheter-un-velo-cargo/accessoire">
              <a
                className={classes.undertitle}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className={classes.undertitle}>Accessoires</li>
              </a>
            </Link>
          </div>
        </ul>

        <ul className={classes.link}>
          <Link href="/vendre-un-produit">
            <li className={classes.articles}>
              <strong>VENDRE UN PRODUIT</strong>
            </li>
          </Link>
        </ul>
        <ul className={classes.link}>
          <Link href="/articles/page/1">
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              <li className={classes.articles}>
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
