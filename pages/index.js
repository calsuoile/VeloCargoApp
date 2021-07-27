import axios from "axios";
import React from "react";
import Home from "../src/view/home/Home";

function index({ articles, ads }) {
  return (
    <div>
      <Home articles={articles} ads={ads} />
    </div>
  );
}

export async function getStaticProps(props) {
  const articles = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}articles?limit=3`
  );
  const ads = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}ads?limit=3`);

  return {
    props: { articles: articles.data.data, ads: ads.data.data },
    revalidate: 60,
  };
}

export default index;
