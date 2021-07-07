import React, { useContext } from "react";
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
import UserContext from "../../../context/user";
// import axios from "axios";

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
  paper: {
    margin: theme.spacing(10, 20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: "20px",
    backgroundColor: "rgba(237, 162, 116, 1)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "50px",
  },
  submit: {
    width: "50%",
    margin: "100px",
  },
}));

export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const history = useHistory();
  // const { setConnectedUser } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    const userId = {
      email: email,
      password: password,
    };
    // try {
    //   const token = await axios.post(
    //     "http://velo-cargo-app.vercel.app/users/login",
    //     userID
    //   )

    //   console.log(token.data);
    //   localStorage.setItem("userToken", token.data.access_token);

    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token.data.access_token}`
    //     }
    //   };

    //   const userProfile = await axios.get(
    //     "http://velo-cargo-app.vercel.app/users/profile",
    //     config
    //   )

    //   setConnectedUser(userProfile.data);

    //   history.push("/");
    // } catch (error) {
    //   "identifiants incorrectes"
    // }
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
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DirectionsBikeIcon />
          </Avatar>
          <Typography variant="h5">CONNEXION</Typography>
          <form className={classes.form} noValidate>
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
              name="Mot de passe"
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
              onClick={handleClick}
            >
              CONNEXION
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
