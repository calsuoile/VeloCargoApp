import React from "react";
import ListArticlesHomePage from "../articles/view-articles/ListArticlesHomePage";
import Buysell from "./Buysell";
import CardAdsList from "./CardAdsList";

function Home(props) {
  return (
    <div>
      <Buysell />
      <CardAdsList />
      <ListArticlesHomePage />
    </div>
  );
}

export default Home;
