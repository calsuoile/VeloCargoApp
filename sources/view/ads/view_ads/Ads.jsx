import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import PlaceIcon from "@material-ui/icons/Place";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IconButton from "@material-ui/core/IconButton";
import AdsTable from "./AdsTable";
import AdsTechnique from "./AdsTechnique";
import AdsCarousel from "./AdsCarousel";

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
    paddingTop: "10px",
  },

  photo1: {
    width: " 70%",
    borderRadius: "5px",
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
    color: "rgba(255, 196, 0, 1)"
  },
});

function Ads(props) {
  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState(true);
  function handlePhone() {
    setPhoneNumber(!phoneNumber);
  }

  const [email, setEmail] = useState(true);
  function handleEmail() {
    setEmail(!email);
  }

  return (
    <div className={classes.box}>
      <div className={classes.header}>
        <Typography variant="h1">VELO CARGO PEUGEOT</Typography>

        <div className={classes.vendeur}>
          <Typography variant="body2">Michel Dupont </Typography>
          <Typography variant="body2" className={classes.contact}>
            {" "}
            Contact :{" "}
            {phoneNumber ? (
              <IconButton color="secondary" onClick={handlePhone}>
                <PhoneIcon />
              </IconButton>
            ) : (
              <p className={classes.num}>06 88 27 55 32</p>
            )}{" "}
            {email ? (
              <IconButton color="secondary" onClick={handleEmail}>
                {" "}
                <MailOutlineIcon />{" "}
              </IconButton>
            ) : (
              <p className={classes.num}>michel.dupont@gmail.com</p>
            )}
          </Typography>
        </div>

        <Typography variant="body2" className={classes.where}>
          {" "}
          <PlaceIcon /> Bordeaux
        </Typography>
        <Typography variant="body1" className={classes.when}>
          Le 17 mai 2021
        </Typography>
      </div>

      <div className={classes.photo}>
        <AdsCarousel className={classes.carousel} />
      </div>
      <div className={classes.table}>
        {" "}
        <AdsTable />
      </div>
      <div className={classes.technique}>
        <Typography variant="h3" className={classes.title}>
          Fiche technique
        </Typography>
        <AdsTechnique />
      </div>
      <div className={classes.accessory}>
        <Typography variant="h3" className={classes.title}>
          Accessoires Complémentaire
        </Typography>
        <div className={classes.accessoryImg}>
          <img src="https://placedog.net/991" width="200"></img>
          <img src="https://placedog.net/992" width="200"></img>
          <img src="https://placedog.net/993" width="200"></img>
        </div>
      </div>
    </div>
  );
}

export default Ads;
