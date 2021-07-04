import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        VéloCargo
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  name: {
    display: "flex",
  },
}));

export default function Register() {
  const classes = useStyles();

  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const display = (e) => {
    e.preventDefault();
    console.log({ lastName }, { firstName }, { email }, { password });
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
          <Typography variant="h5">INSCRIPTION</Typography>
          <form className={classes.form} noValidate>
            <div className={classes.name}>
              <TextField
                value={lastName}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Nom"
                type="lastName"
                id="lastName"
                autoComplete="current-password"
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                value={firstName}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="firstName"
                label="Prenom"
                type="firstName"
                id="firstName"
                autoComplete="current-password"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <TextField
              value={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Mot de passe"
              label="Confirme ton mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={display}
            >
              Connexion
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </div>
  );
}
