import React from "react";
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
<<<<<<< HEAD
// import axios from "axios";
=======
import axios from "axios";
import { useRouter } from "next/router";
>>>>>>> origin/dev

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="accueil">
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

  const [lastname, setLastName] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    const userInscription = {
      lastname: lastname,
      firstname: firstname,
      email: email,
      password: password,
    };
    await axios.post("http://localhost:3030/users", userInscription);
    router.push("/");
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
          <form className={classes.form} onSubmit={handleClick} noValidate>
            <div className={classes.name}>
              <TextField
                value={lastname}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="Nom"
                type="lastname"
                id="lastname"
                autoComplete="current-password"
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                value={firstname}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="firstname"
                label="Prenom"
                type="firstname"
                id="firstname"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={handleClick}
            >
              Inscription
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
