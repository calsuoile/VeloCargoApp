import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardAds from "../ads/view_ads/components/CardAds";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  hr: {
    width: "15%",
    height: "3px",
    backgroundColor: "#006262",
    border: "none",
    marginBottom: "5%",
  },
  button: {
    display: "flex",
    marginLeft: "85%",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "15px",
    color: "white",
    "&:hover": {
      backgroundColor: " #F29F24 ",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20px",
      fontSize: "10px",
      marginLeft: "80%",
    },
  },
  title: {
    marginTop: "5%",
    margin: "50px",
    display: "flex",
    justifyContent: "center",
    color: "#006969",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  marketplace: {
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

function ListAdsHomePage({ ads }) {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} variant="h3">
        Dernières annonces
      </Typography>
      <hr className={classes.hr}></hr>
      <div className={classes.marketplace}>
        {ads?.map((card) => (
          <Link
            href={"/acheter-un-velo-cargo/annonces/" + card.ads_id}
            key={card.ads_id}
          >
            <a style={{ textDecoration: "none", color: "inherit" }}>
              <CardAds {...card} key={card.id} />
            </a>
          </Link>
        ))}
      </div>
      <Link href="/acheter-un-velo-cargo" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Voir Plus
        </Button>
      </Link>
    </div>
  );
}

export default ListAdsHomePage;
