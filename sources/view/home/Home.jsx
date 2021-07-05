import React from "react";
import ListArticlesHomePage from "./ListArticlesHomePage";
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
