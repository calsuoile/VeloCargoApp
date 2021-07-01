import React from "react";
import ListArticlesHomePage from "./ListArticlesHomePage";
import Button from "@material-ui/core/Button";
import { Link, Typography } from "@material-ui/core";
import ButtonBase from "./ButtonBases";
import ListAdsHomePage from "./ListAdsHomePage";

function Home(props) {
  return (
    <div>
      <ButtonBase />
      
      <Typography className={classes.title} variant="h5">
        ACHETER UN VELO CARGO
      </Typography>
      <ListAdsHomePage />
      <Link href="acheter-un-velo-cargo" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Voir Plus
        </Button>
      </Link>
      <ListArticlesHomePage />
    </div>
  );
}

export default Home;
