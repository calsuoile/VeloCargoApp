import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import UserContext from "../../../context/user";
import axios from "axios";
import {
  Typography,
  Button,
  Input,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  h1: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    fontSize: "80px",
  },
  container: {
    border: "3px solid #006969 ",
    margin: "50px 50px 50px 50px",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "100px",
    width: "92%",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      

  },},
  name: {
    display: "flex",
    justifyContent: "center",
    margin: "30px",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
  },

  button: {
    width: "100px",
    display: "flex",
    marginLeft: "90%",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "white",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: theme.spacing(1),
    width: "500px",
    fontSize: "50px",
  },

  button2: {
    marginTop: "10px",
    borderRadius: "15px",
  },
}));

function MyProfil(props) {
  const classes = useStyles();

  const { connectedUser } = useContext(UserContext);

  const [edition, setEdition] = React.useState(true);
  const handleEdition = () => {
    setEdition(!edition);
  };

  const [form, setForm] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = () => {
  //   console.log(form);
  // };

  const handleClick = async () => {
    if (editionMode) {
      try {
        const accessToken = localStorage.getItem("userToken");
        if (accessToken) {
          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
          const updatedUser = await axios.patch(
            `http://localhost:3030/users/${form._id}`,
            form,
            config
          );
          setForm(updatedUser.data);
          setConnectedUser(updatedUser.data);
        }
      } catch (e) {}
    }

    setEditionMode(!editionMode);
  };

  return (
    <div>
      <div className={classes.container}>
        <Typography variant="h1" className={classes.h1}>
          PROFIL
        </Typography>
        {edition ? (
          <div>
            <div className={classes.name}>
              <Typography variant="h2"> {connectedUser.firstname}</Typography>{" "}
              <Typography variant="h2">{connectedUser.lastname}</Typography>{" "}
            </div>
            <div className={classes.contact}>
              <Typography variant="h2">{connectedUser.email}</Typography>{" "}
              <Typography variant="h2">{connectedUser.phone_number}</Typography>{" "}
              <Typography variant="h2">{connectedUser.city}</Typography>{" "}
            </div>{" "}
          </div>
        ) : (
          <div>
            <form className={classes.form}>
              <div className={classes.name}>
                <Input
                  fullWidth={true}
                  placeholder="Prénom"
                  name="firstname"
                  form={form.firstname}
                  onChange={handleChange}
                ></Input>
                <Input
                  fullWidth={true}
                  placeholder="Nom"
                  name="lastname"
                  form={form.lastname}
                  onChange={handleChange}
                ></Input>
              </div>
              <div className={classes.contact}>
                <Input
                  fullWidth={true}
                  placeholder="Email"
                  name="email"
                  form={form.email}
                  onChange={handleChange}
                ></Input>
                <Input
                  fullWidth={true}
                  placeholder="Numéro de téléphone"
                  name="phone_number"
                  form={form.phone_number}
                  onChange={handleChange}
                ></Input>
                <Input
                  fullWidth={true}
                  placeholder="Ville"
                  name="city"
                  form={form.city}
                  onChange={handleChange}
                ></Input>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button2}
                  onClick={handleClick}
                >
                  Valider
                </Button>
              </div>
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
