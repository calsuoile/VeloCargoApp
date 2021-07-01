import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import UserContext from "../../../context/user";
import CardAds from "../../home/components/CardAds";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "Lato, sans-serif, Black italic",
    backgroundColor: "white",
    padding: 50,
    marginBottom: "50px",
    width: "300px",
    margin: "auto",
  }, 
  flat: {
    display: "flex",
    justifyContent: "space-around",
  },
  icon: {
    width: "50px",
    color: "#4E96AF",
  },
}));

function MyAds(props) {
  const classes = useStyles();

  const { connectedUser } = useContext(UserContext);
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    console.log(connectedUser);

    if (Object.keys(connectedUser).length > 0) {
      const accessToken = localStorage.getItem("userToken");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      axios
        // .get(`https://toctoc-api.herokuapp.com/flat/my-flat`, config)
        .then((response) => {
          setFlats(response.data);
          console.log(response.data);
        });
    }
  }, [connectedUser]);

  return (
    <div>
      <div className={classes.title}>
        <h1>
          <HomeIcon className={classes.icon} />
          Mes Annonces
        </h1>
      </div>
      <div className={classes.flat}>
        {flats.map((flat) => (
          <CardAds {...flat} />
        ))}
      </div>
    </div>
  );
}

export default MyAds;
