import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid, Button } from "@material-ui/core";
import Logo from "./components/Logo";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  list: {
    textDecoration: "none",
    display: "flex",
    backgroundColor: "#68db96",
    justifyContent: "space-around",
  },

  container: {
    backgroundColor: "#68db96",
  },
  contactform: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "30%",
    margin: "auto",
    // padding: "300px",
    // width: "500px",
  },
  textfield: {
    backgroundColor: "white",
    size: "50px",
  },
  button: {
    size: "40px",
    margin: "20px",
    marginTop: "30px",
    display: "flex",
    alignItems: "flex-end",
  },
  logoform: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: "20%",
    height: "20%",
    "&:hover": {
      width: "23%",
      height: "23%",
    },
  },
  inputTitle: {
    margin: "10px",
  },
  title: {
    marginTop: "50px",
  },
  button: {
    background: "none",
    border: "none",
    "&:hover": {
      color: "pink",
    },
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

      <div className={classes.logoform}></div>
      <div className={classes.contactform}>
        <Grid item xs={12} data-aos="fade-up" className={classes.contact}>
          <h3>Nous contactez</h3>
          <p>On vous réponds dans les plus brefs délais</p>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Nom
          </Typography>
          <TextField
            className={classes.textfield}
            placeholder="Nom"
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12} data-aos="fade-up">
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            E-mail
          </Typography>
          <TextField
            className={classes.textfield}
            placeholder="Email"
            variant="outlined"
            size="medium"
            name="email"
            fullWidth
            type="email"
          />
        </Grid>
        <Grid item xs={12} data-aos="fade-up">
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Message
          </Typography>
          <TextField
            className={classes.textfield}
            placeholder="Quelle est ta question?"
            variant="outlined"
            name="message"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            color="primary"
            size="large"
          >
            Envoyez
          </Button>
        </Grid>
      </div>
      <div className={classes.logoform}>
        <Logo />
      </div>
    </div>
  );
}

export default Footer;
