import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
// import axios from "axios";
import UserContext from "../../../context/user";
import CardAds from "../../home/CardAds";

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
  ads: {
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

function MyAds(props) {
  const classes = useStyles();

  const { connectedUser } = useContext(UserContext);
  const [ads, setAds] = useState([]);

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

  // useEffect(() => {
  //   console.log(connectedUser);

  //   if (Object.keys(connectedUser).length > 0) {
  //     const accessToken = localStorage.getItem("userToken");
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     };
  //     axios.get(`http://localhost:3030/ads/my-ads`, config).then((response) => {
  //       setAds(response.data);
  //       console.log(response.data);
  //     });
  //   }
  // }, [connectedUser]);

  return (
    <div>
      <div className={classes.contain}>
        <Typography variant="h3" className={classes.title}>
          Mes Annonces :{" "}
        </Typography>
        <div className={classes.ads}>
          {myAds.map((ads, index) => (
            <CardAds {...ads} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyAds;
