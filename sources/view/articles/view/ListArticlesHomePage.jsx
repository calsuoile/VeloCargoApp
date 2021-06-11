import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ArticleCard from "./ArticleCard";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginLeft: "1000px",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "black",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
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
      <Typography className={classes.title} variant="h5">
        DERNIERS ARTICLES & ASTUCES
      </Typography>
      <div className={classes.cards}>
        {/* map pour affichage de tous les éléments de l'objet articles */}
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Voir Plus
        </Button>
      </div>
    </>
  );
};

export default ListArticlesHomePage;
