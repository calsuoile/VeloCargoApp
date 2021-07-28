import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import UserContext from "../../../context/user";
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
    color : "#BFD9D9",
    [theme.breakpoints.down("sm")]: {
      marginLeft : "5px",
    },
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

  //si l'utilisateur est connecté, cela renvoie les annonces qu'il a posté sur sa page user
  useEffect(() => {
    if (Object.keys(connectedUser).length > 0) {
      const accessToken = localStorage.getItem("userToken");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}ads?user_id=${connectedUser.id}`,
          config
        )
        .then((response) => {
          setAds(response?.data?.data);
          console.log(response?.data?.data);
        });
    }
  }, [connectedUser]);

  return (
    <div>
      <div className={classes.contain}>
        <Typography variant="h3" className={classes.title}>
          Mes Annonces :{" "}
        </Typography>
        <div className={classes.ads}>
          {ads.map((ads, index) => (
            <CardAds {...ads} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyAds;
