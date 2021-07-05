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
      
     
      <ListAdsHomePage />
     
      <ListArticlesHomePage />
    </div>
  );
}

export default Home;
