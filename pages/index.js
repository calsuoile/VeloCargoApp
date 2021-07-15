import axios from "axios";
import React from "react";
import Home from "../sources/view/home/Home";

function index({ articles, ads }) {
  return (
    <div>
      <Home articles={articles} ads={ads}/>
    </div>
  );
}

export async function getStaticProps(props) {
  const articles = await axios.get("http://localhost:3030/articles?limit=3");
  const ads = await axios.get("http://localhost:3030/ads?limit=4");

  return {
    props: { articles: articles.data, ads: ads.data },
    revalidate: 60,
  };
}

export default index;
