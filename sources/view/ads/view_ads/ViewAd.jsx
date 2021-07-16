import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext,useState } from "react";
import PlaceIcon from "@material-ui/icons/Place";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AdsTable from "./components/AdsTable";
import AdsTechnique from "./components/AdsTechnique";
import AdsCarousel from "./components/AdsCarousel";
import DeleteButtonAds from "../../../common/DeleteButtonAds";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import UserContext from "./../../../context/user";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

const useStyles = makeStyles({
  box: {
    position: "relative",
    margin: "50px",
  },
  header: {
    width: "100%",
    marginLeft: "20px",
    borderBlockEnd: "1px solid",
    borderBottomHeight: "10px",
    paddingBottom: "15px",
  },
  where: {
    paddingTop: "5px",
    display: "flex",
    alignItems: "center",
  },
  when: {
    marginLeft: "25px",
  },
  contact: {
    display: "flex",
    alignItems: "center",
    margin: "5px",
  },
  vendeur: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  photo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "10px",
  },
  table: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  technique: {
    marginTop: "50px",
  },
  title: {
    marginLeft: "0px",
    marginBottom: "30px",
    borderBottom: "1px solid",
  },
  accessory: {
    marginTop: "50px",
  },
  accessoryImg: {
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: "5px",
  },
  carousel: {
    width: " 70%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },
  num: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
    color: "rgba(255, 196, 0, 1)",
  },
});

function ViewAd({ ads, user }) {
  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState(true);
  function handlePhone() {
    setPhoneNumber(!phoneNumber);
  }

  const [email, setEmail] = useState(true);
  function handleEmail() {
    setEmail(!email);
  }

  const [isFavorite, setIsFavorite] = React.useState(false);
  const { connectedUser } = useContext(UserContext);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleClick = async () => {
    const accessToken = localStorage.getItem("userToken");
    if ((accessToken) && (setIsFavorite(true))) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      await axios.post(
        `https://localhost:3030/users/${props.id}/favorites`,
        {},
        config
      );
    }
  };

  return (
    <div className={classes.box}>
      <div className={classes.header}>
        <Typography variant="h1">VELO CARGO PEUGEOT</Typography>
        <div className={classes.vendeur}>
          <Typography variant="body2">
            {user.firstname} {user.lastname}
          </Typography>
          <Typography variant="body2" className={classes.contact}>
            {" "}
            Contact :{" "}
            {phoneNumber ? (
              <IconButton color="secondary" onClick={handlePhone}>
                <PhoneIcon />
              </IconButton>
            ) : (
              <p className={classes.num}>{user.phone_number}</p>
            )}{" "}
            {email ? (
              <IconButton color="secondary" onClick={handleEmail}>
                {" "}
                <MailOutlineIcon />{" "}
              </IconButton>
            ) : (
              <p className={classes.num}>{user.email}</p>
            )}
          </Typography>
        </div>
        <Typography variant="body2" className={classes.where}>
          {" "}
          <PlaceIcon /> {ads.country}, {ads.department}
        </Typography>
        <Typography variant="body1" className={classes.when}>
          {ads.created_at}
        </Typography>
        <DeleteButtonAds color="secondary" />
        <div
          color="secondary"
          className={classes.icon}
          onClick={handleClickFavorite}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          {/* <IconButton aria-label="add to favorites" onClick={handleClick}>
            {connectedUser?.favorites?.includes(props._id) && <FavoriteIcon />}
            {!connectedUser?.favorites?.includes(props._id) && (
              <FavoriteBorderIcon />
            )}
          </IconButton> */}
        </div>
      </div>
      <div className={classes.photo}>
        <AdsCarousel className={classes.carousel} />
      </div>
      <div className={classes.table}>
        {" "}
        <AdsTable ads={ads} />
      </div>
      <div className={classes.technique}>
        <Typography variant="h3" className={classes.title}>
          Fiche technique
        </Typography>
        <AdsTechnique ads={ads} />
      </div>
      <div className={classes.accessory}>
        <Typography variant="h3" className={classes.title}>
          Accessoires Complémentaire
        </Typography>
        <div className={classes.accessoryImg}>
          <img
            src="https://source.unsplash.com/random?bike/1"
            width="200"
          ></img>
          <img
            src="https://source.unsplash.com/random?bike/2"
            width="200"
          ></img>
          <img
            src="https://source.unsplash.com/random?bike/3"
            width="200"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ViewAd;
