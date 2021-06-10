import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ArticleCard from "./ArticleCard";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "10px",
  },
  test: {
    display: "flex",
    justifyContent: "center",
  },

  cards: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
}));

const ListArticlesHomePage = () => {
  const classes = useStyles();

  //bouchon tableau d'objets articles:
  const articles = [
    {
      id: "1",
      title: "Comment Transporter Mon Vélo Cargo ?",
      avatar: "https://placedog.net/350/280/1",
      date: "18/01/2021",
    },
    {
      id: "2",
      title: "Quel Longtail Peut Transporter 3 Enfants ?",
      avatar: "https://placedog.net/350/280/2",
      date: "11/03/2021",
    },
    {
      id: "3",
      title: "Dois-Je Assurer Mon Vélo Cargo ?",
      avatar: "https://placedog.net/350/280/3",
      date: "28/05/2021",
    },
  ];

  return (
    <>
      <div className={classes.test}>
        <h1>ARTICLES & ASTUCES</h1>
      </div>
      <div className={classes.cards}>
        {/* map pour affichage de tous les éléments de l'objet articles */}
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <div className={classes.button}>
        <button>VOIR PLUS</button>
      </div>
    </>
  );
};

export default ListArticlesHomePage;
