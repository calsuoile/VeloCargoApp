import React from "react";
import CardAds from "./components/CardAds";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
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
  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
  },
  
}));

function CardAdsList({ adsCard }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.marketplace}>
        {adsCard.map((card) => (
          <Link
            href={"/acheter-un-velo-cargo/annonces/" + card.id}
            key={card.id}
          >
            <a style={{ textDecoration: "none", color: "inherit" }}>
              <CardAds {...card} key={card.id} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardAdsList;
