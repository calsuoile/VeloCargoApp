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

  const [ads, setAds] = useState({
    date:"25 mai 2021",
    price:"2000",
    category:"Triporteur",
    model:"560x",
    guarantee:"Oui",
    bicycode:"2340",
    brand:"Peugeot",
    country: "France",
    dep:"Gironde",
    general_state:"Bon",
    electric: "Oui",
    frame_size:"50",
    length:"200",
    kms:"20",
    volume_box:"100",
    mecanic_state:"bon",
    esthetic_state:"bon", 
    engin_power:"25",
    batterie_wolt:"50", 

  });

  const [user, setUser] = useState({
    firstname: "Michel", 
    lastname:"Dupont",
    phone_number: "06 88 27 55 32",
    email:"michel.dupont@gmail.com",

  })

  return (
    <div className={classes.box}>
      <div className={classes.header}>
        <Typography variant="h1">VELO CARGO PEUGEOT</Typography>

        <div className={classes.vendeur}>
          <Typography variant="body2">{user.firstname} {user.lastname}</Typography>
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
          <PlaceIcon /> {ads.country},{ads.dep}
        </Typography>
        <Typography variant="body1" className={classes.when}>
         {ads.date}
        </Typography>
      </div>

      <div className={classes.photo}>
        <AdsCarousel className={classes.carousel} />
      </div>
      <div className={classes.table}>
        {" "}
        <AdsTable ads={ads}/>
      </div>
      <div className={classes.technique}>
        <Typography variant="h3" className={classes.title}>
          Fiche technique
        </Typography>
        <AdsTechnique ads={ads}/>
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
