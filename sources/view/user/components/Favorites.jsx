import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import UserContext from "../../../context/user";
import axios from "axios";
import CardAds from "../../ads/view_ads/components/CardAds";

const useStyles = makeStyles((theme) => ({
  contain: {
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  title: {
    marginLeft: "50px",
    marginRight: "50px",
    borderBottom: "1px solid",
    marginBottom: "20px",
  },
  favorite: {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "300px 300px 300px",
    gridTemplateRows: "400px 400px",
    gridGap: "60px",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
}));

function Favorites(props) {
  const classes = useStyles();
  const { connectedUser } = useContext(UserContext);
  const [favorites, setFavorites] = useState([]);
  // const [favorites, setFavorites] = useState([
  //   {
  //     id: "1",
  //     photo: "https://source.unsplash.com/random?bike/4",
  //     title: "Vélo Cargo",
  //     price: "1230 €",
  //     city: "Bordeaux",
  //   },
  //   {
  //     id: "2",
  //     photo: "https://source.unsplash.com/random?bike/5",
  //     title: "Vélo Cargo",
  //     price: "1380 €",
  //     city: "Bordeaux",
  //   },
  //   {
  //     id: "3",
  //     photo: "https://source.unsplash.com/random?bike/6",
  //     title: "Vélo Cargo",
  //     price: "1560 €",
  //     city: "Bordeaux",
  //   },
  // ]);

  //ajout des annonces en favoris si l'user est connecté, et s'il y en a 
  //ajout du "?" pour que cela fonctionne aussi s'il n'y en pas
  useEffect(() => {
    if (Object.keys(connectedUser).length > 0 && connectedUser.favorites?.length) {
      Promise.all(
        connectedUser?.favorites?.map((item) => {
          const req = axios.get(`http://localhost:3030/ads/${item}`);
          return req;
        })
      ).then((response) => setFavorites(response));
    }
  }, [connectedUser]);

  return (
    <div>
      <div className={classes.contain}>
        <Typography variant="h3" className={classes.title}>
          Mes Favoris :{" "}
        </Typography>
        <div className={classes.favorite}>
          {favorites?.map((favorite, index) => (
            <CardAds {...favorite} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
