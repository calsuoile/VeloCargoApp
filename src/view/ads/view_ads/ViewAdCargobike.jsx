import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect, useState } from "react";
import PlaceIcon from "@material-ui/icons/Place";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AdsTableCargobike from "./components/AdsTableCargobike";
import AdsTechnique from "./components/AdsTechnique";
import AdsCarousel from "./components/AdsCarousel";
import DeleteButtonAds from "../../../common/DeleteButtonAds";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import UserContext from "./../../../context/user";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const moment = require("moment");
moment.locale("fr");

const useStyles = makeStyles({
  box: {
    position: "relative",
    margin: "10%",
  },
  header: {
    width: "100%",
    borderBlockEnd: "1px solid",
    paddingBottom: "10px",
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
    color:"#F27C08",
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
    color: "black",
  },
  iconFav: {
    margin: 20,
  },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
  },
  description: {
    fontSize: 20,
    marginBottom: 10
  },
  fav : {
    color: "#F27C08",
  },
});

function ViewAdCargobike({ ads, user_id, ads_id }) {
  const classes = useStyles();
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState(true);
  function handlePhone() {
    setPhoneNumber(!phoneNumber);
  }

  const [email, setEmail] = useState(true);
  function handleEmail() {
    setEmail(!email);
  }
  const { connectedUser } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = React.useState(
    connectedUser?.favorites?.includes(ads?.ads_id)
  );

  useEffect(() => {
    setIsFavorite(connectedUser?.favorites?.includes(ads?.ads_id));
  }, [connectedUser]);

  const handleClickFavorite = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const accessToken = localStorage.getItem("userToken");
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      if (isFavorite) {
        // if it's favorite it means you should remove it
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}ads/${ads.ads_id}/favorites`,
          config
        );
        toast.info("Annonce retirée de vos favoris");
      } else {
        // if not then we should add it
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}ads/${ads.ads_id}/favorites`,
          {},
          config
        );
        toast.success("Annonce ajoutée à vos favoris");
      }
      setIsFavorite(!isFavorite);
    }
  };

  // const handleClickFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <div className={classes.box}>
      <div className={classes.header}>
        <Typography variant="h5">{ads?.title}</Typography>
        <div className={classes.vendeur}>
          <Typography variant="body2">
            {ads?.firstname} {ads?.lastname}
          </Typography>
          <Typography variant="body2" className={classes.contact}>
            {" "}
            Contact :{" "}
            {phoneNumber ? (
              <IconButton color="secondary" onClick={handlePhone}>
                <PhoneIcon />
              </IconButton>
            ) : (
              <p className={classes.num}>{ads?.phone_number}</p>
            )}{" "}
            {email ? (
              <IconButton color="secondary" onClick={handleEmail}>
                {" "}
                <MailOutlineIcon />{" "}
              </IconButton>
            ) : (
              <p className={classes.num}>{ads?.email}</p>
            )}
          </Typography>
        </div>
        <Typography variant="body2" className={classes.where}>
          {" "}
          <PlaceIcon /> {ads?.country}, {ads?.department}
        </Typography>
        <Typography variant="body1" className={classes.when}>
          {moment(ads?.created_at).format("LL à HH:mm")}
        </Typography>
        <div className={classes.icons}>
          {ads?.user_id === connectedUser?.id && (
            <DeleteButtonAds
              onDelete={() => router.push("/acheter-un-velo-cargo")}
              color="secondary"
              adsId={ads?.ads_id}
            />
          )}
          {isFavorite ? (
           <FavoriteIcon className={classes.fav} onClick={handleClickFavorite} />
           ) : (
             <FavoriteBorderIcon className={classes.fav} onClick={handleClickFavorite} />
           )}
        </div>
        <Typography variant="body1" className={classes.description}>
          {ads?.description}
        </Typography>
      </div>
      <div className={classes.photo}>
        <AdsCarousel className={classes.carousel} ads={ads} />
      </div>
      <div className={classes.table}>
        {" "}
        <AdsTableCargobike ads={ads} />
      </div>
      <div className={classes.technique}>
        <Typography variant="h3" className={classes.title}>
          Fiche technique
        </Typography>
        <AdsTechnique ads={ads} />
      </div>
    </div>
  );
}

export default ViewAdCargobike;
