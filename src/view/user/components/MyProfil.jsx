import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import UserContext from "../../../context/user";
import axios from "axios";
import { Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  h1: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    fontSize: "80px",
    color: "#BFD9D9",
  },
  container: {
    border: "3px solid #006969 ",
    margin: "50px 50px 50px 50px",
    borderRadius: "10px",
    marginBottom: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "92%",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "80%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      margin: "5px auto",
      alignItems: "center",
    },
  },
  firstname: {
    display: "flex",
    justifyContent: "center",
    margin: "30px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
    },
  },
  lastname: {
    display: "flex",
    justifyContent: "center",
    margin: "30px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
    },
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    width: "100px",
    display: "flex",
    marginTop: "30px",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(1),
      marginLeft: 0,
    },
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    margin: theme.spacing(3),
    marginLeft: "50px",
    marginRight: "50px",
    paddingBottom: "10px",
    color: "#006969",
  },
  text: {
    marginBottom: "10px",
  },

  button2: {
    marginTop: "10px",
    borderRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
}));

function MyProfil(props) {
  const classes = useStyles();
  const { connectedUser, setConnectedUser } = useContext(UserContext);
  const [edition, setEdition] = useState(false);
  const [form, setForm] = useState({
    firstname: connectedUser.firstname,
    lastname: connectedUser.lastname,
    email: connectedUser.email,
    phone_number: connectedUser.phone_number,
    city: connectedUser.city,
  });

  const handleEdition = () => {
    setEdition(true);
  };

  const handleChange = (e) => {
    setForm((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const handleClick = async () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const updatedUser = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}users/${connectedUser.id}`,
          form,
          config
        );
        setConnectedUser({ ...connectedUser, ...form });
      }
    } catch (e) {}
    setEdition(false);
  };

  return (
    <div>
      <div className={classes.container}>
        <Typography variant="h1" className={classes.h1}>
          PROFIL
        </Typography>
        {!edition ? (
          <div>
            <div>
              <Typography className={classes.firstname} variant="h2">
                {" "}
                {connectedUser.firstname}
              </Typography>{" "}
              <Typography className={classes.lastname} variant="h2">
                {connectedUser.lastname}
              </Typography>{" "}
            </div>
            <div className={classes.contact}>
              <Typography variant="h2">{connectedUser.email}</Typography>{" "}
              <Typography variant="h2">{connectedUser.phone_number}</Typography>{" "}
              <Typography variant="h2">{connectedUser.city}</Typography>{" "}
            </div>{" "}
          </div>
        ) : (
          <div className={classes.form}>
            <form>
              <TextField
                fullWidth={true}
                placeholder="Prénom"
                name="firstname"
                variant="outlined"
                value={form.firstname}
                onChange={handleChange}
                className={classes.text}
              ></TextField>{" "}
              <TextField
                fullWidth={true}
                placeholder="Nom"
                name="lastname"
                variant="outlined"
                value={form.lastname}
                onChange={handleChange}
                className={classes.text}
              ></TextField>
              <TextField
                fullWidth={true}
                placeholder="Email"
                name="email"
                variant="outlined"
                value={form.email}
                onChange={handleChange}
                className={classes.text}
              ></TextField>
              <TextField
                fullWidth={true}
                placeholder="Numéro de téléphone"
                name="phone_number"
                variant="outlined"
                value={form.phone_number}
                onChange={handleChange}
                className={classes.text}
              ></TextField>
              <TextField
                fullWidth={true}
                placeholder="Ville"
                name="city"
                variant="outlined"
                value={form.city}
                onChange={handleChange}
                className={classes.text}
              ></TextField>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button2}
                onClick={handleClick}
              >
                Valider
              </Button>
            </form>{" "}
          </div>
        )}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleEdition}
        >
          Modifier
        </Button>
      </div>
    </div>
  );
}

export default MyProfil;
