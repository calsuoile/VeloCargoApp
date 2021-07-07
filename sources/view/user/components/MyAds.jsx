import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
// import axios from "axios";
import UserContext from "../../../context/user";
import CardAds from "../../home/CardAds";

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

  // const { connectedUser } = useContext(UserContext);
  const [myAds, setMyAds] = useState([
    {
      id: "1",
      photo: "https://source.unsplash.com/random?bike/4",
      title: "Vélo Cargo",
      price: "1230 €",
      city: "Bordeaux",
    },
    {
      id: "2",
      photo: "https://source.unsplash.com/random?bike/5",
      title: "Vélo Cargo",
      price: "1380 €",
      city: "Bordeaux",
    },
    {
      id: "3",
      photo: "https://source.unsplash.com/random?bike/6",
      title: "Vélo Cargo",
      price: "1560 €",
      city: "Bordeaux",
    },
  ]);
  // const { connectedUser } = useContext(UserContext);
  // const [ads, setAds] = useState([]);

  // useEffect(() => {
  //   console.log(connectedUser);

  //   if (Object.keys(connectedUser).length > 0) {
  //     const accessToken = localStorage.getItem("userToken");
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     };
  //     axios
  //       // .get(`http://velo-cargo-app.vercel.app/ads/my-ads`, config)
  //       .then((response) => {
  //         setAds(response.data);
  //         console.log(response.data);
  //       });
  //   }
  // }, [connectedUser]);

  return (
    <div>
      
      <div className={classes.flat}>
        {myAds.map((ads, index) => (
          <CardAds {...ads} key={index}/>
        // {ads.map((ad) => (
        //   <CardAds {...ad} />
        ))}
      </div>
    </div>
  );
}

export default MyAds;
