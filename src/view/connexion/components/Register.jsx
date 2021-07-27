import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import * as yup from "yup";
import { toast } from "react-toastify";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        CargoBikeTrade
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100vh",
    // backgroundColor: "#EDA274",
  },
  contain: {
    opacity: 0.5,
    "&:hover": {
      //     background: "rgb(104,219,150)",
      //   background: "radial-gradient(circle, rgba(104,219,150,1) 0%, rgba(255,209,150,0.6713060224089635) 100%)",
      zIndex: 1,
      opacity: 1,
    },
  },
  paper2: {
    margin: theme.spacing(10, 20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(237, 162, 116, 1)",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: "50px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#5C9A9A",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
  },
  names: {
    display: "flex",
  },
  name: {
    marginRight: "5%",
  },
  ok: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
  },
  dialog: {
    backgroundColor: "#F29F24",
    fontFamily: "Staatliches, cursive",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
  },
  alert: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "15px",
    marginTop: "20px",
  },
  title: {
    marginTop: "5%",
    color: "#006262",
    fontSize: "40px",
  },
  hr: {
    width: "50%",
    height: "3px",
    backgroundColor: "#006262",
    border: "none",
    marginTop: "5%",
    marginBottom: "10px",
  },
}));

const schema = yup.object().shape({
  email: yup
    .string()
    .email({ key: "email", msg: "Merci de saisir un email valide" })
    .required({ key: "email", msg: "Merci de saisir un email valide" }),
  password: yup
    .string()
    .required({ key: "password", msg: "Merci de saisir votre mot de passe" }),
  firstname: yup
    .string()
    .required({ key: "firstname", msg: "Merci de saisir votre prénom" }),
  lastname: yup
    .string()
    .required({ key: "lastname", msg: "Merci de saisir votre nom" }),
});

export default function Register() {
  const classes = useStyles();
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();

    schema
      .validate({ ...form, [e.target.name]: e.target.value })
      .then(async () => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}users`, form);
        router.push("/connexion");
        setOpen(true);
      })
      .catch((err) => {
        if (err?.response?.status) {
          toast.error("Cet email est déjà pris");
        }
        setErrors(err.errors);
      });
  };

  const handleChange = (e) => {
    schema
      .validate({ ...form, [e.target.name]: e.target.value })
      .catch((err) => setErrors(err.errors));
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid
        item
        component={Paper}
        elevation={6}
        square
        className={classes.contain}
      >
        <div className={classes.paper2}>
          <Avatar className={classes.avatar}>
            <DirectionsBikeIcon />
          </Avatar>
          <Typography className={classes.title} variant="h3">
            INSCRIPTION
          </Typography>
          <hr className={classes.hr}></hr>
          <form className={classes.form} onSubmit={handleClick} noValidate>
            <div className={classes.names}>
              <TextField
                className={classes.name}
                value={form.lastname}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="Nom"
                type="lastname"
                id="lastname"
                autoComplete="current-password"
                onChange={handleChange}
                error={errors?.find((item) => item.key === "lastname")}
                helperText={
                  errors?.find((item) => item.key === "lastname")?.msg
                }
              />
              <TextField
                className={classes.fname}
                value={form.firstname}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="firstname"
                label="Prenom"
                type="firstname"
                id="firstname"
                autoComplete="current-password"
                onChange={handleChange}
                error={errors?.find((item) => item.key === "firstname")}
                helperText={
                  errors?.find((item) => item.key === "firstname")?.msg
                }
              />
            </div>
            <TextField
              value={form.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              onChange={handleChange}
              error={errors?.find((item) => item.key === "email")}
              helperText={errors?.find((item) => item.key === "email")?.msg}
            />
            <TextField
              value={form.password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={errors?.find((item) => item.key === "password")}
              helperText={errors?.find((item) => item.key === "password")?.msg}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Inscription
            </Button>
            <Dialog
              open={open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" className={classes.dialog}>
                {"INSCRIPTION RÉUSSIE"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  className={classes.alert}
                >
                  Connectez vous pour continuer
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  className={classes.ok}
                  onClick={() => setOpen(false)}
                  color="primary"
                  autoFocus
                >
                  <strong>Ok</strong>
                </Button>
              </DialogActions>
            </Dialog>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </div>
  );
}
