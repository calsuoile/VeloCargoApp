import React, { useState, useEffect } from "react";
import CardAdsList from "../ads/view_ads/CardAdsList";
import SortBy from "/sources/view/marketplace/components/SortBy";
import TitleAds from "/sources/view/marketplace/components/TitleAds";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "../marketplace/Filter";
import PaginationPage from "./components/PaginationPage";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  Marketplace: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "50px",
  },
  titlesort: {
    display: "flex",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
}));

function Marketplace({ adsCard, type = "", total: initialTotal }) {
  const [ads, setAds] = useState(adsCard);
  const [filter, setFilter] = useState({
    type: type,
    page: 1,
  });
  const [total, setTotal] = useState(initialTotal);

  useEffect(() => {
    setAds(adsCard);
    setTotal(initialTotal);
  }, [adsCard, initialTotal]);

  useEffect(() => {
    const queryFilter = Object.entries(filter)
      .map(([key, value]) => {
        if (!value) {
          return "";
        }
        if (key === "sort") {
          return value;
        } else {
          return `${key}=${value}`;
        }
      })
      .filter((item) => item)
      .join("&");

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}ads?${queryFilter}`)
      .then((response) => response.data)
      .then((data) => {
        setAds(data?.data);
        setTotal(data?.metadata?.totalAds);
      })
      .catch((error) => console.log(error));
  }, [filter]);

  const doFilter = (newFilter) => {
    setFilter({ ...filter, ...newFilter, page: 1 });
  };

  const classes = useStyles();
  return (
    <div className={classes.Marketplace}>
      <Filter onSubmit={doFilter} type={filter.type} />
      <div className={classes.column}>
        <TitleAds />
        <SortBy
          onChange={(order) => setFilter({ ...filter, sort: order })}
          order={filter.sort}
        />
        <CardAdsList adsCard={ads} />
        <PaginationPage
          page={filter.page}
          onChange={(e, numPage) => setFilter({ ...filter, page: numPage })}
          total={total}
        />
      </div>
    </div>
  );
}

export default Marketplace;
