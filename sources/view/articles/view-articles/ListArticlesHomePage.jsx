import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ArticleCard from "./components/ArticleCard";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginLeft: "90%",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "black",
    marginTop: "20px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
    marginBottom: "20px",
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
      photo: "https://source.unsplash.com/random?bike/1",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "18/01/2021",
      author: "Jack Sparrow",
    },
    {
      id: "2",
      title: "Quel Longtail Peut Transporter 3 Enfants ?",
      photo: "https://source.unsplash.com/random?bike/2",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "11/03/2021",
      author: "John Doe",
    },
    {
      id: "3",
      title: "Dois-Je Assurer Mon Vélo Cargo ?",
      photo: "https://source.unsplash.com/random?bike/3",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "28/05/2021",
      author: "Jane Doe",
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
