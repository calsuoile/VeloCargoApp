import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Link from "next/link";

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
            <Link
              href="acheter-un-velo-cargo"
              style={{ textDecoration: "none" }}
            >
              <li>LES VELOS CARGO</li>
            </Link>
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
            <Link
              href="vendre-un-velo-cargo"
              style={{ textDecoration: "none" }}
            >
              <li>VENDRE UN VELO</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className={classes.title}>
            <Link href="articles" style={{ textDecoration: "none" }}>
              <li>ARTICLES</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <Form />
      </div>
      <div className={classes.logoform}>
        <Logo />
      </div>
    </div>
  );
}

export default Footer;
