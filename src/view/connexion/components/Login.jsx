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
import axios from "axios";
import { useRouter } from "next/router";
import * as yup from "yup";


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
      // zIndex: 1,
      opacity: 1,
    },
  },
  paper: {
    margin: theme.spacing(15, 30),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  submit: {
    marginTop: "20px",
    backgroundColor: "#5C9A9A",
    color: "white",
    width: "250px",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#F27C08",
    }
  },
  title: {
    marginTop: "5%",
    color: "#006262",
    fontSize: "40px",
  },
  hr: {
    width: "50%",
    height: "2px",
    backgroundColor: "#006262",
    border: "none",
    marginTop: "5%",
    marginBottom: "10px",
  },
  text: {
    width: "250px",
  }
}));

const schema = yup.object().shape({
  email: yup
    .string()
    .email({ key: "email", msg: "Merci de saisir un email valide" })
    .required({ key: "email", msg: "Merci de saisir un email valide" }),
  password: yup
    .string()
    .required({ key: "password", msg: "Merci de saisir votre mot de passe" }),
});

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const { setConnectedUser } = useContext(UserContext);
  const [errors, setErrors] = React.useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    const userId = {
      email: email,
      password: password,
    };

    schema
      .validate(userId)
      .then(async () => {
        try {
          const token = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}users/login`,
            userId
          );
          // console.log(token.data);
          localStorage.setItem("userToken", token.data.access_token);
          const config = {
            headers: {
              Authorization: `Bearer ${token.data.access_token}`,
            },
          };
          const userProfile = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}users/me`,
            config
          );
          setConnectedUser(userProfile.data);
          router.push("/");
        } catch (error) {
          if (error.response.status === 401) {
            setErrors([
              {
                key: "email",
                msg: "Identifiant ou mot de passe éronné",
              },
            ]);
          }
        }
      })
      .catch((err) => setErrors(err.errors));
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
            <img src="./assets/icon1.png" width="80px" className={classes.avatar}/>
          <Typography className={classes.title} variant="h3">
            CONNEXION
          </Typography>
          <hr className={classes.hr}></hr>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.text}
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
              error={errors.find((item) => item.key === "email")}
              helperText={errors.find((item) => item.key === "email")?.msg}
            />
            <TextField
              className={classes.text}
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
              error={errors.find((item) => item.key === "password")}
              helperText={errors.find((item) => item.key === "password")?.msg}
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
          </form>
        </div>
      </Grid>
    </div>
  );
}
