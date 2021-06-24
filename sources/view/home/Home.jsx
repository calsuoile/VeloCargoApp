import React from "react";
import ListArticlesHomePage from "./ListArticlesHomePage";
import Buysell from "./Buysell";
import CardAdsList from "./CardAdsList";

function Home() {
  return (
    <div>
      <Buysell />
      <CardAdsList />
      <ListArticlesHomePage />
    </div>
  );
}

export default Home;
