import React from "react";
import ListArticlesHomePage from "./ListArticlesHomePage";
import ButtonBase from "./ButtonBases";
import ListAdsHomePage from "./ListAdsHomePage";

function Home({ articles, ads }) {
  return (
    <div>
      <ButtonBase />
      <ListAdsHomePage ads={ads} />
      <ListArticlesHomePage articles={articles} />
    </div>
  );
}

export default Home;
