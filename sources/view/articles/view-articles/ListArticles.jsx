import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ArticleCard from "./components/ArticleCard";
import Search from "./components/Search";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
}));

const ListArticles = ({ articles }) => {
  const classes = useStyles();

  //hook pour définir valeur par défault et valeur saisie par le user:
  const [searchValue, setSearchValue] = useState("");
  //fonction de récupération de la valeur saisie par le user:
  const handleSearchValueChange = (e) => setSearchValue(e.target.value);

  return (
    <>
      <Typography className={classes.title} variant="h5">
        ARTICLES & ASTUCES
      </Typography>
      <Search
        searchValue={searchValue}
        handleSearchValueChange={handleSearchValueChange}
      />
      {/* map pour affichage de tous les éléments de l'objet articles 
      & filtre par mot clé*/}
      <div className={classes.cards}>
        {articles
          .filter((article) => article.title.includes(searchValue))
          .map((article, index) => (
            <ArticleCard key={index.id} {...article} />
          ))}
      </div>
    </>
  );
};

export default ListArticles;
