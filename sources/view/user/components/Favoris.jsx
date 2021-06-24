import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import UserContext from "../../../context/user";
import axios from "axios";
import CardAds from "../../home/CardAds";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "Lato, sans-serif, Black italic",
    backgroundColor: "white",
    padding: 50,
    marginBottom: "50px",
    width: "500px",
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

function Favoris(props) {
  const classes = useStyles();

  const [favorites, setFavorites] = useState([]);
  const { connectedUser } = useContext(UserContext);

  useEffect(() => {
    if (Object.keys(connectedUser).length > 0) {
      Promise.all(
        connectedUser.favorites.map((item) => {
          const req = axios.get(
            // `https://toctoc-api.herokuapp.com/flat/${item}`
          );
          return req;
        })
      ).then((response) => setFavorites(response));
    }
  }, [connectedUser]);

  return (
    <div>
      <div className={classes.title}>
        <h1>
          <FavoriteIcon className={classes.icon} />
          Mes Favoris
        </h1>
      </div>
      <div className={classes.flat}>
        {favorites.map((favorite, index) => (
          <CardAds {...favorite.data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Favoris;
