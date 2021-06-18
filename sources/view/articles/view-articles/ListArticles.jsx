import {
  Button,
  FormControl,
  Icon,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  useTheme,
  Typography,
} from "@material-ui/core";
import React from "react";
import ArticleCard from "./components/ArticleCard";

const useStyles = makeStyles((theme) => ({
  searchInputContainer: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.11)",
    borderRadius: theme.spacing(1),
    width: "50%",
    height: "100%",
    marginLeft: "25%",
    marginBottom: "50px",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important",
    },
    "& .MuiInputAdornment-positionStart": {
      marginRight: theme.spacing(2),
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto",
    },
  },

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

const ListArticles = () => {
  const classes = useStyles();
  const theme = useTheme();

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
    {
      id: "4",
      title: "Comment Transformer Mon Vélo Classique En Vélo Cargo ?",
      photo: "https://source.unsplash.com/random?bike/4",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "05/02/2021",
      author: "Lucky Luke",
    },
    {
      id: "5",
      title: "Où Louer Un Vélo Cargo ?",
      photo: "https://source.unsplash.com/random?bike/5",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "30/03/2021",
      author: "Superman",
    },
    {
      id: "6",
      title: "Quel vélo cargo choisir ?",
      photo: "https://source.unsplash.com/random?bike/6",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "14/05/2021",
      author: "Bob Marley",
    },
  ];

  return (
    <>
      <Typography className={classes.title} variant="h5">
        ARTICLES & ASTUCES
      </Typography>
      {/* Barre de recherche d'article par mot(s) clé(s) */}
      <div className={classes.searchInputContainer} data-aos="fade-up">
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            size="large"
            startAdornment={
              <InputAdornment position="flex-start">
                <Icon
                  fontIconClass="fas fa-search"
                  fontIconColor={theme.palette.primary.dark}
                />
              </InputAdornment>
            }
            placeholder="Rechercher un article"
          />
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.searchButton}
        >
          Rechercher
        </Button>
      </div>
      <div className={classes.cards}>
        {/* map pour affichage de tous les éléments de l'objet articles */}
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </>
  );
};

export default ListArticles;
